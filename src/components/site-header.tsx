"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/portfolio";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto w-[min(1280px,calc(100%-1rem))] px-0 py-4 md:w-[min(1280px,calc(100%-2rem))]">
          <div className="flex items-center justify-between gap-4 border border-white/10 bg-[rgba(4,7,13,0.72)] px-4 py-3 backdrop-blur-xl md:px-5">
            <Link href="/" className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center border border-cyan-300/15 bg-cyan-300/10 font-mono text-sm text-cyan-200">
                BZ
              </span>
              <div className="hidden sm:block">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white">
                  Bohdan Zelenskyi
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">
                  Fullstack / AI
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-3 text-sm uppercase tracking-[0.18em] transition-colors ${
                      active
                        ? "bg-cyan-300/10 text-cyan-200"
                        : "text-white/65 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a
                className="button-secondary"
                href="/resume/Bohdan-Zelenskyi-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
              <Link className="button-primary" href="/contact">
                Let&apos;s work
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/5 text-white lg:hidden"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-[rgba(4,7,13,0.86)] px-4 pt-24 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto w-[min(32rem,100%)] border border-white/10 bg-[rgba(9,15,24,0.88)] p-4"
            >
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`border-b border-white/10 px-3 py-4 text-sm uppercase tracking-[0.18em] last:border-b-0 ${
                      isActive(pathname, item.href)
                        ? "text-cyan-200"
                        : "text-white/72"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  className="button-secondary"
                  href="/resume/Bohdan-Zelenskyi-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  Resume
                </a>
                <Link
                  className="button-primary"
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Let&apos;s work
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
