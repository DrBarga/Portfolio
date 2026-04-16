import type { Metadata } from "next";
import { projects, publicRepos } from "@/data/portfolio";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { ProjectShowcase } from "@/components/project-showcase";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects from Bohdan Zelenskyi covering e-commerce UX, AI dashboards, BIM websites, and the VisionInsight video intelligence platform.",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Projects"
        title="Selected work across web products, business sites, and applied AI."
        description="These projects show the range I bring to client work: commerce UX, marketing sites, AI-powered interfaces, and backend-first intelligence systems."
        stats={[
          { label: "Selected cases", value: String(projects.length) },
          { label: "Public repos", value: String(publicRepos.length) },
          { label: "Modes", value: "Web / Backend / AI" },
        ]}
      />

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Case studies"
          title="Work that balances visuals, architecture, and usability"
          description="Some of these are public, some are concept or client-style builds, but all reflect the kind of projects I want to ship for real businesses."
        />
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectShowcase key={project.slug} index={index} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="GitHub trail"
          title="Recent public repositories and demos"
          description="A few public touchpoints for how I structure, ship, and document work when it is available in the open."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {publicRepos.map((repo, index) => (
            <Reveal key={repo.name} delay={index * 0.05}>
              <article className="panel-surface flex h-full flex-col p-6">
                <p className="eyebrow">{repo.label}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {repo.name}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-white/70">
                  {repo.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    className="button-secondary"
                    href={repo.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  {repo.demo ? (
                    <a
                      className="button-secondary"
                      href={repo.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
