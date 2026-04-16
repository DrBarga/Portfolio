import { contactLinks, siteMeta } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="mx-auto flex w-[min(1180px,calc(100%-2rem))] flex-col gap-8 py-8 md:w-[min(1180px,calc(100%-3rem))] md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="eyebrow">Bohdan Zelenskyi</p>
          <p className="mt-3 text-2xl font-semibold text-white">
            Fullstack Web Developer / ML & AI Engineer
          </p>
          <p className="mt-3 text-sm leading-7 text-white/65">
            Building premium websites, scalable backend systems, and practical AI
            products for businesses that want something they can actually ship.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {contactLinks.map((link) => (
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
      </div>
      <div className="mx-auto flex w-[min(1180px,calc(100%-2rem))] flex-col gap-2 border-t border-white/10 py-4 text-xs uppercase tracking-[0.18em] text-white/45 md:w-[min(1180px,calc(100%-3rem))] md:flex-row md:justify-between">
        <span>{siteMeta.location}</span>
        <span>{new Date().getFullYear()} Bohdan Zelenskyi</span>
      </div>
    </footer>
  );
}
