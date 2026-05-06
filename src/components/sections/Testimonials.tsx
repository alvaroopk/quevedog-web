import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'María G.',
    location: 'Chamberí',
    text: 'Llevamos años yendo a Quevedog con nuestro labrador. El trato es excelente, los veterinarios se explican muy bien y el equipamiento es de primer nivel. 100% recomendable.',
  },
  {
    name: 'Laura M.',
    location: 'Argüelles',
    text: 'Tuve una urgencia de madrugada y el teléfono de urgencias funcionó perfectamente. Me orientaron, me calmaron y al día siguiente mi gato estaba operado. Eternamente agradecida.',
  },
  {
    name: 'Carlos R.',
    location: 'Malasaña',
    text: 'Lo que más nos gusta es que tienen consultas separadas para gatos. Nuestro Miso llega sin el estrés de otros sitios. El equipo es fantástico.',
  },
]

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary font-bold">
      {initials}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">Testimonios</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary leading-tight">
            Lo que dicen los propietarios de Quevedog
          </h2>
          <p className="mt-4 text-lg text-brand-muted leading-relaxed">
            Cientos de familias de Chamberí confían en nosotros para el cuidado de sus mascotas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl border border-brand-border bg-brand-bg p-6 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-3" aria-label="5 estrellas sobre 5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-brand-text leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <Avatar name={t.name} />
                <div>
                  <p className="font-semibold text-brand-text text-sm">{t.name}</p>
                  <p className="text-xs text-brand-muted">{t.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
