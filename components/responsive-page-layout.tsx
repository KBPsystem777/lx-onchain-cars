import type { ReactNode } from "react";
import { ResponsiveNav } from "./responsive-nav";
import { ResponsiveFooter } from "./responsive-footer";
import { ResponsiveContainer } from "./responsive-container";

interface NavLink {
  href: string;
  label: string;
}

interface ResponsivePageLayoutProps {
  children: ReactNode;
  navLinks?: NavLink[];
  showAuth?: boolean;
  logoText?: string;
  footerLinks?: { href: string; label: string }[];
  copyrightText?: string;
  containerClassName?: string;
}

export function ResponsivePageLayout({
  children,
  navLinks = [
    { href: "/cars", label: "Browse Cars" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/about", label: "About Us" },
  ],
  showAuth = true,
  logoText = "CarShare",
  footerLinks,
  copyrightText,
  containerClassName = "py-6 md:py-10",
}: ResponsivePageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <ResponsiveNav links={navLinks} showAuth={showAuth} logoText={logoText} />
      <main className="flex-1">
        <ResponsiveContainer className={containerClassName}>
          {children}
        </ResponsiveContainer>
      </main>
      <ResponsiveFooter
        links={footerLinks}
        logoText={logoText}
        copyrightText={copyrightText}
      />
    </div>
  );
}
