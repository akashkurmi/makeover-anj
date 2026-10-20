import React from "react";

/**
 * Smoothly scrolls to a section without changing the URL hash.
 * Works repeatedly even if the user scrolls up and clicks again.
 * If called from a non-home page, navigates to "/" and smoothly scrolls upon arrival.
 */
export const scrollToSection = (sectionId: string, e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
  }

  if (typeof window === "undefined") return;

  const pathname = window.location.pathname;

  // If already on the homepage
  if (pathname === "/" || pathname === "") {
    // If any hash exists in the URL, remove it without triggering a refresh
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = window.innerWidth < 640 ? 64 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  } else {
    // Store target section in sessionStorage and navigate cleanly to "/"
    sessionStorage.setItem("scroll_to_section", sectionId);
    window.location.href = "/";
  }
};
