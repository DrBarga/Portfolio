"use client";

import { AnimatePresence, motion } from "framer-motion";

export function BootLoader({ active }: { active: boolean }) {
  return (
    <AnimatePresence initial={false}>
      {active ? (
        <motion.div
          key="boot-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeOut" } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(4,7,13,0.96)] backdrop-blur-xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[min(92vw,34rem)] overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,28,0.92),rgba(7,12,20,0.86))] px-6 py-8 shadow-[0_30px_120px_rgba(0,0,0,0.45)] sm:px-8"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(122,227,255,0.9),transparent)]" />
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow">Initializing portfolio signal</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  BZ
                </h2>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200"
              >
                01
              </motion.div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="section-rule" />
              <div className="grid gap-3 text-sm font-mono text-cyan-100/80 sm:grid-cols-3">
                {["Next.js", "Realtime APIs", "AI workflows"].map((item) => (
                  <div
                    key={item}
                    className="border border-white/10 bg-white/5 px-3 py-2 text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="overflow-hidden border border-white/10 bg-white/5 p-2">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.25,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="h-1.5 w-1/2 bg-[linear-gradient(90deg,transparent,#7ae3ff,#44b8ff)]"
                />
              </div>
              <p className="text-sm leading-7 text-white/65">
                Compiling a multi-page portfolio experience for freelance web and
                AI clients.
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
