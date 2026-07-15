'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Panal de abejas que se "llena" progresivamente al entrar en vista.
 * `filled` = número de celdas de 0 a total que aparecen como completas (miel).
 * Funciona como metáfora visual de progreso — el elemento de firma de la marca.
 */
export default function Honeycomb({ total = 12, filled = 8, size = 34, className = '' }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const cols = Math.ceil(total / 2);
  const cells = Array.from({ length: total });
  const w = size;
  const h = size * 0.87;

  return (
    <div ref={ref} className={`flex flex-wrap gap-1.5 ${className}`} style={{ width: cols * (w + 6) }}>
      {cells.map((_, i) => {
        const isFilled = i < filled;
        const rowOffset = i % 2 === 1;
        return (
          <svg
            key={i}
            width={w}
            height={h}
            viewBox="0 0 60 52"
            style={{
              marginTop: rowOffset ? h / 2 : 0,
              transitionDelay: active ? `${i * 60}ms` : '0ms',
            }}
            className={`transition-all duration-500 ${
              active ? (isFilled ? 'opacity-100 scale-100' : 'opacity-40 scale-95') : 'opacity-0 scale-75'
            }`}
          >
            <polygon
              points="30,2 58,17 58,37 30,52 2,37 2,17"
              fill={isFilled ? '#F5C800' : 'transparent'}
              stroke={isFilled ? '#E0B600' : '#1B3F7A'}
              strokeOpacity={isFilled ? 1 : 0.3}
              strokeWidth="2"
            />
          </svg>
        );
      })}
    </div>
  );
}
