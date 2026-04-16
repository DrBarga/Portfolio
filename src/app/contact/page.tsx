import type { Metadata } from "next";
import { contactLinks, siteMeta } from "@/data/portfolio";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bohdan Zelenskyi for freelance web development, AI integration, backend engineering, and custom digital product work.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="If you need a serious builder for a modern web or AI project, let&apos;s talk."
        description="I am open to freelance collaborations involving company websites, custom web apps, AI integrations, automation, dashboards, and backend systems that need to be production-ready."
        stats={[
          { label: "Best fit", value: "Fast-moving product work" },
          { label: "Timezone", value: "Europe / Germany" },
          { label: "Focus", value: "Freelance client projects" },
        ]}
        actions={
          <>
            <a className="button-primary" href={`mailto:${siteMeta.email}`}>
              Email me
            </a>
            <a
              className="button-secondary"
              href={siteMeta.telegram}
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
          </>
        }
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Direct channels"
          title="Pick the contact method that feels easiest"
          description="Telegram is fast for starting the conversation. Email is great for scopes, references, and project details."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {contactLinks.map((link, index) => (
            <Reveal key={link.label} delay={index * 0.05}>
              <a
                className="panel-surface flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <p className="eyebrow">{link.label}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {link.value}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {link.note}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <div className="panel-surface p-7">
            <SectionHeading
              eyebrow="What I can help with"
              title="Good freelance fit"
              description="Projects where product quality, backend reliability, and technical clarity all matter."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Modern business websites and landing pages",
                "Custom web apps and internal dashboards",
                "Backend APIs, auth, and real-time features",
                "AI integrations, OCR, computer vision, and automation",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-white/10 bg-white/5 p-4 text-sm leading-7 text-white/72"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="panel-surface p-7">
            <p className="eyebrow">Resume</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Want the concise version?
            </h2>
            <p className="mt-4 text-base leading-8 text-white/70">
              You can open or download my resume for the quick overview of roles,
              technologies, and results.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="button-primary"
                href="/resume/Bohdan-Zelenskyi-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Open resume
              </a>
              <a
                className="button-secondary"
                href={siteMeta.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
