import type { Metadata } from "next";
import Link from "next/link";
import {
  education,
  processSteps,
  proofPoints,
  siteMeta,
  specialSkills,
} from "@/data/portfolio";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Bohdan Zelenskyi: fullstack web developer and ML/AI engineer focused on premium websites, scalable backend systems, and practical automation.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="A builder who moves comfortably between product polish and deep systems work."
        description="My background combines frontend delivery, backend architecture, applied machine learning, and production thinking. That mix is what lets me help clients beyond surface-level development."
        stats={[
          { label: "Base", value: siteMeta.location },
          { label: "Languages", value: "English B2 / German B1" },
          { label: "Collaboration", value: "Remote-first" },
        ]}
        actions={
          <>
            <Link className="button-primary" href="/contact">
              Discuss a project
            </Link>
            <a
              className="button-secondary"
              href={siteMeta.github}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </>
        }
        aside={
          <div className="panel-surface p-6">
            <p className="eyebrow">Short version</p>
            <p className="mt-4 text-lg leading-8 text-white">
              I build websites, web applications, and AI-powered solutions for
              businesses, from idea and architecture to launch and iteration.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/65">
              I work with code-first stacks like Next.js, Node.js, Python, and
              FastAPI, and I can also move fast with WordPress, Shopify,
              Webflow, and Hostinger when the business goal calls for it.
            </p>
          </div>
        }
      />

      <section className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="panel-surface p-7">
            <SectionHeading
              eyebrow="How I think"
              title="Build for outcomes, not just for screenshots"
              description="Good client work is a combination of fast iteration, clean communication, and engineering decisions that still make sense six months later."
            />
            <div className="mt-8 space-y-4 text-base leading-8 text-white/72">
              <p>
                I care about user experience, but I also care about the systems
                supporting it: authentication, APIs, data flow, deployment,
                performance, and maintainability.
              </p>
              <p>
                That is especially useful when a project needs more than a
                standard marketing site. If it needs dashboards, integrations,
                automation, AI features, or real-time behavior, I can stay in
                the same project and keep the architecture coherent.
              </p>
              <p>
                For freelance clients, that usually means fewer handoffs,
                clearer technical decisions, and faster movement from idea to a
                usable product.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="panel-surface p-7">
            <SectionHeading
              eyebrow="How I work"
              title="Structured, transparent, and focused on momentum"
              description="I like short loops, visible progress, and product decisions grounded in technical reality."
            />
            <div className="mt-8 space-y-4">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="flex gap-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                >
                  <span className="font-mono text-sm text-cyan-300">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-white/65">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Why clients hire me"
          title="A rare mix of web product thinking and AI engineering"
          description="This is the combination I bring to freelance work, especially when a project needs both execution speed and technical depth."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {proofPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.06}>
              <article className="panel-surface h-full p-6">
                <p className="eyebrow">{point.kicker}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {point.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Education"
              title="Computer science foundation with applied AI focus"
              description="Academic grounding plus practical delivery across ML, computer vision, backend engineering, and product systems."
            />
            <div className="space-y-4">
              {education.map((item) => (
                <article key={item.title} className="panel-surface p-6">
                  <p className="eyebrow">{item.period}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-white/60">{item.org}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-white/72">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 border-t border-white/10 pt-3 first:border-t-0 first:pt-0"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="panel-surface p-7">
            <SectionHeading
              eyebrow="Special skills"
              title="The cross-functional side that helps projects land well"
              description="Technical execution matters more when it is paired with clarity, problem framing, and careful decision-making."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {specialSkills.map((skill) => (
                <span key={skill} className="tech-chip text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
