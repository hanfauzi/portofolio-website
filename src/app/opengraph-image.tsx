import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Link preview card (WhatsApp, LinkedIn, X, Slack...). Rendered to a static PNG at build time.
export const alt = "Muhammad Hanif Fauzi | Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Same typeface as the site. Google Fonts serves TTF to non-browser clients, which ImageResponse accepts.
// If the download fails (offline build), the card falls back to the default font instead of breaking the build.
async function loadJakarta(weight: 600 | 700) {
  try {
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@${weight}`)).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return { name: "Plus Jakarta Sans", data: await (await fetch(url)).arrayBuffer(), weight, style: "normal" as const };
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/hnf-light.svg"));
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;
  const fonts = (await Promise.all([loadJakarta(600), loadJakarta(700)])).filter((f) => f !== null);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          background: "#f8fafc",
          color: "#0f172a",
          fontFamily: fonts.length ? "Plus Jakarta Sans" : undefined,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={217} height={160} alt="" style={{ marginLeft: -16 }} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, fontWeight: 600, color: "#296cd8", marginBottom: 16 }}>
            Fullstack Developer
          </div>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            Muhammad Hanif Fauzi
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #cbd5e1",
            paddingTop: 28,
            fontSize: 28,
            color: "#475569",
          }}
        >
          <span style={{ fontWeight: 700, color: "#0f172a" }}>Portfolio</span>
          <span>haniffauzi.vercel.app</span>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
