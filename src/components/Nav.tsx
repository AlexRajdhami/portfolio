import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { PROFILE } from '../data';

const LINKS = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Design', '#design'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        scrolled || open ? 'border-b border-white/5 bg-ink-950/85 backdrop-blur' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6" aria-label="Main">
        <a href="#top" aria-label="Alex Rajdhami – back to top" className="-my-1 py-1">
          <span className="block bg-gradient-to-r from-accent to-sky-300 bg-clip-text pr-2 font-signature text-[2rem] leading-none text-transparent transition hover:brightness-125 md:text-[2.4rem]">
            Alex Rajdhami
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
          {LINKS.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="inline-block py-2 transition hover:text-white">{label}</a>
            </li>
          ))}
          <li>
            <a
              href={PROFILE.cv}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-accent/40 px-3.5 py-2 text-accent transition hover:bg-accent/10"
            >
              <Download size={15} aria-hidden /> CV
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-300 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="space-y-1 border-t border-white/5 px-4 pb-5 pt-2 md:hidden">
          {LINKS.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-slate-300 hover:bg-white/5">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href={PROFILE.cv} download className="mt-2 flex items-center gap-2 rounded-lg bg-accent px-3 py-3 font-medium text-ink-950">
              <Download size={16} aria-hidden /> Download CV
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
