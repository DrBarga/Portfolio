import type { Metadata } from "next";
import Link from "next/link";
import {
  experience,
  heroStats,
  processSteps,
  projects,
  services,
  siteMeta,
} from "@/data/portfolio";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { ProjectShowcase } from "@/components/project-showcase";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Freelance portfolio of Bohdan Zelenskyi, a fullstack web developer and ML/AI engineer building modern sites, backends, and production-ready AI workflows.",
};

const featuredProjects = [projects[0], projects[1]];

export default function HomePage() {
  return (
    <PageShell className="gap-20 pb-24 md:gap-24 md:pb-28">
      <PageHero
        eyebrow="Freelance Fullstack Web Developer / ML & AI Engineer"
        title="Web products, real-time backends, and AI systems built to ship."
        description="I help businesses turn ideas into production-ready experiences: premium websites, scalable APIs, AI integrations, and automation that moves real work forward."
        stats={heroStats}
        className="min-h-[calc(100svh-7rem)] items-end"
        actions={
          <>
            <Link className="button-primary" href="/projects">
              Explore projects
            </Link>
            <Link className="button-secondary" href="/contact">
              Start a project
            </Link>
            <a
              className="button-secondary"
              href="/resume/Bohdan-Zelenskyi-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download resume
            </a>
          </>
        }
        aside={
          <div className="panel-surface relative overflow-hidden p-6 sm:p-7">
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(122,227,255,0.9),transparent)]" />
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="eyebrow">Signal board</p>
                <p className="mt-2 text-xl font-medium text-white">
                  {siteMeta.availability}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
                Active
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2 border border-white/10 bg-white/5 p-4">
                <p className="eyebrow">Core modes</p>
                <p className="text-base text-white">
                  Next.js sites, AI integrations, real-time APIs
                </p>
              </div>
              <div className="space-y-2 border border-white/10 bg-white/5 p-4">
                <p className="eyebrow">Client fit</p>
                <p className="text-base text-white">
                  Founders, product teams, agencies, AI-first businesses
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3 font-mono text-sm text-cyan-100/80">
              <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
                <span>&gt; shipping stack</span>
                <span>React / Next / Python</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
                <span>&gt; collaboration</span>
                <span>remote / async / fast loops</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>&gt; location</span>
                <span>{siteMeta.location}</span>
              </div>
            </div>
          </div>
        }
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Services"
          title="What I can build for clients"
          description="From polished company sites to AI-assisted products, I cover the technical stack end to end and choose the right delivery speed for each project."
        />
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.name} delay={index * 0.06}>
              <article className="panel-surface h-full p-6">
                <p className="eyebrow">{service.tag}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {service.name}
                </h3>
                <p className="mt-3 text-base leading-7 text-white/70">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-cyan-50/80">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-t border-white/10 pt-3"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(122,227,255,0.8)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Featured work"
          title="Selected builds with product and engineering depth"
          description="A mix of AI infrastructure and client-facing web work. The goal is always the same: clean UX on the surface and reliable systems underneath."
        />
        <div className="space-y-16">
          {featuredProjects.map((project, index) => (
            <ProjectShowcase key={project.slug} index={index} project={project} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Execution style"
              title="Practical delivery, not portfolio theater"
              description="I work like a builder who understands both visual quality and backend reality. That means tighter scopes, better architecture decisions, and fewer surprises during launch."
            />
            <div className="panel-surface p-6">
              <p className="eyebrow">How I usually work</p>
              <div className="mt-4 space-y-4 text-white/75">
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
                      <p className="mt-2 leading-7">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {experience.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.06}>
              <article className="panel-surface h-full p-6">
                <p className="eyebrow">{item.period}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-white/60">{item.company}</p>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  {item.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.focus.map((focus) => (
                    <span key={focus} className="tech-chip">
                      {focus}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="panel-surface relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(68,184,255,0.22),transparent_60%)] lg:block" />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow">Next move</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Need a website, product MVP, backend API, or AI integration that
                feels ready for real users?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
                Let&apos;s scope it, choose the right stack, and build something
                fast without sacrificing quality.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link className="button-primary" href="/contact">
                Contact me
              </Link>
              <Link className="button-secondary" href="/projects">
                More projects
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </PageShell>
  );
}
