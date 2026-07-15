import Image from 'next/image';
import Link from 'next/link';
import Honeycomb from '@/components/Honeycomb';

const STATS = [
  { n: '2,500+', l: 'Estudiantes Activos' },
  { n: '98%', l: 'Tasa de Satisfacción' },
  { n: '12+', l: 'Años de Experiencia' },
  { n: '40+', l: 'Maestros Certificados' },
  { n: '4.9★', l: 'Calificación Google' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep">
        <div
          className="pointer-events-none absolute -right-32 -top-20 h-[620px] w-[620px] bg-hexgrid bg-[length:60px_52px]"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:px-10 md:py-28">
          <div>
            <span className="eyebrow text-honey">🐝 Escuela de Inglés en Vivo · CDMX</span>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] text-white md:text-6xl">
              Tu inglés.
              <br />
              Tu futuro.
              <br />
              <em className="not-italic text-honey">Sin límites.</em>
            </h1>
            <p className="mt-6 max-w-md text-lg text-white/70">
              Conéctate, aprende y domina el idioma a tu ritmo. Profesores certificados, material Pearson y Oxford,
              y grupos de máximo 7 alumnos para garantizar tu progreso.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contacto" className="btn-primary btn-lg">
                Empieza gratis →
              </Link>
              <Link href="/programas" className="btn-lg inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10">
                Ver programas
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {['M', 'A', 'K'].map((l) => (
                  <span
                    key={l}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-navy-deep bg-honey text-sm font-bold text-navy-deep"
                  >
                    {l}
                  </span>
                ))}
              </div>
              <p className="text-sm text-white/70">
                <strong className="text-white">+2,500 estudiantes</strong> ya transformaron su inglés con Beesmart
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 right-6 z-10 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-navy-deep shadow-lg">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" /> Clase en vivo ahora
            </div>
            <div className="overflow-hidden rounded-3xl border-4 border-white/10">
              <Image
                src="/images/hero-student.jpg"
                alt="Estudiante tomando clase de inglés en línea"
                width={600}
                height={400}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-navy-deep shadow-lg">
              ⭐ 4.9 · +800 reseñas verificadas
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-5 md:px-10">
          {STATS.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-3xl font-extrabold text-navy">{s.n}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-ink/50">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRESS / SIGNATURE HONEYCOMB */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="eyebrow">Cómo avanzas</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy-deep">
              Cada clase llena una celda de tu panal
            </h2>
            <p className="mt-4 text-ink/70">
              Como una colmena, tu progreso se construye celda por celda: diagnóstico, práctica en vivo,
              retroalimentación y dominio. Así visualizamos tu avance real, no promesas vacías.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Honeycomb total={16} filled={11} size={40} />
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-honey-light">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-10">
          <span className="eyebrow">¿Listo para empezar?</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-navy-deep md:text-5xl">
            Tu clase de prueba es completamente gratis
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/70">
            Sin compromisos. Vive una clase real con un maestro certificado y descubre por qué cientos de
            estudiantes eligen Beesmart cada mes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contacto" className="btn-dark btn-lg">
              Reservar clase gratis →
            </Link>
            <a
              href="https://wa.me/525563979884"
              target="_blank"
              rel="noreferrer"
              className="btn-lg inline-flex items-center justify-center rounded-full border-2 border-navy-deep px-8 py-4 text-base font-semibold text-navy-deep transition hover:bg-navy-deep hover:text-white"
            >
              💬 Escribir por WhatsApp
            </a>
          </div>
          <p className="mt-5 text-xs text-ink/50">
            ✓ Sin tarjeta de crédito &nbsp;·&nbsp; ✓ Sin compromisos &nbsp;·&nbsp; ✓ Diagnóstico de nivel incluido
          </p>
        </div>
      </section>
    </>
  );
}
