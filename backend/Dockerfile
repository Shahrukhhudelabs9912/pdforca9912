# PDFOrca backend image (multi-stage).
# Python 3.12 matches the project interpreter (fastapi 0.104.1).

# ── Stage 1: install Python dependencies ────────────────────────────────
FROM python:3.12-slim AS builder
WORKDIR /build
COPY requirements-linux.txt .
RUN pip install --no-cache-dir --prefix=/install -r requirements-linux.txt

# ── Stage 2: runtime image ──────────────────────────────────────────────
FROM python:3.12-slim

# System dependencies for the PDF/Office/OCR toolchain:
#   libreoffice-*  : Word/PowerPoint/Excel -> PDF (headless)
#   tesseract-ocr  : OCR engine (+ Hindi language pack)
#   ghostscript    : required by ocrmypdf
#   poppler-utils  : pdf2image (PDF -> JPG) backend
#   libmagic1      : python-magic file-type sniffing
#   fonts-dejavu   : baseline fonts so LibreOffice/reportlab render text
#   fonts-liberation : metric-compatible replacements for Arial / Times New Roman / Courier New
#   fonts-crosextra-carlito : metric-compatible replacement for Calibri (default Office body font)
#   fonts-crosextra-caladea : metric-compatible replacement for Cambria (default Office heading font)
#   fonts-noto-* : broad Unicode + CJK + emoji coverage so non-Latin docs don't fall back to boxes
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y --no-install-recommends \
        libreoffice-core libreoffice-writer libreoffice-calc libreoffice-impress \
        tesseract-ocr tesseract-ocr-hin \
        ghostscript \
        poppler-utils \
        libmagic1 \
        fonts-dejavu fonts-dejavu-extra \
        fonts-liberation fonts-crosextra-carlito fonts-crosextra-caladea \
        fonts-noto-core fonts-noto-cjk fonts-noto-color-emoji \
    && rm -rf /var/lib/apt/lists/*

# Font substitution aliases for Office fonts with no metric-compatible package
# (notably Aptos, Office's default since 2024). See the file for the rationale.
# Installed before fc-cache so the alias is baked into the warmed cache.
COPY fontconfig/99-office-aliases.conf /etc/fonts/conf.d/99-office-aliases.conf
RUN fc-cache -f

WORKDIR /app

# Copy Python packages from builder stage
COPY --from=builder /install /usr/local

# App code
COPY . .

# Resolver auto-detects /usr/bin/soffice, but set it explicitly to be safe.
ENV LIBREOFFICE_PATH=/usr/bin/soffice \
    PYTHONUNBUFFERED=1 \
    PORT=8000

EXPOSE 8000

# Give appuser a real HOME with a writable cache dir. Without this, fontconfig
# (and LibreOffice's dconf) log "No writable cache directories" and rebuild the
# font cache on every conversion — the system cache warmed by `fc-cache -f`
# above is used, but fontconfig still needs a writable per-user cache location.
RUN useradd -r -m -d /home/appuser -s /bin/false appuser \
    && mkdir -p /home/appuser/.cache/fontconfig \
    && chown -R appuser:appuser /home/appuser /app
ENV HOME=/home/appuser \
    XDG_CACHE_HOME=/home/appuser/.cache
USER appuser

# Gunicorn manages UvicornWorkers (config in gunicorn_conf.py).
CMD ["gunicorn", "app.main:app", "-k", "uvicorn.workers.UvicornWorker", "-c", "gunicorn_conf.py"]
