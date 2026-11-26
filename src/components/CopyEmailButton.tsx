"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { FiCheck, FiCopy } from "react-icons/fi";

/** Copies the address, then shows "Copied!" for two seconds. For visitors without a mail app set up. */
export function CopyEmailButton({ email, className = "" }: { email: string; className?: string }) {
  const t = useTranslations("contact");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard blocked (old browser, insecure context): fall back to the mail app.
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-line bg-surface/80 px-5 text-[0.85rem] font-semibold text-ink-strong transition-[background-color,transform] duration-300 hover:-translate-y-px hover:bg-surface-hover ${className}`}
    >
      {copied ? (
        <FiCheck className="size-4 text-highlight" aria-hidden="true" />
      ) : (
        <FiCopy className="size-4" aria-hidden="true" />
      )}
      {/* aria-live so screen readers hear the confirmation */}
      <span aria-live="polite">{copied ? t("copied") : t("copyEmail")}</span>
    </button>
  );
}
