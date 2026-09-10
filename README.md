# Flyfot — Pre Launch Sale (Mobile)

Vite + React mobile promo page matching the "Pre Launch Sale" mockup:
brand mark, brush-style headline, 20% off discount box, and a dark
signup card that POSTs to `http://127.0.0.1:5000/api/register` via axios
— all overlaid on a single full-bleed composited banner image.

The page is built mobile-first and caps at 480px wide, centered, so it
reads the same on any screen size. The hero section's aspect ratio is
locked to the banner's native proportions (864 × 1821) so the text/card
content lines up with the banner's built-in empty middle.

## Setup

```bash
npm install
npm run dev
```

## Image

Drop your production banner into `public/assets/images/banner.png`
(cap + bag top, model + shoes bottom, empty middle already composited
in). A copy of the one you shared is already in place, so the page
renders correctly out of the box — just swap the file if you get a
new version.

If your file is a `.jpg`, either rename it to `banner.png` or update
the `src` in `src/components/Hero.jsx` to match.

**If the banner isn't showing:** this zip has the actual file at
`public/assets/images/banner.png` — the earlier chat replies only
showed you individual code files, not the image sitting alongside
them, so if you built the project by hand you likely never got that
file onto disk. Unzip this whole folder (or just copy
`public/assets/images/banner.png` into your existing project) and
restart `npm run dev`.

## Logo

`Hero.jsx` now expects a real logo file at
`public/assets/images/logo.png` (replacing the earlier inline SVG
approximation) — **this file is not included**, since no logo artwork
has been uploaded yet. Add your actual Flyfot logo there (ideally the
icon + wordmark as one image, transparent background) and it'll
render at the top automatically. Until then you'll see a broken image
icon in that spot.

## Form fields

- Full Name
- Email Address
- Mobile Number, with a country-code select (defaults to `+91`)

On submit, this is combined and sent as:

```json
{
  "name": "Ankit",
  "number": "+91 8302494244",
  "email": "ankit@example.com"
}
```

Point `API_URL` in `src/components/RegisterForm.jsx` elsewhere if your
Flask server runs on a different host/port.

## Notes

- The brand mark (`FlyfotMark` in `Hero.jsx`) is an approximated inline
  SVG, not your original artwork — swap it in if you have the real
  logo file.
- "Sale" uses the Google Font **Permanent Marker** for the brush-stroke
  look; "Pre Launch" uses **Big Shoulders Display** for the bold
  condensed poster type.
- All the on-screen text (brand, headline, "20% off" box, form
  card, perks row) is layered on top of the banner via HTML/CSS — none
  of it is baked into the image, so it's fully editable in `Hero.jsx`
  and `styles.css`.
