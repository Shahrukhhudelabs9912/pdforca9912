"""
File utility functions for validation and processing.
"""
import io
import os
import re
try:
    import magic
except Exception:
    magic = None
import zipfile
from typing import List, Tuple, Optional
from urllib.parse import quote
from uuid import uuid4
from fastapi import UploadFile, HTTPException
from fastapi.responses import StreamingResponse

from app.config import settings


def validate_file_type(file: UploadFile, allowed_types: List[str], file_bytes: bytes = None) -> bool:
    """
    Validate if a file's content type is allowed.
    Also validates magic bytes if file_bytes are provided.
    """
    if not file.content_type:
        return False

    if file.content_type not in allowed_types:
        return False

    if file_bytes is not None:
        return validate_file_content(file_bytes, allowed_types)

    return True


def validate_file_size(file: UploadFile, max_size: int = None) -> bool:
    """
    Validate if a file's size is within limits.
    
    Args:
        file: UploadFile object
        max_size: Maximum file size in bytes
        
    Returns:
        bool: True if file size is within limits
    """
    if max_size is None:
        max_size = settings.MAX_UPLOAD_SIZE
    
    # Move to end of file to get size
    file.file.seek(0, 2)  # Seek to end
    file_size = file.file.tell()
    file.file.seek(0)  # Reset to beginning
    
    return file_size <= max_size


async def read_upload_file(file: UploadFile) -> bytes:
    """
    Read an uploaded file into memory as bytes.
    
    Args:
        file: UploadFile object
        
    Returns:
        bytes: File content as bytes
    """
    content = await file.read()
    return content


def create_file_response(
    file_bytes: bytes,
    filename: str,
    media_type: str = "application/pdf"
) -> StreamingResponse:
    """
    Create a StreamingResponse for file download.
    
    Args:
        file_bytes: File content as bytes
        filename: Name for the downloaded file
        media_type: MIME type for the response
        
    Returns:
        StreamingResponse: FastAPI response for file download
    """
    return StreamingResponse(
        io.BytesIO(file_bytes),
        media_type=media_type,
        headers={
            "Content-Disposition": _content_disposition(filename),
            "Content-Length": str(len(file_bytes)),
        }
    )


def create_zip_response(files: List[Tuple[str, bytes]], zip_filename: str = "output.zip") -> StreamingResponse:
    """
    Create a ZIP file response from multiple files.
    
    Args:
        files: List of (filename, content) tuples
        zip_filename: Name for the downloaded ZIP file
        
    Returns:
        StreamingResponse: FastAPI response for ZIP download
    """
    zip_buffer = io.BytesIO()
    
    with zipfile.ZipFile(zip_buffer, "w", zipfile.ZIP_DEFLATED) as zip_file:
        for filename, content in files:
            zip_file.writestr(filename, content)
    
    zip_buffer.seek(0)
    zip_bytes = zip_buffer.getvalue()
    
    return StreamingResponse(
        io.BytesIO(zip_bytes),
        media_type="application/zip",
        headers={
            "Content-Disposition": _content_disposition(zip_filename),
            "Content-Length": str(len(zip_bytes)),
        }
    )


def format_bytes(size: int) -> str:
    """
    Format bytes to human readable string.
    
    Args:
        size: Size in bytes
        
    Returns:
        str: Formatted size string
    """
    for unit in ["B", "KB", "MB", "GB"]:
        if size < 1024.0:
            return f"{size:.2f} {unit}"
        size /= 1024.0
    return f"{size:.2f} TB"

_CONTENT_SIGNATURES = {
    "application/pdf": ("application/pdf",),
    "image/jpeg": ("image/jpeg",),
    "image/png": ("image/png",),
}

def validate_file_content(file_bytes: bytes, allowed_types: list) -> bool:
    """File ke asli bytes se type check karo (browser MIME par bharosa mat karo)."""
    if not file_bytes:
        return False
    if magic is None:
        # Agar magic library available nahi hai, toh content validation skip karo
        return True
    try:
        detected = magic.from_buffer(file_bytes[:2048], mime=True)
    except Exception:
        return False
    return detected in allowed_types


def _safe_filename(name: str) -> str:
    """CR/LF aur quotes hatao taaki header inject na ho sake."""
    name = re.sub(r'[\r\n"]', "", name or "")
    return name.strip() or "download"


def _content_disposition(name: str) -> str:
    """Build a Content-Disposition header value safe for any filename.

    Uses RFC 5987 ``filename*`` for non-ASCII names so browsers display
    the original Unicode name, with an ASCII fallback for older clients.
    """
    safe = _safe_filename(name)
    try:
        safe.encode("latin-1")
        return f'attachment; filename="{safe}"'
    except UnicodeEncodeError:
        ascii_fallback = safe.encode("ascii", "replace").decode("ascii")
        utf8_quoted = quote(safe)
        return (
            f"attachment; filename=\"{ascii_fallback}\"; "
            f"filename*=utf-8''{utf8_quoted}"
        )


def sanitize_filename(filename: str) -> str:
    """Strip path components and dangerous characters from an upload filename."""
    if not filename:
        return f"upload_{uuid4().hex[:8]}"

    name = os.path.basename(filename)
    name = name.replace("\x00", "").replace("..", "")

    stem, ext = os.path.splitext(name)
    stem = re.sub(r'[<>:"/\\|?*\x00-\x1f]', "_", stem).strip(". ")

    if not stem:
        stem = f"upload_{uuid4().hex[:8]}"

    return stem + ext