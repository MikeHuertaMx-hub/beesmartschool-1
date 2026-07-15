import Image from 'next/image';

export const metadata = { title: 'Testimonios | Beesmart Study Center' };

const GALLERY = [
  { img: 'gallery-teamwork.jpg', title: 'Trabajo en equipo y conversación', sub: 'Programa Inglés General · Grupo Nocturno', wide: true },
  { img: 'gallery-teen.jpg', title: 'Gabriela, 16 años', sub: 'Programa Teens · Nivel Intermedio' },
  { img: 'gallery-business-woman.jpg', title: 'Mariana, Ejecutiva', sub: 'Inglés de Negocios · Nivel Avanzado' },
  { img: 'gallery-teen-boy.jpg', title: 'Diego, 14 años', sub: 'Programa Teens · Nivel Básico' },
  { img: 'gallery-adult-student.jpg', title: 'Roberto, Gerente', sub: 'Curso Combinado · Nivel B2' },
  { img: 'gallery-corporate.jpg', title: 'Programa Corporativo Empresarial', sub: 'Inglés de Negocios · Grupo Empresarial', wide: true },
];

const TESTIMONIALS = [
  { text: 'En 6 meses con Beesmart pasé de no poder mantener una conversación a dar presentaciones en inglés ante mi equipo directivo. La metodología en vivo hace toda la diferencia.', name: 'María Andrade', role: 'Gerente de Operaciones · Inglés de Negocios', color: '#3B82F6', initials: 'MA' },
  { text: 'Mi hijo entró tímido al programa Teens y ahora no para de hablar inglés. Los maestros son increíbles con los jóvenes. Totalmente recomendado.', name: 'Carlos Ramírez', role: 'Padre de familia · Programa Teens', color: '#8B5CF6', initials: 'CR' },
  { text: 'Tomé el Curso Combinado y fue la mejor inversión de mi carrera. Conseguí un ascenso con 40% más de sueldo gracias a que ahora atiendo clientes internacionales.', name: 'Laura García', role: 'Ejecutiva de Ventas · Curso Combinado', color: '#10B981', initials: 'LG' },
  { text: 'Los horarios flexibles me permitieron estudiar sin descuidar mi trabajo. Los grupos pequeños hacen que practiques mucho más que en otras escuelas.', name: 'Jorge Peña', role: 'Ingeniero de Software · Inglés General', color: '#F59E0B', initials: 'JP' },
  { text: 'Contratamos a Beesmart para capacitar a 15 personas de nuestro equipo. El programa corporativo fue muy profesional y los resultados se vieron en 3 meses.', name: 'Ana Velázquez', role: 'Directora de RRHH · Programa Corporativo', color: '#EF4444', initials: 'AV' },
  { text: 'Estudié en varios cursos antes y nunca avancé. Con Beesmart en solo 4 meses ya estoy teniendo conversaciones reales. El método en vivo sí funciona.', name: 'Sofía López', role: 'Diseñadora · Inglés General', color: '#06B6D4', initials: 'SL' },
];

export default function Testimonios() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <span className="eyebrow">Nuestra comunidad</span>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold text-navy-deep md:text-5xl">
          Estudiantes reales, <em className="not-italic text-honey-hover">resultados reales</em>
        </h1>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g) => (
            <div
              key={g.img}
              className={`group relative overflow-hidden rounded-2xl ${g.wide ? 'sm:col-span-2' : ''}`}
            >
              <Image
                src={`/images/${g.img}`}
                alt={g.title}
                width={800}
                height={533}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-5 text-white">
                <span className="font-semibold">{g.title}</span>
                <small className="text-white/70">{g.sub}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            <span className="eyebrow">Lo que dicen nuestros estudiantes</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy-deep">Historias reales de éxito</h2>
            <p className="mt-4 text-ink/60">
              Más de 2,500 personas ya cambiaron su vida con Beesmart. Estas son algunas de sus experiencias.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl border border-black/5 bg-paper p-6">
                <div className="text-honey">★★★★★</div>
                <blockquote className="mt-3 text-sm text-ink/70">&ldquo;{t.text}&rdquo;</blockquote>
                <div className="mt-5 flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-navy-deep">{t.name}</div>
                    <div className="text-xs text-ink/50">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
