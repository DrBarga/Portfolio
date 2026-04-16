import type { Metadata } from "next";
import { stackFlow, stackGroups } from "@/data/portfolio";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Tech Stack",
  description:
    "Tech stack of Bohdan Zelenskyi, spanning Next.js, React, Node.js, Python, FastAPI, Docker, computer vision, OCR, and AI tooling.",
};

export default function StackPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Tech stack"
        title="Modern web delivery with backend and AI capability built in."
        description="I choose tools based on the product, team, and speed requirements. That can mean a fast CMS-driven site, a custom Next.js app, or a Python service powering a heavier AI workflow."
        stats={[
          { label: "Frontend", value: "React / Next.js / Tailwind" },
          { label: "Backend", value: "Node.js / FastAPI / Flask" },
          { label: "AI", value: "PyTorch / OCR / CV" },
        ]}
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Stack groups"
          title="The tools I reach for most often"
          description="Not every project needs the full stack, but these are the systems I am most confident using to get from concept to launch."
        />
        <div className="space-y-6">
          {stackGroups.map((group, index) => (
            <Reveal key={group.name} delay={index * 0.05}>
              <article className="panel-surface grid gap-6 p-7 lg:grid-cols-[260px_1fr]">
                <div>
                  <p className="eyebrow">{group.kicker}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {group.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">
                    {group.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span key={item} className="tech-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Delivery flow"
          title="How the stack connects during a real build"
          description="My projects often move through this chain, from interface and business logic to infrastructure and AI-powered capabilities."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stackFlow.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <article className="panel-surface h-full p-6">
                <p className="font-mono text-sm text-cyan-300">{step.step}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
