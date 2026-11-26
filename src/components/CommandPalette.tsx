"use client";

import { useEffect } from "react";
import { Command } from "cmdk";
import * as Dialog from "@radix-ui/react-dialog";
import { useLocale, useTranslations } from "next-intl";
import { toast } from "react-toastify";
import type { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FiArrowRight,
  FiBookOpen,
  FiCopy,
  FiDownload,
  FiGlobe,
  FiHash,
  FiHome,
  FiMoon,
  FiSearch,
  FiSun,
} from "react-icons/fi";
import { usePathname, useRouter } from "@/i18n/navigation";
import { getCaseStudies } from "@/features/porto/case-studies";
import { profile } from "@/features/porto/profile";
import { useThemeToggle } from "@/hooks/use-theme-toggle";

export const SECTIONS = ["about", "work", "projects", "skills", "contact"] as const;

type Props = { open: boolean; onOpenChange: (open: boolean) => void };

/**
 * Ctrl+K / Cmd+K menu: jump to a section or project story, switch theme or language, grab the CV or email.
 * On phones it is also the navigation menu, opened from the navbar button.
 */
export function CommandPalette({ open, onOpenChange }: Props) {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { isDark, toggleTheme } = useThemeToggle();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  // Close first, then act, so the dialog isn't in the way of the scroll or the new page.
  const run = (action: () => void) => () => {
    onOpenChange(false);
    action();
  };

  const goToSection = (id: string) => {
    if (pathname === "/") {
      if (id === "top") window.scrollTo({ top: 0 });
      else document.getElementById(id)?.scrollIntoView();
      history.replaceState(null, "", id === "top" ? location.pathname : `#${id}`);
    } else {
      router.push(id === "top" ? "/" : `/#${id}`);
    }
  };

  const downloadCv = () => {
    const a = document.createElement("a");
    a.href = profile.cv;
    a.download = "Muhammad_Hanif_Fauzi_CV.pdf";
    a.click();
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      toast.success(t("palette.emailCopied"));
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const otherLocale = locale === "en" ? "id" : "en";

  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      label={t("palette.title")}
      loop
      overlayClassName="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
      contentClassName="fixed top-[12vh] left-1/2 z-[91] w-[calc(100vw-2rem)] max-w-[560px] -translate-x-1/2 overflow-hidden rounded-[14px] border bg-surface text-ink shadow-[0_24px_64px_rgba(0,0,0,0.25)]"
    >
      <Dialog.Title className="sr-only">{t("palette.title")}</Dialog.Title>
      <Dialog.Description className="sr-only">{t("palette.placeholder")}</Dialog.Description>

      <div className="flex items-center gap-3 border-b px-4">
        <FiSearch className="size-4 shrink-0 text-ink-2" aria-hidden="true" />
        <Command.Input
          placeholder={t("palette.placeholder")}
          className="h-13 w-full bg-transparent text-[0.95rem] text-ink-strong outline-none placeholder:text-ink-2/70"
        />
        <kbd className="hidden shrink-0 rounded-sm border px-1.5 py-0.5 text-[0.6875rem] font-semibold text-ink-2 sm:block">
          Esc
        </kbd>
      </div>

      <Command.List className="max-h-[min(420px,60vh)] scroll-py-2 overflow-y-auto overscroll-contain p-2">
        <Command.Empty className="px-3 py-8 text-center text-sm text-ink-2">{t("palette.empty")}</Command.Empty>

        <Group heading={t("palette.navigate")}>
          <Item icon={FiHome} onSelect={run(() => goToSection("top"))}>
            {t("palette.home")}
          </Item>
          {SECTIONS.map((id) => (
            <Item key={id} icon={FiHash} value={`section-${id}`} keywords={[id]} onSelect={run(() => goToSection(id))}>
              {t(`nav.${id}`)}
            </Item>
          ))}
        </Group>

        <Group heading={t("palette.stories")}>
          {getCaseStudies(locale).map((c) => (
            <Item
              key={c.slug}
              icon={FiBookOpen}
              value={`story-${c.slug}`}
              keywords={[c.name, c.tagline]}
              onSelect={run(() => router.push(`/projects/${c.slug}`))}
            >
              {c.name}
              <span className="ml-2 truncate text-ink-2">{c.tagline}</span>
            </Item>
          ))}
        </Group>

        <Group heading={t("palette.actions")}>
          <Item icon={isDark ? FiSun : FiMoon} keywords={["theme", "tema", "dark", "light"]} onSelect={run(toggleTheme)}>
            {t("palette.toggleTheme")}
          </Item>
          <Item
            icon={FiGlobe}
            keywords={["language", "bahasa", "english", "indonesia"]}
            onSelect={run(() => router.replace(pathname, { locale: otherLocale, scroll: false }))}
          >
            {t("palette.switchLanguage")}
          </Item>
          <Item icon={FiDownload} keywords={["cv", "resume"]} onSelect={run(downloadCv)}>
            {t("palette.downloadCv")}
          </Item>
          <Item icon={FiCopy} keywords={["email", "mail"]} onSelect={run(copyEmail)}>
            {t("palette.copyEmail")}
          </Item>
        </Group>

        <Group heading={t("palette.links")}>
          {[
            { label: "GitHub", href: profile.github, icon: FaGithub },
            { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
            { label: "Instagram", href: profile.instagram, icon: FaInstagram },
          ].map((l) => (
            <Item key={l.label} icon={l.icon} onSelect={run(() => window.open(l.href, "_blank", "noopener,noreferrer"))}>
              {l.label}
            </Item>
          ))}
        </Group>
      </Command.List>

      <p className="hidden items-center gap-1.5 border-t px-4 py-2.5 text-xs text-ink-2 sm:flex">
        <kbd className="rounded-sm border px-1.5 py-0.5 font-semibold">Ctrl</kbd>
        <kbd className="rounded-sm border px-1.5 py-0.5 font-semibold">K</kbd>
        {t("palette.hint")}
      </p>
    </Command.Dialog>
  );
}

function Group({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <Command.Group
      heading={heading}
      className="mb-1 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pt-2 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:text-[0.6875rem] [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:tracking-[0.15em] [&_[cmdk-group-heading]]:text-ink-2 [&_[cmdk-group-heading]]:uppercase"
    >
      {children}
    </Command.Group>
  );
}

function Item({
  icon: Icon,
  children,
  ...props
}: { icon: IconType; children: React.ReactNode } & React.ComponentProps<typeof Command.Item>) {
  return (
    <Command.Item
      {...props}
      className="group flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-[0.9rem] font-medium text-ink-strong select-none data-[selected=true]:bg-surface-hover"
    >
      <Icon className="size-4 shrink-0 text-ink-2 group-data-[selected=true]:text-accent-text" aria-hidden="true" />
      <span className="flex min-w-0 flex-1 items-center">{children}</span>
      <FiArrowRight
        className="size-3.5 shrink-0 text-ink-2 opacity-0 group-data-[selected=true]:opacity-100"
        aria-hidden="true"
      />
    </Command.Item>
  );
}
