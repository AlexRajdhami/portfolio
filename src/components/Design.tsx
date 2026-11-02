import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { DESIGN_CATS, DESIGNS } from '../data';

type Cat = (typeof DESIGN_CATS)[number];

export default function Design() {
  const [cat, setCat] = useState<Cat>('All');
  const [open, setOpen] = useState<number | null>(null);
  const items = cat === 'All' ? DESIGNS : DESIGNS.filter((d) => d.cat === cat);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const show = (i: number) => {
    lastFocus.current = document.activeElement as HTMLElement;
    setOpen(i);
  };
  const close = useCallback(() => {
    setOpen(null);
    lastFocus.current?.focus();
  }, []);
  const step = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (open === null) return undefined;
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close, step]);

  const current = open === null ? null : items[open];

  return (
    <section id="design" className="scroll-mt-20 border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-2 font-mono text-sm text-accent">04. design</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Graphic & UI design</h2>
            <p className="mt-3 max-w-xl text-slate-400">
              Before my degree I worked as a graphic designer – social media campaigns, product ads and website mock-ups made in
              Photoshop, Illustrator and Figma.
            </p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter designs">
            {DESIGN_CATS.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={cat === c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  cat === c ? 'bg-white text-ink-950' : 'border border-white/10 text-slate-300 hover:bg-white/5'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.ul layout className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {items.map((d, i) => (
              <motion.li
                layout
                key={d.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <button
                  type="button"
                  onClick={() => show(i)}
                  className="group relative block aspect-square w-full overflow-hidden rounded-xl border border-white/5 bg-ink-800"
                  aria-label={`Open ${d.title}`}
                >
                  <img src={d.src} alt="" loading="lazy" className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                  <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent p-3 text-left opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="text-sm font-medium text-white">{d.title}</span>
                    <span className="text-xs text-slate-400">{d.client}</span>
                  </span>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button ref={closeBtn} type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
              <X size={22} />
            </button>
            <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous design" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:left-6">
              <ChevronLeft size={26} />
            </button>
            <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next design" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:right-6">
              <ChevronRight size={26} />
            </button>
            <figure className="flex max-h-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
              {/full|tech-store/.test(current.src) ? (
                <div className="max-h-[78vh] overflow-y-auto rounded-lg" tabIndex={0} aria-label="Scroll to see the full page">
                  <img src={current.src} alt={current.title} className="w-[min(88vw,720px)]" />
                </div>
              ) : (
                <img src={current.src} alt={current.title} className="max-h-[78vh] max-w-[88vw] rounded-lg object-contain" />
              )}
              <figcaption className="mt-4 text-center">
                <p className="font-medium text-white">{current.title}</p>
                <p className="text-sm text-slate-400">{current.client} · {current.cat}</p>
              </figcaption>
            </figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
