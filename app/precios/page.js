import Link from 'next/link';

export const metadata = { title: 'Precios | Beesmart Study Center' };

const PLANS = [
  {
    icon: '📋', name: 'Inscripción General',
    desc: 'Pago único de registro para activar tu acceso y materiales premium.',
    amount: '$250', period: 'pago único inicial',
    features: ['Activación de cuenta en plataforma', 'Examen de colocación gratuito', 'Acceso a materiales Pearson y Oxford', 'Orientación y asignación de nivel', 'Se paga una sola vez'],
  },
  {
    icon: '👥', name: 'Curso Grupal', popular: true,
    desc: 'El ambiente ideal para aprender con compañeros y practicar conversación real.',
    amount: '$1,200', period: '/ mes',
    features: ['Grupos reducidos de máx. 7 alumnos', '2 clases en vivo por semana', '1.5 horas por sesión de clase', 'Práctica de conversación grupal dinámica', 'Material editorial premium incluido', 'Reportes mensuales de progreso', 'Acceso a plataforma 24/7'],
  },
  {
    icon: '🎯', name: 'Clases Particulares',
    desc: 'Atención 100% personalizada para avanzar a tu ritmo con un maestro dedicado a ti.',
    amount: '$180', period: '/ hora',
    features: ['Ritmo 100% personalizado', 'Enfocado en tus necesidades específicas', 'Profesor certificado exclusivo para ti', 'Horario completamente flexible', 'Avanza al doble de velocidad'],
  },
];

export default function Precios() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <span className="eyebrow">Planes y precios</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-navy-deep md:text-5xl">
            Elige el plan que mejor se adapte a ti
          </h1>
          <p className="mt-4 text-ink/60">
            Inversión real en tu futuro. Planes transparentes sin costos ocultos, con todo incluido desde el
            primer día.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 ${
                p.popular ? 'bg-navy-deep text-white shadow-2xl md:-translate-y-4' : 'border border-black/5 bg-white'
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-honey px-4 py-1 text-xs font-bold text-navy-deep">
                  ⭐ Más popular
                </span>
              )}
              <div className="text-3xl">{p.icon}</div>
              <h3 className="mt-4 font-display text-xl font-bold">{p.name}</h3>
              <p className={`mt-2 text-sm ${p.popular ? 'text-white/70' : 'text-ink/60'}`}>{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-extrabold">{p.amount}</span>
                <span className={`text-sm ${p.popular ? 'text-white/60' : 'text-ink/50'}`}>{p.period}</span>
              </div>
              <div className={`my-6 h-px w-full ${p.popular ? 'bg-white/15' : 'bg-black/5'}`} />
              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className={p.popular ? 'text-honey' : 'text-navy'}>✓</span>
                    <span className={p.popular ? 'text-white/80' : 'text-ink/70'}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contacto"
                className={`mt-8 flex w-full justify-center ${p.popular ? 'btn-primary' : 'btn-outline'}`}
              >
                {p.popular ? 'Quiero inscribirme →' : 'Solicitar información →'}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 rounded-xl bg-honey-light px-6 py-5 text-sm text-navy-deep">
          <span className="text-lg">🎓</span>
          <span>
            <strong>¿Buscas apoyo económico?</strong> Pregunta por nuestro programa de becas. ¡Hacemos que el
            inglés sea accesible para todos!
          </span>
        </div>
      </div>
    </section>
  );
}
