"use client";

import { useEffect, useState } from "react";
import { BootLoader } from "@/components/boot-loader";
import { DigitalRain } from "@/components/digital-rain";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const SESSION_KEY = "bz-portfolio-booted";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasBooted = window.sessionStorage.getItem(SESSION_KEY) === "true";
    const delay = hasBooted ? 280 : 1500;

    if (!hasBooted) {
      window.sessionStorage.setItem(SESSION_KEY, "true");
    }

    const timeoutId = window.setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      <BootLoader active={loading} />
      <DigitalRain />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(122,227,255,0.1),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(68,184,255,0.1),transparent_28%)]" />
      <SiteHeader />
      <main className="relative z-10 flex min-h-screen flex-col pt-24">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
