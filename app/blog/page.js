import Image from 'next/image';

export const metadata = { title: 'Blog | Beesmart Study Center' };

const POSTS = [
  {
    img: 'blog-study-habits.jpg',
    cat: 'Aprendizaje',
    date: '15 Ene 2025',
    title: '5 hábitos que separan a los estudiantes de inglés exitosos de los que se rinden',
    text: 'Descubre qué hacen diferente las personas que realmente aprenden inglés y cómo puedes aplicarlo desde hoy.',
  },
  {
    img: 'blog-business-meeting.jpg',
    cat: 'Negocios',
    date: '8 Ene 2025',
    title: 'Las 20 frases en inglés que todo profesional mexicano debe saber para reuniones internacionales',
    text: 'De la apertura al cierre de una reunión, domina estas frases clave para sonar natural y profesional.',
  },
  {
    img: 'blog-teen-learning.jpg',
    cat: 'Teens',
    date: '2 Ene 2025',
    title: 'Cómo motivar a tu hijo adolescente a aprender inglés sin peleas ni resistencia',
    text: 'Estrategias probadas para padres que quieren que sus hijos hablen inglés con fluidez antes de la universidad.',
  },
];

export default function Blog() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <div className="max-w-2xl">
        <span className="eyebrow">Blog & recursos</span>
        <h1 className="mt-3 font-display text-4xl font-bold text-navy-deep md:text-5xl">Aprende más sobre inglés</h1>
        <p className="mt-4 text-ink/60">Consejos, estrategias y recursos para acelerar tu aprendizaje fuera del aula.</p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {POSTS.map((p) => (
          <article key={p.title} className="overflow-hidden rounded-2xl border border-black/5 bg-white">
            <Image src={`/images/${p.img}`} alt={p.title} width={500} height={333} className="h-48 w-full object-cover" />
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-ink/40">
                <span className="rounded-full bg-honey-light px-2.5 py-1 font-semibold text-navy-deep">{p.cat}</span>
                <span>{p.date}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug text-navy-deep">{p.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{p.text}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-navy">Leer artículo →</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
