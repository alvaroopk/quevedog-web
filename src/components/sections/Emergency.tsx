import { Phone, AlertCircle } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export default function Emergency() {
  return (
    <section className="bg-brand-emergency text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
              <AlertCircle className="h-3.5 w-3.5" />
              Servicio 24/7
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              ¿Urgencia con tu mascota? Estamos disponibles ahora mismo
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/90 leading-relaxed">
              No esperes. Si tu perro o gato necesita atención urgente, llama ahora. Nuestro equipo evaluará la situación y te guiará paso a paso — las 24 horas, los 365 días del año.
            </p>
            <p className="mt-3 text-sm text-white/80">
              Servicio telefónico de urgencias · Hospitalización urgente · Cirugía de emergencia · Derivación a hospitales asociados
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm uppercase tracking-wider text-white/80 font-semibold mb-2">
              Teléfono urgencias
            </p>
            <a
              href={`tel:${CONTACT.phoneUrgenciasRaw}`}
              className="block text-5xl md:text-6xl font-extrabold tracking-tight hover:text-white/90 transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {CONTACT.phoneUrgencias}
            </a>
            <a
              href={`tel:${CONTACT.phoneUrgenciasRaw}`}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-white text-brand-emergency px-6 py-3.5 text-base font-semibold shadow-lg hover:bg-white/90 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
