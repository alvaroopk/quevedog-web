import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

const points = [
  'Equipo multidisciplinar en permanente formación',
  'Instalaciones diferenciadas para perros y gatos',
  'Certificación Cat Friendly Clinic Plata — ISFM',
]

export default function About() {
  return (
    <section className="py-20 md:py-28 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/slide_interior_01.jpg"
              alt="Interior de la clínica Quevedog"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">Sobre la clínica</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary leading-tight">
              Medicina veterinaria que va más allá de la consulta
            </h2>
            <p className="mt-4 text-base md:text-lg text-brand-muted leading-relaxed">
              En Quevedog creemos que cada mascota merece atención individualizada. Por eso hemos construido un equipo multidisciplinar con especialistas en diagnóstico por imagen, cirugía, medicina interna y hospitalización — siempre en formación continua para ofrecerte lo mejor.
            </p>
            <p className="mt-4 text-base md:text-lg text-brand-muted leading-relaxed">
              Nuestras instalaciones han sido diseñadas pensando en el bienestar animal: consultas separadas para perros y gatos, zona de espera felina con altura y terapia con feromonas, y equipamiento de vanguardia que habitualmente solo encontrarás en hospitales universitarios.
            </p>

            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-brand-text font-medium">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/nuestra-clinica"
                className="inline-flex items-center gap-2 rounded-md bg-brand-primary px-5 py-3 text-sm font-semibold text-white hover:bg-brand-primary-dark transition-colors"
              >
                Conoce nuestra clínica
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
