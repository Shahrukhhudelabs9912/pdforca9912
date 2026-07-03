---
title: "How to Compress Scanned Documents Without Losing Readability (2026)"
description: "Scanned PDFs are huge — 5 MB per page is common. Learn how to shrink them by 70–90% while keeping text sharp and images clear. Free, browser-based, no software required."
date: "2026-07-03"
category: "Tips"
author: "PDFOrca Team"
relatedTool: "compress-pdf"
keywords:
  - compress scanned pdf
  - reduce scanned document size
  - shrink scanned pdf
  - compress scanned documents online
  - scanned pdf too large
  - reduce scan file size
  - compress scanned pages without losing quality
---

A single page scanned at 300 DPI weighs 3–5 MB. Scan a 20-page contract and you're looking at a 60–100 MB file that won't attach to an email, won't upload to a portal, and takes forever to open on a phone.

Scanned documents are the heaviest PDFs most people encounter — and they're also the trickiest to compress. Squeeze too hard and the text turns into an unreadable blur. Don't squeeze enough and the file stays too large for its destination.

This guide explains how to find the sweet spot: maximum size reduction with zero readability loss.

## Why Scanned PDFs Are So Large

A regular PDF stores text as vector data — lightweight mathematical descriptions of letter shapes. A scanned PDF stores text as a photograph. Every letter, every line, every margin is captured as pixels.

Here's the size comparison:

| Document type | Typical size per page |
|--------------|----------------------|
| Text-only PDF (digital) | 10–50 KB |
| Text + images (digital) | 100–500 KB |
| Scanned document (200 DPI) | 1–3 MB |
| Scanned document (300 DPI) | 3–5 MB |
| Scanned colour photograph (600 DPI) | 8–15 MB |

A 10-page digitally created PDF might be 500 KB total. The same 10 pages scanned at 300 DPI could be 40 MB. That's an 80x difference — and it's entirely because scanned pages are images, not text.

## How to Compress Scanned Documents (3 Steps)

1. Open the [Compress PDF tool](/compress-pdf)
2. Upload your scanned PDF
3. Choose a compression level, click **Compress**, and download the smaller file

For most scanned documents, **Recommended (medium) compression** cuts file size by 50–70% without any noticeable quality loss. The text stays sharp, signatures remain legible, and stamps or seals are still clear.

### Choosing the Right Level for Scanned Documents

| Compression level | Size reduction | Quality impact | Best for |
|-------------------|---------------|----------------|----------|
| **Low** | 20–40% | None visible | Archives where you want maximum fidelity |
| **Medium / Recommended** | 50–70% | None visible | Email, sharing, most uploads |
| **High** | 70–90% | Slight softening on fine detail | Strict size limits (200 KB portals) |

**Start with Medium.** Open the result, zoom to 100%, and check that the text is crisp. If it looks good and meets your size requirement, you're done. Only step up to High if you need to hit a very tight limit.

## Before You Compress: Quick Wins

Sometimes you can dramatically reduce file size before even touching the compression tool.

### Remove Unnecessary Pages

That 30-page scanned document might have 5 blank pages from the scanner feeding empty sheets. Each blank page still weighs 1–3 MB because it's stored as an image.

1. Open the [Organize PDF tool](/organize-pdf)
2. Scroll through the page thumbnails
3. Delete any blank, duplicate, or irrelevant pages
4. Download the trimmed file, then compress

Removing 5 blank pages from a 300 DPI scan saves 15–25 MB instantly — no quality loss at all.

### Check for Duplicate Scans

It's common to accidentally scan the same page twice — especially with automatic document feeders. A quick scroll through the page thumbnails catches duplicates before they inflate your file size.

## Compressing for Specific Size Limits

Different destinations have different limits. Here's a practical playbook for scanned documents:

### Gmail / Outlook Attachment (25 MB limit)

A 15-page scanned contract at 45 MB needs to get under 25 MB.

1. Remove any blank or unnecessary pages → [Organize PDF](/organize-pdf)
2. Compress at **Medium** level → [Compress PDF](/compress-pdf)
3. Expected result: 12–18 MB — well under the limit

### Indian Government Portals (200 KB – 1 MB)

Passport Seva, PAN applications, UPSC forms — these portals demand tiny files.

1. If you have more pages than needed, extract only the required pages → [Extract Pages](/extract-pages)
2. Compress at **High** level → [Compress PDF](/compress-pdf)
3. If still over the limit, consider re-scanning at 200 DPI instead of 300 DPI (see scanning tips below)

### Job Portals (2–5 MB)

Resume, certificates, and reference letters scanned as PDFs.

1. Compress at **Medium** or **High** depending on the limit
2. For multiple documents, compress each individually before [merging](/merge-pdf) them

### WhatsApp / Telegram File Sharing (16–100 MB)

WhatsApp allows files up to 16 MB (or 100 MB on some versions). Medium compression usually gets scanned documents under this limit comfortably.

## Scanning Tips That Reduce File Size at the Source

The best compression happens before the file is created. These scanning settings produce smaller files from the start:

### Choose the Right DPI

DPI (dots per inch) is the single biggest factor in scanned file size.

| DPI | Quality | File size per page | When to use |
|-----|---------|-------------------|-------------|
| 150 | Readable but soft | 500 KB – 1 MB | Quick internal sharing |
| 200 | Good for most documents | 1–2 MB | Standard office documents |
| 300 | Sharp, print-quality | 3–5 MB | Legal documents, official records |
| 600 | Extremely detailed | 8–15 MB | Photographs, fine artwork |

**For text documents, 200 DPI is the sweet spot.** It's sharp enough for any screen and any portal, and the files are half the size of 300 DPI scans. Only use 300 DPI if the document will be reprinted at full size or submitted to a portal that explicitly demands it.

