import Image from 'next/image'
import Link from 'next/link'
import { Phone, Calendar, Cat } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative isolate min-h-[75vh] md:min-h-[90vh] flex items-center overflow-hidden">
      <Image
        src="/assets/slide_veterinaria_equipo.jpg"
        alt="Equipo veterinario de Quevedog atendiendo a una mascota en consulta"
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-primary/85 via-brand-primary/70 to-brand-primary/40" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="max-w-3xl text-white">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/20 mb-6">
            <span className="h-2 w-2 rounded-full bg-brand-accent animate-pulse" aria-hidden />
            Chamberí · Madrid
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Tu veterinario de confianza en Chamberí
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
            Medicina veterinaria de alta especialización con el trato cercano que merece tu mascota. Tecnología de vanguardia en el corazón de Madrid.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-accent px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-brand-accent-dark transition-colors"
            >
              <Calendar className="h-5 w-5" />
              Pedir cita
            </Link>
            <a
              href={`tel:${CONTACT.phoneUrgenciasRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-emergency px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-brand-emergency-dark transition-colors"
            >
              <Phone className="h-5 w-5" />
              Urgencias 24h · {CONTACT.phoneUrgencias}
            </a>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/95 text-brand-primary px-4 py-2 text-sm font-semibold shadow-md">
            <Cat className="h-4 w-4 text-brand-accent" />
            Cat Friendly Clinic · Nivel Plata ISFM
          </div>
        </div>
      </div>
    </section>
  )
}
