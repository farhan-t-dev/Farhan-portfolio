import { Archivo, Newsreader } from "next/font/google";

// Archivo carries the structural voice: headlines, labels, UI.
// We request the `wdth` axis so display type can be set in Expanded width —
// next/font omits `wght` from `axes` requests by default, so we deliberately
// do NOT pass `weights`; omitting it makes the font fully variable (100–900).
export const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
  axes: ["wdth"],
});

// Newsreader carries the editorial voice: prose and reading copy.
// Italic is requested because editorial copy leans on it for emphasis.
export const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  style: ["normal", "italic"],
});