### Scan in Grayscale, Not Colour

A colour scan stores three channels of data (red, green, blue). A grayscale scan stores one channel. That's roughly 3x the data for colour — and most documents (contracts, letters, certificates) don't need colour.

| Scan mode | Relative size | When to use |
|-----------|--------------|-------------|
| Black & white (1-bit) | Smallest | Clean text with no images |
| Grayscale | Medium | Text with signatures, stamps, or seals |
| Colour | Largest | Documents with colour photos or graphics |

If the document is a black text contract with a blue signature, grayscale captures the signature legibly while cutting file size by 60–70% compared to colour.

### Use Your Scanner's Built-in Compression

Most modern scanners (and phone scanning apps like Adobe Scan, Microsoft Lens, CamScanner) have a quality or compression setting. Setting this to "Medium" or "Standard" during scanning creates a smaller file that still compresses well afterward.

## Scanned vs. Digital: How Compression Differs

Compression works differently on scanned and digital PDFs:

**Digital PDFs** contain vector text and embedded images. Compression targets the images — text stays razor-sharp at any compression level because it's not an image.

**Scanned PDFs** are entirely images. Compression affects everything — text, signatures, logos, handwriting. The algorithm reduces image resolution and removes fine detail. That's why scanned documents need more careful compression than digital ones.

This is also why Medium compression on a digital PDF is virtually lossless, while Medium compression on a scanned PDF is "visually lossless" — technically some pixel data is removed, but your eyes can't tell the difference at normal reading size.

## Advanced: OCR Before Compressing

Here's a technique that produces the smallest, most useful files:

1. Run the scanned PDF through [OCR](/ocr-pdf) first — this adds a searchable text layer on top of the scanned images
2. Then compress the file

OCR doesn't reduce file size by itself, but the combination is powerful: you get a smaller file that's also searchable. You can find text with Ctrl+F, copy and paste content, and even convert to Word later.

This is especially valuable for archiving — a compressed OCR'd document is smaller than the original scan and infinitely more useful.

## Common Mistakes

**Compressing a file that's already been compressed.** Each round of compression removes more detail. If someone already compressed the scan before sending it to you, compressing it again will degrade quality noticeably. Always compress from the original scan when possible.

**Using High compression on handwritten documents.** Handwriting has fine strokes and subtle curves that are the first casualties of aggressive compression. For handwritten notes, prescriptions, and filled forms, stick to Medium.

**Scanning at 600 DPI "just in case."** 600 DPI produces enormous files and provides zero benefit for text documents. 200–300 DPI covers every practical need. Reserve 600 DPI for photographs and detailed artwork only.

**Not checking the output.** Always open the compressed file and zoom to 100% on a few pages. Pay special attention to:
- Small text (footnotes, fine print)
- Signatures and initials
- Stamps and seals
- Handwritten notes in margins
- Serial numbers and dates

If anything is fuzzy, re-compress at a lower level.

## Compressing on Mobile

Phone scans are just as compressible as flatbed scans. The [Compress PDF tool](/compress-pdf) works in any mobile browser:

**iPhone:**
1. Scan your document with the Files app or Notes app
2. Open Safari → Compress PDF tool
3. Upload the scanned PDF
4. Compress and download — upload directly to your portal

**Android:**
1. Scan with Google Drive, Adobe Scan, or Microsoft Lens
2. Open Chrome → Compress PDF tool
3. Upload, compress, download

The entire workflow — scan to compressed PDF — takes under 2 minutes on a phone.

## Is It Safe?

When compressing scanned contracts, IDs, medical records, or legal documents:

- Files are uploaded over **HTTPS** (encrypted in transit)
- Processing happens on the server; files are **automatically deleted after one hour**
- No account is required — nothing ties your files to your identity
- We don't read, store, or share your document contents

For maximum privacy: compress on a trusted personal device, upload to the destination portal, then delete local copies.

## FAQ

**How much can I compress a scanned PDF?**
Typically 50–90%, depending on the scan quality and compression level. A 40 MB scanned contract commonly compresses to 8–12 MB at Medium, or 4–6 MB at High.

**Will the text become unreadable?**
At Medium compression, no — text remains crisp and clear. At High compression, very small text (below 8pt) might soften slightly, but standard document text stays perfectly readable.

**Can I compress a scanned PDF that's already password-protected?**
First remove the password using [Unlock PDF](/unlock-pdf), then compress. Re-protect with [Protect PDF](/protect-pdf) afterward if needed.

**Is it better to compress or re-scan at lower DPI?**
If you have access to the original document, re-scanning at 200 DPI is ideal — it creates a naturally smaller file. If you only have the high-DPI scan, compression is your best option.

**My compressed file is still too large — what else can I do?**
Remove unnecessary pages with [Organize PDF](/organize-pdf), extract only the pages you need with [Extract Pages](/extract-pages), or split the document into smaller parts with [Split PDF](/split-pdf).

**Does compression affect the digital signature on a signed scanned document?**
Compression doesn't alter digital signatures embedded in the PDF metadata. Visual signatures (pen signatures captured in the scan) remain visible but may soften slightly at High compression — verify after compressing.

## Summary

To compress scanned documents without losing readability:

1. **Remove blank and unnecessary pages** first → [Organize PDF](/organize-pdf)
2. **Compress at Medium** → [Compress PDF](/compress-pdf) — this handles 90% of cases
3. **Step up to High** only for strict size limits (government portals, tight email caps)
4. **Check the result** — zoom to 100% and verify text, signatures, and fine detail

For future scans: use 200 DPI and grayscale mode to create smaller files from the start. And consider running [OCR](/ocr-pdf) before archiving — a searchable, compressed document is the best of both worlds.
