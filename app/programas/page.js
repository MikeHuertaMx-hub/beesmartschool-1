import Link from 'next/link';
import Honeycomb from '@/components/Honeycomb';

export const metadata = { title: 'Programas | Beesmart Study Center' };

const BENEFITS = [
  { icon: '🎯', title: 'Programa a tu medida', text: 'Evaluamos tu nivel y metas antes de iniciar para garantizar avance real desde la primera semana.' },
  { icon: '🖥️', title: '100% clases en vivo', text: 'Sin videos pregrabados. Interactúas con tu maestro en tiempo real, haciendo preguntas y practicando conversación.' },
  { icon: '👨‍🏫', title: 'Maestros certificados', text: 'Todos nuestros instructores tienen certificación CELTA o TEFL y experiencia en empresas internacionales.' },
  { icon: '📈', title: 'Progreso garantizado', text: 'Si sigues el programa y no ves mejoras en 30 días, te devolvemos tu dinero. Sin preguntas.' },
  { icon: '🕐', title: 'Horarios flexibles', text: 'Mañana, tarde o noche. Encuentra el horario que se adapta a tu vida sin sacrificar tu rutina.' },
  { icon: '🏆', title: 'Certificación reconocida', text: 'Al completar tu programa recibes una certificación avalada por empresas e instituciones educativas.' },
];

const LEVELS = [
  { code: 'A1', name: 'Principiante', desc: 'Comienza desde cero. Aprende a presentarte, hacer preguntas sencillas y comprender expresiones cotidianas básicas.' },
  { code: 'A2', name: 'Básico', desc: 'Comunícate en situaciones simples. Habla de tu rutina, tu entorno y mantén conversaciones elementales.' },
  { code: 'B1', name: 'Intermedio', desc: 'Viaja y exprésate con confianza. Describe experiencias, justifica opiniones y desenvuélvete en el día a día.', highlight: true },
  { code: 'B2', name: 'Intermedio alto', desc: 'Habla con fluidez y naturalidad. Entiende textos complejos y debate con nativos sin esfuerzo.' },
  { code: 'C1', name: 'Avanzado', desc: 'Domina el idioma a nivel profesional. Exprésate de forma fluida, espontánea y precisa en contextos laborales.' },
];

const SERVICES = [
  {
    badge: '⭐ Más popular', title: 'Inglés General', age: 'Para adultos · 18 años en adelante',
    text: 'Domina el inglés desde cero o mejora tu nivel actual con un programa dinámico enfocado en comunicación real.',
    features: ['Clases en grupos reducidos (máx. 8 personas)', 'Sesiones de conversación con nativos', 'Material didáctico incluido', 'Evaluaciones mensuales de progreso', 'Acceso a plataforma de práctica 24/7'],
    featured: true,
  },
  {
    badge: '🎓 Para jóvenes', title: 'Teens', age: '13 a 17 años',
    text: 'Programa diseñado para adolescentes con dinámicas interactivas, temas relevantes para su edad y preparación para exámenes internacionales.',
    features: ['Contenido adaptado a intereses juveniles', 'Preparación para Cambridge KET/PET', 'Grupos de compañeros de la misma edad', 'Seguimiento directo con padres', 'Proyectos creativos en inglés'],
  },
  {
    badge: '💼 Para profesionales', title: 'Inglés de Negocios', age: 'Profesionales y empresas',
    text: 'Domina el inglés corporativo: presentaciones, negociaciones, emails formales, videoconferencias y vocabulario de tu industria.',
    features: ['Vocabulario y frases del mundo empresarial', 'Simulacros de reuniones y presentaciones', 'Escritura de emails profesionales', 'Negociación y persuasión en inglés', 'Programas corporativos para equipos'],
  },
  {
    badge: '⚡ Avance acelerado', title: 'Curso Combinado', age: 'General + Negocios · el más completo',
    text: 'La ruta más poderosa: consolida tu inglés general y añade las habilidades profesionales que el mercado laboral exige.',
    features: ['Todo lo del Inglés General incluido', 'Todo lo del Inglés de Negocios incluido', 'Ruta de aprendizaje personalizada', 'Acceso prioritario a maestros', 'Certificación doble al completar'],
    featured: true,
  },
];

