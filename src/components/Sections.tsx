import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Award, Briefcase, Check, ClipboardCheck, Code2, Copy, Download, ExternalLink,
  Github, GraduationCap, HeartHandshake, Headset, Linkedin, Lock, Mail, MapPin, ShieldCheck, Wrench,
} from 'lucide-react';
import { CERTS, EDUCATION, EXPERIENCE, PROFILE, PROJECTS, SKILLS, STRENGTHS } from '../data';

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

function Heading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="mb-2 font-mono text-sm text-accent">{kicker}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
    </div>
  );
}

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid grid-cols-1 max-w-6xl items-center gap-14 px-4 pb-16 md:px-6 md:pb-24 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" aria-hidden />
            Available for IT support & junior developer roles
          </p>
          <h1 className="text-[2.6rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[3.6rem] xl:text-[4.2rem]">
            Alex Rajdhami
            <span className="mt-3 block bg-gradient-to-r from-accent via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              IT Support & Junior Developer
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Computer Science graduate based in Ashford, Surrey. I solve tech problems patiently, build and deploy full-stack
            web apps, and bring a designer’s eye and two years of people-first experience from health and social care.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-ink-950 shadow-lg shadow-accent/20 transition hover:bg-accent-soft">
              View my work <ArrowRight size={18} aria-hidden />
            </a>
            <a href={PROFILE.cv} download className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5">
              <Download size={18} aria-hidden /> Download CV
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-5 text-slate-400">
            <a href={PROFILE.github} {...ext} aria-label="GitHub" className="-m-2 p-2 transition hover:text-white"><Github size={22} /></a>
            <a href={PROFILE.linkedin} {...ext} aria-label="LinkedIn" className="-m-2 p-2 transition hover:text-white"><Linkedin size={22} /></a>
            <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="-m-2 p-2 transition hover:text-white"><Mail size={22} /></a>
            <span className="inline-flex items-center gap-1.5 text-sm"><MapPin size={16} aria-hidden /> {PROFILE.location}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[380px]"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 via-sky-400/10 to-indigo-500/30 blur-xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-800">
            <img src="img/alex.webp" alt="Alex Rajdhami" width={600} height={900} fetchPriority="high" className="aspect-[4/5] w-full object-cover object-top" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/80 to-transparent" aria-hidden />
          </div>
          <div className="absolute -left-4 top-8 rounded-xl border border-white/10 bg-ink-900/90 px-4 py-3 shadow-xl backdrop-blur xl:-left-10">
            <p className="text-sm font-semibold text-white">Surrey · London</p>
            <p className="text-xs text-slate-400">or remote</p>
          </div>
          <div className="absolute -right-3 bottom-10 flex items-center gap-3 rounded-xl border border-white/10 bg-ink-900/90 px-4 py-3 shadow-xl backdrop-blur xl:-right-8">
            <GraduationCap size={22} className="text-accent" aria-hidden />
            <div>
              <p className="text-sm font-semibold text-white">BSc (Hons) CS</p>
              <p className="text-xs text-slate-400">UEL · 2026</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative border-y border-white/5 bg-ink-900/60">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-4 py-7 text-center md:grid-cols-4 md:px-6">
          {[
            ['BSc (Hons)', 'Computer Science'],
            ['2+ years', 'people-facing care work'],
            ['8 projects', '3 used daily by a real business'],
            ['UK', 'full right to work'],
          ].map(([v, l]) => (
            <div key={l}>
              <dt className="sr-only">{l}</dt>
              <dd className="text-xl font-semibold text-white md:text-2xl">{v}</dd>
              <dd className="mt-1 text-xs uppercase tracking-wider text-slate-400">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const STRENGTH_ICONS = [HeartHandshake, ClipboardCheck, Lock];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div {...reveal}>
            <Heading kicker="01. about" title="Tech skills, with a people-first background" />
            <div className="space-y-4 leading-relaxed text-slate-400">
              <p>
                I graduated with a BSc (Hons) in Computer Science from the University of East London in 2026. My final-year
                project was an AI career recommender, and I’ve since finished and published several more projects end to end – from
                the code and tests to CI/CD and hosting.
              </p>
              <p>
                I started out as a graphic designer, making social media campaigns and website mock-ups, so I care about how
                things look as well as how they work.
              </p>
              <p>
                During my degree I worked as a care assistant. It taught me the things that make IT support work:
                staying calm when someone is stressed, explaining clearly without jargon, keeping accurate records and treating
                personal information with care.
              </p>
              <p>
                Right now I manage the website and booking system for a transfer company, and I’m studying for Microsoft
                Azure Fundamentals (AZ-900). I have full UK right to work.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 self-end">
            {STRENGTHS.map((s, i) => {
              const Icon = STRENGTH_ICONS[i];
              return (
                <motion.div {...reveal} key={s.title} className="flex gap-4 rounded-xl border border-white/5 bg-ink-900 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent"><Icon size={20} aria-hidden /></span>
                  <div>
                    <h3 className="font-semibold text-white">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{s.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const SKILL_ICONS = [Headset, ShieldCheck, Code2, Wrench];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Heading kicker="02. skills" title="What I can help with" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((g, i) => {
            const Icon = SKILL_ICONS[i];
            return (
              <motion.div {...reveal} key={g.group} className="rounded-xl border border-white/5 bg-ink-900 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Icon size={20} className="text-accent" aria-hidden />
                  <h3 className="font-semibold text-white">{g.group}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-sm text-slate-300">{s}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Heading kicker="03. projects" title="Finished, tested and live" />
        <div className="space-y-8">
          {PROJECTS.map((p, i) => (
            <motion.article
              {...reveal}
              key={p.title}
              className="grid grid-cols-1 overflow-hidden rounded-2xl border border-white/5 bg-ink-900 lg:grid-cols-2"
            >
              <a
                href={p.live}
                {...ext}
                className={`group flex items-center bg-gradient-to-br from-ink-800 to-ink-950 p-5 md:p-8 ${i % 2 ? 'lg:order-2' : ''}`}
                aria-label={`Open the ${p.title} live demo`}
              >
                <div className="w-full overflow-hidden rounded-lg border border-white/10 shadow-xl shadow-black/40">
                  <div className="flex gap-1.5 bg-ink-700 px-3 py-2" aria-hidden>
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                  </div>
                  <img
                    src={p.image}
                    alt={`Screenshot of ${p.title}`}
                    loading="lazy"
                    width={1200}
                    height={p.height}
                    className="block h-auto w-full transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </a>
              <div className="flex flex-col p-6 md:p-8">
                <p className="font-mono text-xs uppercase tracking-wider text-accent">{p.tag}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{p.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-300">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5"><Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />{pt}</li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
                  {p.stack.map((s) => (
                    <li key={s} className="rounded-md bg-white/[0.04] px-2 py-1 font-mono text-xs text-slate-400">{s}</li>
                  ))}
                </ul>
                {p.note && <p className="mt-5 text-xs leading-relaxed text-slate-400">{p.note}</p>}
                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  <a href={p.live} {...ext} className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-ink-950 transition hover:bg-accent-soft">
                    <ExternalLink size={16} aria-hidden /> {p.liveLabel ?? 'Live demo'}
                  </a>
                  {p.extra?.map((l) => (
                    <a key={l.href} href={l.href} {...ext} className="inline-flex items-center gap-2 rounded-lg border border-accent/40 px-4 py-2.5 text-sm font-medium text-accent transition hover:bg-accent/10">
                      <ExternalLink size={16} aria-hidden /> {l.label}
                    </a>
                  ))}
                  {p.code ? (
                    <a href={p.code} {...ext} className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/5">
                      <Github size={16} aria-hidden /> Source code
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-white/15 px-4 py-2.5 text-sm text-slate-400">
                      <Lock size={15} aria-hidden /> Company code (private)
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto grid grid-cols-1 max-w-6xl gap-14 px-4 md:px-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <Heading kicker="05. experience" title="Where I’ve worked" />
          <ol className="relative space-y-10 border-l border-white/10 pl-7">
            {EXPERIENCE.map((e) => (
              <motion.li {...reveal} key={e.role} className="relative">
                <span className="absolute -left-[35px] top-1 grid h-4 w-4 place-items-center rounded-full border-2 border-accent bg-ink-950" aria-hidden />
                <p className="font-mono text-xs text-slate-400">{e.dates}</p>
                <h3 className="mt-1 text-lg font-semibold text-white">{e.role}</h3>
                <p className="text-sm text-accent">{e.org}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-slate-400 marker:text-slate-600">
                  {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-white"><GraduationCap size={20} className="text-accent" aria-hidden /> Education</h3>
            {EDUCATION.map((ed) => (
              <div key={ed.title} className="rounded-xl border border-white/5 bg-ink-900 p-5">
                <p className="font-mono text-xs text-slate-400">{ed.dates}</p>
                <p className="mt-1 font-semibold text-white">{ed.title}</p>
                <p className="text-sm text-accent">{ed.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{ed.text}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-white"><Award size={20} className="text-accent" aria-hidden /> Certifications & learning</h3>
            <ul className="space-y-3">
              {CERTS.map((c) => (
                <li key={c.title} className="rounded-xl border border-white/5 bg-ink-900 px-5 py-4">
                  <p className="text-sm font-medium text-white">{c.title}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{c.org} · {c.year}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', message: '' });
  const [error, setError] = useState('');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || form.message.trim().length < 10) {
      setError('Please add your name and a short message (at least 10 characters).');
      return;
    }
    setError('');
    const subject = `Portfolio enquiry from ${form.name.trim()}${form.company.trim() ? ` (${form.company.trim()})` : ''}`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(form.message.trim())}`;
  };

  const field = 'w-full rounded-lg border border-white/10 bg-ink-950 px-4 py-3 text-white placeholder:text-slate-600 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20';

  return (
    <section id="contact" className="scroll-mt-20 border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto grid grid-cols-1 max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div>
          <Heading kicker="06. contact" title="Let’s work together" />
          <p className="-mt-4 max-w-md leading-relaxed text-slate-400">
            I’m looking for IT support, service desk and junior developer roles in Surrey, London or remote. If you have a role
            in mind or a question, I’d love to hear from you – I usually reply within a day.
          </p>

          <div className="mt-8 flex max-w-md items-center gap-2 rounded-xl border border-white/10 bg-ink-900 p-2 pl-4">
            <Mail size={18} className="shrink-0 text-slate-400" aria-hidden />
            <a href={`mailto:${PROFILE.email}`} className="min-w-0 flex-1 truncate text-sm text-slate-200 sm:text-base hover:text-white">{PROFILE.email}</a>
            <button type="button" onClick={copy} className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-white/5 px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10" aria-live="polite">
              {copied ? <><Check size={15} aria-hidden /> Copied</> : <><Copy size={15} aria-hidden /> Copy</>}
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a href={PROFILE.linkedin} {...ext} className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/5">
              <Linkedin size={17} aria-hidden /> LinkedIn
            </a>
            <a href={PROFILE.github} {...ext} className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/5">
              <Github size={17} aria-hidden /> GitHub
            </a>
            <a href={PROFILE.cv} download className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/5">
              <Briefcase size={17} aria-hidden /> CV (PDF)
            </a>
          </div>
        </div>

        <form onSubmit={send} noValidate className="space-y-4 rounded-2xl border border-white/5 bg-ink-900 p-6 md:p-8" aria-label="Contact form">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm text-slate-300">
              Your name
              <input className={`${field} mt-1.5`} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} autoComplete="name" required />
            </label>
            <label className="block text-sm text-slate-300">
              Company <span className="text-slate-400">(optional)</span>
              <input className={`${field} mt-1.5`} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} autoComplete="organization" />
            </label>
          </div>
          <label className="block text-sm text-slate-300">
            Message
            <textarea className={`${field} mt-1.5 min-h-[140px] resize-y`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Hi Alex, we have an IT support role…" required />
          </label>
          {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
          <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-ink-950 transition hover:bg-accent-soft">
            <Mail size={18} aria-hidden /> Send message
          </button>
          <p className="text-center text-xs text-slate-400">Opens your email app with the message ready to send.</p>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-sm text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 md:px-6">
        <p>© {new Date().getFullYear()} {PROFILE.name}</p>
        <p>
          Built with React, TypeScript and Tailwind CSS ·{' '}
          <a href="https://github.com/AlexRajdhami/portfolio" {...ext} className="underline underline-offset-4 hover:text-white">source</a>
        </p>
      </div>
    </footer>
  );
}
