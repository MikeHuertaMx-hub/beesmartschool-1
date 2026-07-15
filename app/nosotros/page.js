import Image from 'next/image';
import Link from 'next/link';

export const metadata = { title: 'Nosotros | Beesmart Study Center' };

const VALUES = [
  { icon: '🏅', title: 'Excelencia', text: 'Estándares internacionales en cada clase.' },
  { icon: '❤️', title: 'Compromiso', text: 'Tu progreso es nuestra responsabilidad.' },
  { icon: '🌱', title: 'Crecimiento', text: 'Nos desarrollamos contigo, clase a clase.' },
  { icon: '🤝', title: 'Comunidad', text: 'Un ambiente seguro para aprender.' },
];

export default function Nosotros() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <div className="grid gap-14 md:grid-cols-2 md:items-start">
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/about-student-smiling.jpg"
            alt="Alumna sonriendo estudiando inglés"
            width={400}
            height={520}
            className="col-span-2 h-64 w-full rounded-2xl object-cover"
          />
          <Image
            src="/images/about-team.jpg"
            alt="Equipo Beesmart"
            width={400}
            height={300}
            className="h-40 w-full rounded-2xl object-cover"
          />
          <Image
            src="/images/about-professional.jpg"
            alt="Profesional tomando clase de inglés de negocios"
            width={400}
            height={300}
            className="h-40 w-full rounded-2xl object-cover"
          />
          <div className="col-span-2 rounded-2xl bg-navy-deep p-6 text-white">
            <div className="font-display text-3xl font-extrabold text-honey">12+</div>
            <div className="text-sm text-white/70">Años formando líderes</div>
          </div>
        </div>

        <div>
          <span className="eyebrow">Nuestra historia</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-navy-deep md:text-5xl">
            Apasionados por transformar vidas a través del idioma
          </h1>
          <p className="mt-6 text-ink/70">
            Beesmart Study Center nació de la convicción de que el inglés no debería ser un obstáculo sino una
            herramienta de oportunidades. Desde 2012, hemos desarrollado una metodología única que combina la
            inmersión en vivo con la flexibilidad que los mexicanos necesitan.
          </p>
          <p className="mt-4 text-ink/70">
            Nuestra misión es simple: que cada alumno que pase por Beesmart salga con las habilidades y la
            confianza para comunicarse en inglés en cualquier situación de su vida personal o profesional.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              'Metodología validada con +2,500 estudiantes exitosos',
              'Grupos pequeños que garantizan atención personalizada',
              'Plataforma propia de seguimiento de progreso',
              'Conexión con comunidad global de hablantes de inglés',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-xl bg-navy-light px-4 py-3 text-sm text-navy-deep">
                <span>🎯</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-display text-2xl font-bold text-navy-deep">Nuestros valores</h3>
          <div className="mt-5 grid grid-cols-2 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="flex gap-3">
                <div className="text-2xl">{v.icon}</div>
                <div>
                  <h4 className="font-semibold text-navy-deep">{v.title}</h4>
                  <p className="text-sm text-ink/60">{v.text}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/contacto" className="btn-primary btn-lg mt-8 inline-flex">
            Conoce nuestros programas →
          </Link>
        </div>
      </div>
    </section>
  );
}