const STEPS = [
  { title: 'Diagnóstico gratuito', text: 'Evaluamos tu nivel actual y entendemos tus metas en una sesión de 20 minutos sin costo.' },
  { title: 'Programa personalizado', text: 'Diseñamos tu ruta de aprendizaje ideal según tu nivel, disponibilidad y objetivos específicos.' },
  { title: 'Clases en vivo', text: 'Participa en clases interactivas con maestros certificados desde la comodidad de tu hogar.' },
  { title: 'Certifícate', text: 'Completa tu programa, recibe tu certificación reconocida y abre nuevas puertas en tu carrera.' },
];

export default function Programas() {
  return (
    <>
      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <Header eyebrow="¿Por qué elegirnos?" title="Inglés que funciona en el mundo real" text="Cada clase está diseñada para que practiques desde el primer día. Sin memorizar, sin aburrirte. Solo inglés real." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="text-3xl">{b.icon}</div>
              <h3 className="mt-4 font-display text-lg font-bold text-navy-deep">{b.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEVELS as honeycomb */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Header eyebrow="Niveles disponibles" title="De principiante a avanzado" text="Tu camino hacia la fluidez, paso a paso. Comenzamos donde tú estás y te llevamos hasta donde quieres llegar." />
          <div className="mt-12 flex justify-center">
            <Honeycomb total={5} filled={5} size={64} />
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-5">
            {LEVELS.map((l) => (
              <div
                key={l.code}
                className={`rounded-2xl p-5 text-center ${l.highlight ? 'bg-navy-deep text-white' : 'border border-black/5 bg-paper'}`}
              >
                <div className={`font-display text-2xl font-extrabold ${l.highlight ? 'text-honey' : 'text-navy'}`}>{l.code}</div>
                <div className="mt-1 text-sm font-semibold">{l.name}</div>
                <p className={`mt-2 text-xs ${l.highlight ? 'text-white/70' : 'text-ink/60'}`}>{l.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3 rounded-xl bg-honey-light px-5 py-4 text-sm text-navy-deep">
            <span>🎯</span>
            <span><strong>Examen de colocación gratuito:</strong> antes de iniciar, ubicamos al alumno en el nivel correcto para que avances desde el primer día.</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <Header eyebrow="Nuestros programas" title="Inglés diseñado para tus metas" text="Selecciona el programa que mejor se adapte a tu etapa de vida y objetivos profesionales o personales." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className={`rounded-2xl p-8 ${s.featured ? 'bg-navy-deep text-white' : 'border border-black/5 bg-white'}`}
            >
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${s.featured ? 'bg-honey text-navy-deep' : 'bg-navy-light text-navy'}`}>
                {s.badge}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold">{s.title}</h3>
              <div className={`mt-1 text-sm ${s.featured ? 'text-white/60' : 'text-ink/50'}`}>{s.age}</div>
              <p className={`mt-4 text-sm ${s.featured ? 'text-white/80' : 'text-ink/60'}`}>{s.text}</p>
              <ul className="mt-5 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className={s.featured ? 'text-honey' : 'text-navy'}>✓</span>
                    <span className={s.featured ? 'text-white/80' : 'text-ink/70'}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contacto"
                className={`mt-6 inline-flex ${s.featured ? 'btn-primary' : 'btn-outline'}`}
              >
                Solicitar información →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-navy-deep py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Header eyebrow="Cómo funciona" title="De cero a fluido en 4 pasos" text="Un proceso simple y claro para que empieces a aprender inglés sin complicaciones." dark />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s.title}>
                <div className="font-display text-4xl font-extrabold text-honey">{String(i + 1).padStart(2, '0')}</div>
                <h4 className="mt-3 font-semibold">{s.title}</h4>
                <p className="mt-2 text-sm text-white/60">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Header({ eyebrow, title, text, dark }) {
  return (
    <div className="max-w-2xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={`mt-3 font-display text-4xl font-bold ${dark ? 'text-white' : 'text-navy-deep'}`}>{title}</h2>
      <p className={`mt-4 ${dark ? 'text-white/60' : 'text-ink/60'}`}>{text}</p>
    </div>
  );
}
