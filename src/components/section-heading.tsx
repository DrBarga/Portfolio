import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal>
      <div className="max-w-3xl space-y-4">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
        <p className="text-base leading-8 text-white/70 sm:text-lg">
          {description}
        </p>
      </div>
    </Reveal>
  );
}
