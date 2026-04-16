import Image from "next/image";
import { Reveal } from "@/components/reveal";
import type { PortfolioProject } from "@/data/portfolio";

export function ProjectShowcase({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  const reverse = index % 2 === 1;

  return (
    <article className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <Reveal className={reverse ? "lg:order-2" : ""}>
        <div className="space-y-6">
          <div>
            <p className="eyebrow">{project.category}</p>
            <h3 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {project.title}
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">
              {project.description}
            </p>
          </div>

          <div className="space-y-3">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex gap-3 border-t border-white/10 pt-3 first:border-t-0 first:pt-0"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(122,227,255,0.82)]" />
                <p className="text-sm leading-7 text-white/72">{highlight}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="tech-chip">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                className="button-secondary"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
          {project.note ? (
            <p className="text-sm font-mono text-cyan-100/65">{project.note}</p>
          ) : null}
        </div>
      </Reveal>

      <Reveal delay={0.08} className={reverse ? "lg:order-1" : ""}>
        <div className="panel-surface relative overflow-hidden p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400/70" />
              <span className="h-3 w-3 rounded-full bg-amber-300/70" />
              <span className="h-3 w-3 rounded-full bg-emerald-300/70" />
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100/60">
              {project.kicker}
            </span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_center,rgba(68,184,255,0.18),transparent_70%)]">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,13,0.08),rgba(4,7,13,0.34))]" />
            <div className="absolute left-4 top-4 border border-white/10 bg-[rgba(4,7,13,0.7)] px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan-100/75">
              {project.outcome}
            </div>
          </div>
        </div>
      </Reveal>
    </article>
  );
}
