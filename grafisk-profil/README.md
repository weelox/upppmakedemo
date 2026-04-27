# UppMAKE grafisk profil (enkel)

Denna profil ar framtagen direkt fran nuvarande webbdesign.

## 1) Ton och uttryck
- Mork, teknisk, ren och premium.
- Hog kontrast mellan bakgrund och text.
- Accentfarger anvands sparsamt for fokus.
- Mest skarpa horn, men media (bilder/video) kan ha liten avrundning.

## 2) Typsnitt
- Display/rubriker: Syne
- Brodtext/UI: Manrope
- Fallback: Segoe UI, sans-serif

Import (Google Fonts):
- https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Syne:wght@500;600;700;800&display=swap

## 3) Fargpalett
Primar:
- Bakgrund: #050608
- Mjuk bakgrund: #0d1015
- Surface: #121722
- Surface soft: #171d29

Text:
- Primar text: #f5f7fb
- Mjuk text: #b4bdca

Linjer/overlay:
- Linje: rgba(255, 255, 255, 0.16)
- Linje soft: rgba(255, 255, 255, 0.10)

Accent:
- Accent 1: #7df0d8
- Accent 2: #b0ff8e
- Accent dark: #02271f

## 4) Grundregler
- Layoutbredd: 1240px max.
- Navigering: ren textstil, inga boxiga knappar.
- CTA far vara tydlig men enkel.
- Radius: 0 som standard, 12px for media.

## 5) Filer i denna mapp
- tokens.css: design-tokens att importera i projekt.

Exempel:
```html
<link rel="stylesheet" href="grafisk-profil/tokens.css" />
```
