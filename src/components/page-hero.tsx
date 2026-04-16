import { Reveal } from "@/components/reveal";

type HeroStat = {
  label: string;
  value: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
  stats?: HeroStat[];
  aside?: React.ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  stats,
  aside,
  className = "",
}: PageHeroProps) {
  return (
    <section
      className={`grid gap-10 border-b border-white/10 pb-12 md:pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start ${className}`.trim()}
    >
      <div className="space-y-8">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="max-w-[14ch] text-5xl font-semibold leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
            {description}
          </p>
        </Reveal>
        {actions ? (
          <Reveal delay={0.14}>
            <div className="flex flex-wrap gap-3">{actions}</div>
          </Reveal>
        ) : null}
        {stats?.length ? (
          <div className="grid gap-3 pt-2 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.18 + index * 0.05}>
                <div className="panel-surface p-4">
                  <p className="eyebrow">{stat.label}</p>
                  <p className="mt-3 text-lg font-medium text-white">{stat.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        ) : null}
      </div>
      {aside ? <Reveal delay={0.12}>{aside}</Reveal> : null}
    </section>
  );
}
