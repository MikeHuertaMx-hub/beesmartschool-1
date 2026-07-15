'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const LINKS = [
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/programas', label: 'Programas' },
  { href: '/precios', label: 'Precios' },
  { href: '/testimonios', label: 'Estudiantes' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/beesmart-logo.jpg"
            alt="Beesmart Study Center"
            width={160}
            height={50}
            className="h-11 w-auto rounded-md"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-navy"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contacto" className="btn-primary">
            Inscríbete ahora
          </Link>
        </div>

        <button
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-navy transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-navy transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-navy transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-paper px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-ink">
                {l.label}
              </Link>
            ))}
            <Link href="/contacto" onClick={() => setOpen(false)} className="btn-primary justify-center">
              Inscríbete ahora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
