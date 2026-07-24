# SHARED BLOG WRITING SPEC (temp file — will be deleted after task)

You are writing SEO blog posts for PDFOrca (pdforca.com), a free browser-based PDF tool suite.
Author is Shahrukh, a solo creator. Voice: knowledgeable, warm, plain, no hype, no em-dashes-as-drama, no exclamation spam.

## HARD RULES
1. Each blog file goes to: `C:\shahrukh\pdforca\content\blog\<slug>.md`
2. Frontmatter MUST include `draft: true` (these are drafts).
3. Body MUST be 2000+ words of real English content.
4. Include: step-by-step guide, real-life examples, and 3-5 FAQ (H3 questions under an H2 "Frequently Asked Questions").
5. Link to PDFOrca tools inline using markdown links like `[Merge PDF tool](/merge-pdf)`. Use the tool routes listed below ONLY.
6. Match the existing blog style (see TEMPLATE below).

## FRONTMATTER TEMPLATE (copy exactly, fill in values)
```
---
title: "<Title from calendar> (2026 Guide)"
description: "<140-160 char meta description, benefit-driven, mentions free + no signup>"
date: "<YYYY-MM-DD from calendar>"
category: "<Tutorial | Tips | Use Case | Comparison>"
author: "PDFOrca Team"
relatedTool: "<tool slug, OMIT this line entirely if no related tool>"
cover: "/blog/covers/<slug>.webp"
draft: true
keywords:
  - <7 lowercase SEO keywords, one per line>
---
```

## VALID TOOL ROUTES (use only these; link text can vary)
- /merge-pdf  → "Merge PDF tool"
- /compress-pdf → "Compress PDF tool"
- /jpg-to-pdf → "JPG to PDF tool"
- /word-to-pdf → "Word to PDF tool"
- /unlock-pdf → "Unlock PDF tool"
- /protect-pdf → "Password Protect / Protect PDF tool"
- /add-watermark → "Add Watermark tool"
- /ocr-pdf → "OCR PDF tool"
- /sign-pdf → "Sign PDF tool"
- /pdf-to-excel → "PDF to Excel tool"
- /pdf-to-word → "PDF to Word tool"
- /extract-pages → "Extract Pages tool"
- /split-pdf → "Split PDF tool"
- /pdf-to-powerpoint → "PDF to PowerPoint tool"
- /powerpoint-to-pdf → "PowerPoint to PDF tool"
- /pdf-to-jpg → "PDF to JPG tool"
- /rotate-pdf → "Rotate PDF tool"
- /organize-pdf → "Organize PDF tool"
- /excel-to-pdf → "Excel to PDF tool"
- /page-numbering → "Page Numbers tool"

## BODY STRUCTURE (adapt naturally, don't make it robotic)
- Open with 2-3 short paragraphs painting a relatable real-life scenario (no heading).
- `## What You'll Need` — short bullet list (browser, the file, no signup/app/payment).
- One or two explanatory `##` sections giving context (a comparison table works well here).
- `## Step-by-Step: <action>` with `### Step 1/2/3...` subsections. Link the primary tool in Step 1.
- `## Real-World Scenarios` with 3-4 `###` sub-scenarios, each with a mini numbered walkthrough.
- `## Tips for the Best Result` or `## Common Mistakes to Avoid` (bullets).
- `## Frequently Asked Questions` with 3-5 `###` question headings, each answered in 2-4 sentences, linking a tool where relevant.
- `## Wrapping Up` closing with a CTA linking the primary tool.

## STYLE NOTES
- Use markdown tables where a comparison helps (very effective for SEO + readability).
- For India-audience posts, use Indian context (Aadhaar, PAN, ITR, UPSC, rupees, government portals, 5MB limits, WhatsApp).
- For Comparison posts (no single tool), be honest and balanced; emphasize PDFOrca's privacy (browser-based, files not stored) and that it's free.
- Never invent tool routes not in the list. If a needed action isn't a listed tool, describe it generically.
- Keep paragraphs short (2-4 sentences). This is web content.
- Write the FULL 2000+ words. Do not summarize or leave placeholders.

## IMPORTANT: chunked writing
When creating each .md file, write a small skeleton first, then append the body in chunks (<=50 lines / <4000 chars per edit) to avoid truncation. Never write the whole 2000-word file in one call.
