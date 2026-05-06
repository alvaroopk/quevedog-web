import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CTAFinal from '@/components/sections/CTAFinal'
import { ArrowRight, Sparkles } from 'lucide-react'
import { SITE_INDEXED, SITE_URL, BUSINESS_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Campañas y Promociones | ${BUSINESS_NAME} — Chamberí, Madrid`,
  description:
    'Campañas veterinarias activas en Quevedog: chequeos geriátricos para mascotas mayores y prevención de leishmaniosis canina en Madrid. Pide cita ahora.',
  keywords: [
    'campaña veterinaria Madrid',
    'chequeo geriátrico perro gato',
    'prevención leishmaniosis Madrid',
    'veterinario Chamberí',
    'promoción veterinaria Madrid',
  ],
  openGraph: {
    title: `Campañas y Promociones | ${BUSINESS_NAME}`,
    description:
      'Campañas veterinarias activas: chequeos geriátricos y prevención de leishmaniosis en Clínica Quevedog, Chamberí, Madrid.',
    url: `${SITE_URL}/campanas`,
    siteName: BUSINESS_NAME,
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Campañas y Promociones | ${BUSINESS_NAME}`,
    description:
      'Campañas veterinarias activas: chequeos geriátricos y prevención de leishmaniosis en Chamberí, Madrid.',
  },
  robots: SITE_INDEXED
    ? { index: true, follow: true }
    : { index: false, follow: false },
  alternates: {
    canonical: `${SITE_URL}/campanas`,
  },
}

const campaigns = [
  {
    badge: 'Activa todo el año',
    title: 'Chequeos Geriátricos — Cuida la salud de tu mascota mayor',
    image: '/assets/chequeos_geriatricos.jpg',
    imageAlt: 'Perro mayor en revisión geriátrica veterinaria',
    body: [
      '¿Tienes controlada la salud de tu perro o gato a partir de los 7 años? Los animales mayores necesitan revisiones más frecuentes para detectar a tiempo enfermedades comunes en la vejez.',
      'Nuestros chequeos geriátricos incluyen protocolos adaptados a cada etapa: evaluación de articulaciones, aparato digestivo, sistema respiratorio, función renal, sistema nervioso y panel endocrino.',
    ],
    highlight:
      'A partir de los 7 años, los perros y gatos envejecen más rápido. Una detección precoz puede marcar la diferencia entre un tratamiento sencillo o una emergencia.',
    cta: { label: 'Pedir cita para chequeo geriátrico', href: '/contacto' },
  },
  {
    badge: 'Temporada primavera–verano',
    title: 'Campaña Prevención de Leishmaniosis',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80',
    imageAlt: 'Perro paseando al aire libre',
    body: [
      'La leishmaniosis es una enfermedad grave transmitida por mosquitos que puede afectar gravemente a tu perro. La prevención es la única estrategia eficaz: vacunación, productos repelentes y controles periódicos.',
      'Consulta con nuestro equipo el protocolo más adecuado para tu mascota según su zona de riesgo y estilo de vida.',
    ],
    cta: { label: 'Consultar campaña de leishmaniosis', href: '/contacto' },
  },
]

export default function CampanasPage() {
  return (
    <>
      <PageHero
        variant="flat"
        title="Campañas y promociones de Clínica Quevedog"
        subtitle="Aprovecha nuestras campañas estacionales para cuidar la salud de tu mascota con las mejores condiciones."
        breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Campañas' }]}
      />

      <section className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          {campaigns.map((c, idx) => (
            <article
              key={c.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-brand-bg rounded-3xl overflow-hidden"
            >
              <div className={`relative aspect-[4/3] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={c.image}
                  alt={c.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-accent/15 text-brand-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Sparkles className="h-3 w-3" />
                  {c.badge}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-primary leading-tight">
                  {c.title}
                </h2>
                <div className="mt-4 space-y-3">
                  {c.body.map((p, i) => (
                    <p key={i} className="text-brand-muted leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                {c.highlight && (
                  <blockquote className="mt-5 border-l-4 border-brand-accent pl-4 italic text-brand-text">
                    {c.highlight}
                  </blockquote>
                )}
                <Link
                  href={c.cta.href}
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-primary px-5 py-3 text-sm font-semibold text-white hover:bg-brand-primary-dark transition-colors"
                >
                  {c.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTAFinal />
    </>
  )
}
