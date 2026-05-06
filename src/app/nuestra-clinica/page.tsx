import Image from 'next/image'
import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CTAFinal from '@/components/sections/CTAFinal'
import { Check, Cat, Microscope, HeartPulse } from 'lucide-react'
import { SITE_INDEXED, SITE_URL, BUSINESS_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Nuestra Clínica | ${BUSINESS_NAME} — Veterinario Chamberí Madrid`,
  description:
    'Conoce la clínica veterinaria Quevedog en Chamberí: equipo multidisciplinar, instalaciones diferenciadas para perros y gatos, y certificación Cat Friendly Clinic Plata ISFM.',
  keywords: [
    'veterinario Chamberí',
    'clínica veterinaria Madrid',
    'cat friendly clinic Madrid',
    'veterinaria Chamberí',
    'clínica veterinaria Chamberí',
  ],
  openGraph: {
    title: `Nuestra Clínica | ${BUSINESS_NAME} — Veterinario Chamberí Madrid`,
    description:
      'Equipo multidisciplinar, instalaciones diferenciadas para perros y gatos y certificación Cat Friendly Clinic Plata ISFM en Chamberí, Madrid.',
    url: `${SITE_URL}/nuestra-clinica`,
    siteName: BUSINESS_NAME,
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Nuestra Clínica | ${BUSINESS_NAME}`,
    description:
      'Equipo multidisciplinar, instalaciones diferenciadas para perros y gatos y certificación Cat Friendly Clinic Plata ISFM en Chamberí, Madrid.',
  },
  robots: SITE_INDEXED
    ? { index: true, follow: true }
    : { index: false, follow: false },
  alternates: {
    canonical: `${SITE_URL}/nuestra-clinica`,
  },
}

const filosofia = [
  'Equipo multidisciplinar en permanente formación',
  'Consultas separadas para perros y gatos',
  'Zona de espera felina con feromonas',
  'Atención individualizada y cercana',
]

export default function NuestraClinicaPage() {
  return (
    <>
      <PageHero
        title="Conoce la clínica que cuida a tu mascota como se merece"
        subtitle="Medicina veterinaria de alto nivel en el corazón de Chamberí. Un equipo comprometido, instalaciones de vanguardia y el trato cercano que siempre has buscado."
        image="/assets/fachada_clinica.jpg"
        imageAlt="Fachada de la Clínica Veterinaria Quevedog en Chamberí, Madrid"
        breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Nuestra Clínica' }]}
      />

      <section className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">Nuestra filosofía</p>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary leading-tight">
                Una clínica diseñada pensando en ti y en tu mascota
              </h2>
              <p className="mt-5 text-base md:text-lg text-brand-muted leading-relaxed">
                En Quevedog practicamos la medicina veterinaria de manera cercana y personal. Nos importa que tanto tú como tu mascota os sintáis cómodos desde el primer momento. Por eso cada detalle de la clínica — desde las salas de espera hasta el protocolo de consulta — ha sido pensado para reducir el estrés y maximizar la confianza.
              </p>
              <p className="mt-4 text-base md:text-lg text-brand-muted leading-relaxed">
                Somos un equipo multidisciplinar con especialistas en diagnóstico por imagen, cirugía de tejidos blandos, anestesia, hospitalización y medicina interna de pequeños animales. Trabajamos en permanente formación para estar siempre a la altura de lo que tu mascota necesita.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filosofia.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm text-brand-text font-medium">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/slide_interior_01.jpg"
                alt="Interior de la clínica Quevedog"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-brand-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">Instalaciones</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary leading-tight">
              Espacios diferenciados para perros y gatos
            </h2>
            <p className="mt-4 text-lg text-brand-muted leading-relaxed">
              Sabemos que los gatos y los perros tienen necesidades muy diferentes. Por eso en Quevedog tenemos consultas separadas y áreas de espera exclusivas para felinos: zona elevada para transportines y terapia activa con feromonas para reducir la ansiedad. Tu gato llegará más tranquilo a su consulta.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { src: '/assets/instalaciones_02.jpg', alt: 'Zona de consulta felina' },
              { src: '/assets/instalaciones_03.jpg', alt: 'Sala de espera diferenciada' },
              { src: '/assets/instalaciones_04.jpg', alt: 'Sala de hospitalización' },
              { src: '/assets/instalaciones_05.jpg', alt: 'Detalle de instalaciones' },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden rounded-xl group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/assets/slide_veterinaria_equipo.jpg"
                alt="Veterinaria en consulta atendiendo a una mascota"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">El equipo</p>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary leading-tight">
                Tu equipo veterinario en Chamberí
              </h2>
              <p className="mt-5 text-base md:text-lg text-brand-muted leading-relaxed">
                Nuestros veterinarios combinan formación especializada con pasión genuina por los animales. Especialistas en diagnóstico por imagen, cirugía de tejidos blandos, anestesia, hospitalización y medicina interna.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4">
                <div className="flex items-start gap-3 rounded-xl border border-brand-border p-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                    <HeartPulse className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-brand-primary">Medicina interna y cirugía</h3>
                    <p className="text-sm text-brand-muted">Diagnóstico, tratamientos quirúrgicos y manejo de patologías complejas con protocolos individualizados.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-brand-border p-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                    <Microscope className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-brand-primary">Diagnóstico por imagen</h3>
                    <p className="text-sm text-brand-muted">Especialistas en ecografía abdominal, ecocardiografía y radiología digital de alta definición.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-brand-border p-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                    <Cat className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-brand-primary">Medicina felina</h3>
                    <p className="text-sm text-brand-muted">Equipo formado en medicina felina con certificación Cat Friendly Clinic ISFM.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-brand-primary text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">Certificaciones</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Comprometidos con los más altos estándares
              </h2>
              <p className="mt-5 text-base md:text-lg text-white/85 leading-relaxed">
                Quevedog ha obtenido el certificado <strong>Cat Friendly Clinic nivel Plata</strong> otorgado por la International Society of Feline Medicine (ISFM). Esta distinción reconoce nuestro compromiso con el bienestar felino: protocolos específicos, instalaciones adaptadas y formación del equipo en medicina felina.
              </p>
              <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed">
                Una de las pocas clínicas de Madrid con esta acreditación.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white p-6">
              <Image
                src="/assets/certificado_cat_friendly.jpg"
                alt="Certificado Cat Friendly Clinic nivel Plata otorgado por la ISFM"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain p-6"
              />
            </div>
          </div>
        </div>
      </section>

      <CTAFinal />
    </>
  )
}
