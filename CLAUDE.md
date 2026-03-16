# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML e-commerce website for an electronics shop. No build pipeline — all pages are plain HTML files served directly. Content is in Russian.

## Development

Open any `.html` file directly in a browser. No build step required.

Tailwind CSS is loaded from CDN (`@tailwindcss/browser@4`) for development. The pages also reference `/dist/output.css` for a compiled build, but no build tooling is currently configured.

## Architecture

**4 pages:** `index.html` (homepage), `about.html`, `products.html` (catalog with filters), `contacts.html`

**Consistent structure across all pages:**
- Sticky header with logo ("Brand"), nav links, and cart icon
- Page-specific body content
- Dark footer (`bg-gray-900`)

**Styling:** Tailwind CSS utility classes throughout. Primary palette is orange/amber (`#ff6600`, `#ff8800`) with gray neutrals.

**No JavaScript framework** — the hamburger menu button and cart icon are currently static (no interactivity wired up).
