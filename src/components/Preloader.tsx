"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

// loading: bar follows real progress. complete: bar is full. leaving: overlay fades out.
type Stage = "loading" | "complete" | "leaving" | "done";

// Even on a cached visit the bar takes this long to fill, so it never just flashes.
const MIN_FILL_MS = 1200;
// Give up waiting after this; a stuck image must not lock the page.
const MAX_WAIT_MS = 8000;
const COMPLETE_MS = 300;
const FADE_MS = 500;

/*
  Progress = finished assets / total assets. The assets are every image the page loads up front
  (lazy images below the fold are skipped: they only load on scroll, so they would never finish)
  plus the web fonts as one item. The window load event marks everything as finished.
*/
function trackAssets(onProgress: (fraction: number) => void) {
  const images = Array.from(document.images).filter(
    (img) => img.loading !== "lazy" && !img.closest("#hnf-preloader"),
  );
  const total = images.length + 1;
  let finished = 0;
  const done = () => onProgress(Math.min(1, ++finished / total));

  images.forEach((img) => {
    if (img.complete) return done();
    img.addEventListener("load", done, { once: true });
    img.addEventListener("error", done, { once: true });
  });
  document.fonts.ready.then(done);

  const finishAll = () => onProgress(1);
  if (document.readyState === "complete") finishAll();
  else window.addEventListener("load", finishAll, { once: true });

  return () => window.removeEventListener("load", finishAll);
}

/*
  Lives for the whole browser tab. Switching language swaps the [locale] layout, which mounts this component
  again; the flag keeps the loader to the first visit instead of replaying it on every language switch.
  A real reload resets it, so the loader still shows on a fresh visit.
*/
let hasPlayed = false;

export function Preloader() {
  const t = useTranslations("preloader");
  const [stage, setStage] = useState<Stage>(() => (hasPlayed ? "done" : "loading"));
  const [progress, setProgress] = useState(0);
  const skip = useRef(hasPlayed);

  useEffect(() => {
    if (skip.current) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";

    const start = performance.now();
    let real = 0;
    let raf = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const stopTracking = trackAssets((fraction) => {
      real = Math.max(real, fraction);
    });

    const tick = () => {
      const elapsed = performance.now() - start;
      if (elapsed >= MAX_WAIT_MS) real = 1;
      // The bar never runs ahead of real progress, and never ahead of the minimum fill time.
      const shown = Math.min(real, elapsed / MIN_FILL_MS);
      setProgress(shown);

      if (shown < 1) {
        raf = requestAnimationFrame(tick);
        return;
      }
      setStage("complete");
      timers.push(
        setTimeout(() => setStage("leaving"), COMPLETE_MS),
        setTimeout(() => {
          setStage("done");
          hasPlayed = true;
          root.style.overflow = "";
        }, COMPLETE_MS + FADE_MS),
      );
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      stopTracking();
      root.style.overflow = "";
    };
  }, []);

  if (stage === "done") return null;

  return (
    <div
      id="hnf-preloader"
      role="progressbar"
      aria-label={t("label")}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-canvas transition-opacity ease-out motion-reduce:transition-none"
      style={{ opacity: stage === "leaving" ? 0 : 1, transitionDuration: `${FADE_MS}ms` }}
    >
      {/* Without JS the overlay would never leave. */}
      <noscript>
        <style>{`#hnf-preloader{display:none}`}</style>
      </noscript>

      <div className="flex flex-col items-center">
        {/* eslint-disable-next-line @next/next/no-img-element -- plain img so the logo paints before hydration */}
        <img src="/brand/hnf-light.svg" alt="" width={347} height={256} className="h-20 w-auto dark:hidden sm:h-24" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/hnf-dark.svg" alt="" width={347} height={256} className="hidden h-20 w-auto dark:block sm:h-24" />

        {/* Wider than the logo, capped so it never touches the screen edges on phones. */}
        <div className="mt-2 w-[min(18rem,calc(100vw-4rem))] sm:w-80">
          <div className="h-0.5 w-full overflow-hidden rounded-full bg-subtle">
            {/* Short transition smooths the jump when an asset finishes. */}
            <div
              className="h-full w-full origin-left rounded-full bg-accent transition-transform duration-300 ease-out motion-reduce:transition-none"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
