"use client";

import type { ReactNode } from "react";
import { useResponsive } from "@/hooks/use-responsive";

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
}

export function ResponsiveContainer({
  children,
  className = "",
}: ResponsiveContainerProps) {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 md:px-8 ${
        isDesktop ? "max-w-7xl" : isTablet ? "max-w-4xl" : "max-w-full"
      } ${className}`}
    >
      {children}
    </div>
  );
}
