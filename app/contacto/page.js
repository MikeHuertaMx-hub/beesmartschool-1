'use client';

import { useState } from 'react';

const PROGRAMS = ['Teens (13–17 años)', 'Inglés General (18+)', 'Inglés de Negocios', 'Curso Combinado', 'Programa Corporativo'];

export default function Contacto() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Conecta aquí tu proveedor de formularios (Formspree, Resend, tu propio API route, etc.)
    setSent(true);
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <div className="grid gap-14 md:grid-cols-2">
        <div>
          <span className="eyebrow">Contáctanos</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-navy-deep md:text-5xl">
            Empieza tu camino al inglés hoy
          </h1>
          <p className="mt-5 max-w-md text-ink/60">
            Completa el formulario o escríbenos directamente. Un asesor te contactará en menos de 24 horas para
            orientarte sin compromisos.
          </p>

          <div className="mt-8 space-y-4">
            {[
              ['💬', 'WhatsApp', '+52 55 6397 9884'],
              ['✉️', 'Email', 'informes@beesmartschool.com'],
              ['📍', 'Ubicación', 'Ciudad de México, México'],
              ['🕐', 'Horario de atención', 'Lun–Vie: 8am–9pm · Sáb: 9am–2pm'],
            ].map(([icon, label, value]) => (
              <div key={label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-honey-light text-lg">
                  {icon}
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wide text-ink/40">{label}</div>
                  <div className="text-sm font-semibold text-navy-deep">{value}</div>
                </div>
              </div>
            ))}
          </div>

          <a href="https://wa.me/525563979884" target="_blank" rel="noreferrer" className="btn-primary btn-lg mt-8 inline-flex">
            Escribir por WhatsApp
          </a>

          <div className="mt-8 flex h-48 flex-col items-center justify-center gap-2 rounded-2xl bg-navy-deep text-white">
            <span className="text-2xl">🗺️</span>
            <span className="text-sm font-medium">Ciudad de México, CDMX</span>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white/60 underline"
            >
              Abrir en Google Maps →
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <span className="text-4xl">🐝</span>
              <h3 className="mt-4 font-display text-xl font-bold text-navy-deep">¡Solicitud enviada!</h3>
              <p className="mt-2 text-sm text-ink/60">Un asesor te contactará muy pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-display text-xl font-bold text-navy-deep">Solicitar información gratis</h3>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Nombre *" placeholder="Tu nombre" required />
                <Field label="Apellido *" placeholder="Tu apellido" required />
              </div>
              <Field label="Email *" type="email" placeholder="correo@ejemplo.com" required />
              <Field label="Teléfono / WhatsApp" type="tel" placeholder="+52 55 0000 0000" />
              <div>
                <label className="mb-1.5 block text-xs font-medium text-ink/60">Programa de interés *</label>
                <select required className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-navy">
                  <option value="">Selecciona un programa</option>
                  {PROGRAMS.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-ink/60">Mensaje (opcional)</label>
                <textarea
                  rows={3}
                  placeholder="¿Tienes alguna pregunta específica?"
                  className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-navy"
                />
              </div>
              <button type="submit" className="btn-primary btn-lg w-full">
                Enviar solicitud →
              </button>
              <p className="text-center text-xs text-ink/40">
                🔒 Tus datos están seguros. No compartimos tu información con terceros.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-ink/60">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-navy"
      />
    </div>
  );
}
