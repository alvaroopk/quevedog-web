import Link from 'next/link'
import {
  Shield,
  ScanLine,
  Stethoscope,
  TestTube,
  BedDouble,
  Phone,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Medicina Preventiva',
    description: 'Vacunas, desparasitación, microchip y controles para una vida larga y sana.',
  },
  {
    icon: ScanLine,
    title: 'Diagnóstico por Imagen',
    description: 'Radiografía digital HD y ecógrafo GE LOGIQ F6 con Doppler: diagnóstico preciso en el acto.',
  },
  {
    icon: Stethoscope,
    title: 'Cirugía y Anestesia',
    description: 'Quirófano con Ligasure y ventilación mecánica para intervenciones seguras.',
  },
  {
    icon: TestTube,
    title: 'Análisis Clínicos',
    description: 'Laboratorio propio: resultados en minutos, no en días.',
  },
  {
    icon: BedDouble,
    title: 'Hospitalización',
    description: 'Áreas separadas para perros y gatos con calefacción individual y oxigenoterapia.',
  },
  {
    icon: Phone,
    title: 'Urgencias 24h',
    description: 'Teléfono de emergencias disponible a cualquier hora, cualquier día del año.',
    accent: true,
  },
]

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">Servicios</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary leading-tight">
            Todo lo que necesita tu mascota, bajo un mismo techo
          </h2>
          <p className="mt-4 text-lg text-brand-muted leading-relaxed">
            Desde la revisión anual hasta la cirugía especializada. En Quevedog encontrarás el nivel técnico de un hospital veterinario con el trato personalizado de tu clínica de siempre.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, description, accent }) => (
            <article
              key={title}
              className={`rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${
                accent
                  ? 'border-brand-emergency/20 bg-brand-emergency/5 hover:border-brand-emergency/30'
                  : 'border-brand-border bg-white hover:border-brand-primary/30'
              }`}
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4 ${
                  accent ? 'bg-brand-emergency text-white' : 'bg-brand-primary/10 text-brand-primary'
                }`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-brand-primary mb-2">{title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all"
          >
            Ver todos los servicios
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
