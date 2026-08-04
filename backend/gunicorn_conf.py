"""Gunicorn configuration for the PDFOrca backend.

Tuned for a 4 vCPU / 8 GB VPS (Contabo Cloud VPS 10). Because Phase 1
offloads every blocking conversion to a thread pool
(app/utils/concurrency.py), a small number of async workers can serve
many concurrent connections — the event loop never blocks on CPU-bound
work.

Override any value via environment variables (e.g. WEB_CONCURRENCY) without
editing this file.
"""
import os

# ── Workers ───────────────────────────────────────────────────────────
# 2 workers on the 4-core VPS. Each worker allows 1 heavy CPU job
# (HEAVY_JOB_CONCURRENCY=1), so at most 2 Ghostscript/LibreOffice jobs run
# at once — one per core — leaving 2 cores for the event loops, frontend
# SSR and nginx. More workers here just oversubscribe the box and make
# every concurrent job slower. Override WEB_CONCURRENCY on a bigger machine.
# NOTE: docker-compose sets WEB_CONCURRENCY explicitly, which wins over this.
workers = int(os.getenv("WEB_CONCURRENCY", "2"))
worker_class = "uvicorn.workers.UvicornWorker"

# ── Network ───────────────────────────────────────────────────────────
bind = f"0.0.0.0:{os.getenv('PORT', '8000')}"

# ── Timeouts ──────────────────────────────────────────────────────────
# Long enough for the slowest legitimate conversion (LibreOffice/OCR can
# take a minute or two on big files). Matches Nginx proxy_read_timeout.
timeout = int(os.getenv("GUNICORN_TIMEOUT", "300"))
graceful_timeout = 30
# Keep-alive a little high since Nginx sits in front and reuses connections.
keepalive = 15

# ── Worker recycling ──────────────────────────────────────────────────
# Restart workers periodically to bound memory growth from native libs
# (LibreOffice/pikepdf can leak over time). Jitter avoids a thundering herd.
max_requests = 500
max_requests_jitter = 50

# ── Logging ───────────────────────────────────────────────────────────
accesslog = "-"   # stdout — captured by Docker/journald
errorlog = "-"
loglevel = os.getenv("GUNICORN_LOGLEVEL", "info")
