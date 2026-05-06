import Link from 'next/link'
import { Phone, Calendar } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export default function CTAFinal() {
  return (
    <section className="bg-brand-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-3xl mx-auto">
          ¿Listo para darle a tu mascota la atención que merece?
        </h2>
        <p className="mt-4 text-lg text-white/85 max-w-2xl mx-auto">
          Pide cita ahora o llámanos. Estamos en {CONTACT.addressShort}.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-accent px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-brand-accent-dark transition-colors"
          >
            <Calendar className="h-5 w-5" />
            Pedir cita
          </Link>
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-brand-primary px-6 py-3.5 text-base font-semibold shadow-lg hover:bg-white/90 transition-colors"
          >
            <Phone className="h-5 w-5" />
            Llamar: {CONTACT.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
