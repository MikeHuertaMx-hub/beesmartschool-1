import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-10">
        <div>
          <Image
            src="/images/beesmart-logo.jpg"
            alt="Beesmart Study Center"
            width={150}
            height={47}
            className="h-10 w-auto rounded-md brightness-0 invert"
          />
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Transformamos vidas a través del inglés en vivo desde CDMX. Más de 2,500 estudiantes nos respaldan.
          </p>
          <div className="mt-5 flex gap-2">
            {['f', 'ig', 'in', 'yt', 'tt'].map((s) => (
              <span
                key={s}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-honey">Programas</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li><Link href="/programas">Teens (13–17)</Link></li>
            <li><Link href="/programas">Inglés General</Link></li>
            <li><Link href="/programas">Inglés de Negocios</Link></li>
            <li><Link href="/programas">Curso Combinado</Link></li>
            <li><Link href="/precios">Ver Precios</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-honey">Empresa</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li><Link href="/nosotros">Sobre Nosotros</Link></li>
            <li><Link href="/testimonios">Testimonios</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/faq">Preguntas Frecuentes</Link></li>
            <li><Link href="/contacto">Trabaja con nosotros</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-honey">Contacto</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li><a href="tel:+525563979884">+52 55 6397 9884</a></li>
            <li><a href="mailto:informes@beesmartschool.com">informes@beesmartschool.com</a></li>
            <li><a href="https://wa.me/525563979884">WhatsApp</a></li>
            <li>Ciudad de México</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-xs text-white/50 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Beesmart Study Center. Todos los derechos reservados.</span>
          <span>Aviso de Privacidad · Términos y Condiciones</span>
        </div>
      </div>
    </footer>
  );
}
