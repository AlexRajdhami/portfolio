import { afterEach, describe, expect, it, beforeAll } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

afterEach(cleanup);
import App from '../App';
import { PROFILE, PROJECTS } from '../data';

beforeAll(() => {
  // framer-motion's whileInView needs IntersectionObserver, which jsdom lacks
  globalThis.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
  } as unknown as typeof IntersectionObserver;
});

describe('portfolio', () => {
  it('shows every project with a live demo and source link', () => {
    render(<App />);
    for (const p of PROJECTS) {
      expect(screen.getByRole('heading', { name: p.title })).toBeTruthy();
      expect(document.querySelectorAll(`a[href="${p.live}"]`).length).toBeGreaterThan(0);
      if (p.code) expect(document.querySelector(`a[href="${p.code}"]`)).toBeTruthy();
    }
  });

  it('offers the CV as a download', () => {
    render(<App />);
    const cvLinks = document.querySelectorAll(`a[href="${PROFILE.cv}"][download]`);
    expect(cvLinks.length).toBeGreaterThan(0);
  });

  it('opens external links safely in a new tab', () => {
    render(<App />);
    document.querySelectorAll('a[target="_blank"]').forEach((a) => {
      expect(a.getAttribute('rel')).toContain('noopener');
    });
  });

  it('never shows a phone number', () => {
    render(<App />);
    expect(document.body.textContent).not.toMatch(/(\+44|07\d{3})\s?\d{3}/);
    expect(document.querySelector('a[href^="tel:"]')).toBeNull();
  });
});

import { fireEvent } from '@testing-library/react';
import { DESIGNS } from '../data';

describe('design gallery', () => {
  it('filters by category and opens a lightbox that closes with Escape', async () => {
    render(<App />);
    const gallery = document.getElementById('design')!;
    expect(gallery.querySelectorAll('ul button').length).toBe(DESIGNS.length);

    fireEvent.click(screen.getByRole('button', { name: 'Web & UI' }));
    await new Promise((r) => setTimeout(r, 400));
    const webCount = DESIGNS.filter((d) => d.cat === 'Web & UI').length;
    expect(gallery.querySelectorAll('ul button').length).toBe(webCount);

    fireEvent.click(gallery.querySelector('ul button')!);
    expect(screen.getByRole('dialog')).toBeTruthy();
    fireEvent.keyDown(document, { key: 'Escape' });
    await new Promise((r) => setTimeout(r, 400));
    expect(screen.queryByRole('dialog')).toBeNull();
  });
});

describe('contact form', () => {
  it('asks for a name and message before opening email', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    expect(screen.getByRole('alert').textContent).toMatch(/name/);
  });
});
