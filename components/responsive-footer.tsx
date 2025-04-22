import Link from "next/link";
import { Car } from "lucide-react";

interface FooterLink {
  href: string;
  label: string;
}

interface ResponsiveFooterProps {
  links?: FooterLink[];
  logoText?: string;
  copyrightText?: string;
}

export function ResponsiveFooter({
  links = [
    { href: "/terms", label: "Terms" },
    { href: "/privacy", label: "Privacy" },
    { href: "/contact", label: "Contact" },
  ],
  logoText = "CarShare",
  copyrightText = "© 2025 CarShare. All rights reserved.",
}: ResponsiveFooterProps) {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Car className="h-6 w-6" />
            <span>{logoText}</span>
          </Link>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs md:text-sm font-medium hover:underline underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="text-xs text-muted-foreground text-center md:text-left">
          {copyrightText}
        </p>
      </div>
    </footer>
  );
}
