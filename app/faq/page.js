'use client';

import { useState } from 'react';
import Link from 'next/link';

const FAQS = [
  { q: '¿Necesito conocimientos previos para inscribirme?', a: 'No, absoluto. Ofrecemos clases desde nivel principiante hasta avanzado. Antes de iniciar, realizamos un diagnóstico gratuito para ubicarte en el nivel correcto y diseñar un programa que se adapte a ti.' },
  { q: '¿Cuántas horas de clase son por semana?', a: 'Nuestras opciones van desde 2 horas por semana (para quienes tienen agenda apretada) hasta 6 horas semanales para quienes buscan avanzar más rápido. Cada plan puede personalizarse.' },
  { q: '¿Las clases son en línea o presenciales?', a: 'Todas las clases se imparten en línea, en tiempo real. Usamos plataformas de videollamada con pizarras virtuales y material interactivo para que la experiencia sea igual o mejor que una clase presencial.' },
  { q: '¿Cuánto tiempo tarda en verse progreso real?', a: 'La mayoría de nuestros estudiantes notan mejoras tangibles en las primeras 4 semanas. El avance de nivel completo toma entre 3 y 6 meses dependiendo del punto de partida y la frecuencia de estudio.' },
  { q: '¿Qué pasa si pierdo una clase?', a: 'Puedes recuperar clases perdidas dentro de la misma semana en horarios disponibles. También tienes acceso a materiales de refuerzo en nuestra plataforma para que no pierdas el hilo del programa.' },
  { q: '¿Tienen programas para empresas?', a: 'Sí, contamos con programas corporativos para equipos de cualquier tamaño. Ofrecemos inglés de negocios, comunicación intercultural y preparación para reuniones internacionales con plan a la medida de tu empresa.' },
  { q: '¿El certificado de Beesmart es reconocido?', a: 'Nuestros certificados son reconocidos por empresas socias y tienen validez para procesos de selección laboral. En programas avanzados también te preparamos para TOEFL o Cambridge, que tienen validez global.' },
  { q: '¿Cuál es el tamaño máximo de los grupos?', a: 'Nuestros grupos tienen un máximo de 8 estudiantes por clase. Esto garantiza que todos tengan tiempo real de práctica oral y que el maestro pueda atender las necesidades individuales de cada alumno.' },
  { q: '¿Qué necesito para tomar las clases?', a: 'Solo necesitas una computadora o tablet con cámara y micrófono, y una conexión a internet estable. No se requiere software especializado; usamos plataformas accesibles desde el navegador.' },
  { q: '¿Tienen garantía de satisfacción?', a: 'Sí. Ofrecemos garantía de satisfacción de 30 días. Si asistes con regularidad y no percibes avance alguno en el primer mes, te devolvemos tu inversión. Tu progreso es nuestra prioridad y lo respaldamos con hechos.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:px-10">
      <div className="text-center">
        <span className="eyebrow">Preguntas frecuentes</span>
        <h1 className="mt-3 font-display text-4xl font-bold text-navy-deep md:text-5xl">
          Todo lo que necesitas saber
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-ink/60">
          ¿Tienes dudas? Aquí respondemos las preguntas más comunes sobre nuestros programas de inglés en CDMX.
        </p>
      </div>

      <div className="mt-12 divide-y divide-black/5 rounded-2xl border border-black/5 bg-white">
        {FAQS.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-navy-deep">{f.q}</span>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-honey-light text-navy-deep transition-transform ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              {isOpen && <p className="px-6 pb-5 text-sm text-ink/60">{f.a}</p>}
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <p className="mb-4 text-sm text-ink/60">¿No encontraste tu respuesta?</p>
        <Link href="/contacto" className="btn-outline">
          Habla con un asesor →
        </Link>
      </div>
    </section>
  );
}
