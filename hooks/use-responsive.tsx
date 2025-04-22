"use client";

import { useEffect, useState } from "react";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

const breakpointValues = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export function useResponsive() {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  const [breakpoint, setBreakpoint] = useState<Breakpoint>("xs");

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      // Set current breakpoint
      if (window.innerWidth >= breakpointValues["2xl"]) {
        setBreakpoint("2xl");
      } else if (window.innerWidth >= breakpointValues.xl) {
        setBreakpoint("xl");
      } else if (window.innerWidth >= breakpointValues.lg) {
        setBreakpoint("lg");
      } else if (window.innerWidth >= breakpointValues.md) {
        setBreakpoint("md");
      } else if (window.innerWidth >= breakpointValues.sm) {
        setBreakpoint("sm");
      } else {
        setBreakpoint("xs");
      }
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isXs = breakpoint === "xs";
  const isSm = breakpoint === "sm";
  const isMd = breakpoint === "md";
  const isLg = breakpoint === "lg";
  const isXl = breakpoint === "xl";
  const is2Xl = breakpoint === "2xl";

  const isMobile = isXs || isSm;
  const isTablet = isMd;
  const isDesktop = isLg || isXl || is2Xl;

  const isSmallScreen = isXs || isSm || isMd;
  const isLargeScreen = isLg || isXl || is2Xl;

  return {
    windowSize,
    breakpoint,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    isMobile,
    isTablet,
    isDesktop,
    isSmallScreen,
    isLargeScreen,
  };
}
