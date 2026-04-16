import type { Metadata } from "next";
import Link from "next/link";
import { education, experience } from "@/data/portfolio";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience of Bohdan Zelenskyi across real-time backend systems, ML/computer vision pipelines, CRM platforms, and analytics products.",
};

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Experience"
        title="Production work across real-time apps, AI pipelines, and data systems."
        description="My experience is a blend of backend engineering, applied machine learning, and client-focused product delivery. The common thread is building systems that people can actually depend on."
        stats={[
          { label: "Realtime systems", value: "WebSockets / Redis / async" },
          { label: "AI pipelines", value: "OCR / CV / detection" },
          { label: "Business impact", value: "60-80% manual reduction" },
        ]}
        actions={
          <>
            <Link className="button-primary" href="/projects">
              See project work
            </Link>
            <Link className="button-secondary" href="/contact">
              Hire me
            </Link>
          </>
        }
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Timeline"
          title="Recent roles and the systems behind them"
          description="Each role pushed a different layer of the stack, from client-facing product builds to ML deployment and real-time backend architecture."
        />
        <div className="space-y-6">
          {experience.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.06}>
              <article className="panel-surface grid gap-6 p-7 lg:grid-cols-[220px_1fr]">
                <div className="space-y-3">
                  <p className="eyebrow">{item.period}</p>
                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/65">{item.company}</p>
                </div>
                <div className="space-y-5">
                  <p className="text-base leading-8 text-white/72">
                    {item.summary}
                  </p>
                  <div className="grid gap-4 md:grid-cols-3">
                    {item.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="border border-white/10 bg-white/5 p-4 text-sm leading-7 text-white/72"
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.focus.map((focus) => (
                      <span key={focus} className="tech-chip">
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Education & training"
          title="Grounded in computer science, sharpened by applied delivery"
          description="The academic layer gives me strong fundamentals, while project work keeps the decisions practical and current."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="panel-surface h-full p-6">
                <p className="eyebrow">{item.period}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-white/60">{item.org}</p>
                <div className="mt-5 space-y-3 text-sm leading-7 text-white/70">
                  {item.points.map((point) => (
                    <p
                      key={point}
                      className="border-t border-white/10 pt-3 first:border-t-0 first:pt-0"
                    >
                      {point}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
