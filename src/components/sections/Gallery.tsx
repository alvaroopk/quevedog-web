import Image from 'next/image'

const images = [
  { src: '/assets/instalaciones_01.jpg', alt: 'Sala de exploración de la clínica Quevedog', cls: 'col-span-2 row-span-2 aspect-square md:aspect-auto' },
  { src: '/assets/instalaciones_02.jpg', alt: 'Zona de consulta felina', cls: 'aspect-square' },
  { src: '/assets/instalaciones_03.jpg', alt: 'Zona de espera diferenciada para perros y gatos', cls: 'aspect-square' },
  { src: '/assets/instalaciones_04.jpg', alt: 'Sala de hospitalización con calefacción individual', cls: 'aspect-square' },
  { src: '/assets/instalaciones_05.jpg', alt: 'Detalle de instalaciones modernas de la clínica', cls: 'aspect-square' },
]

export default function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">Instalaciones</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary leading-tight">
            Espacios pensados para el bienestar de tu mascota
          </h2>
          <p className="mt-4 text-lg text-brand-muted leading-relaxed">
            Modernos, limpios y diferenciados para perros y gatos. Cada detalle diseñado para minimizar el estrés y maximizar la seguridad de tu animal.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-xl group ${img.cls}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={i === 0 ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 50vw'}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
