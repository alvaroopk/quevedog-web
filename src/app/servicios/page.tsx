import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CTAFinal from '@/components/sections/CTAFinal'
import {
  HeartPulse,
  Shield,
  ScanLine,
  TestTube,
  Stethoscope,
  BedDouble,
  Smile,
  Apple,
  Phone,
  Pill,
  UserCog,
} from 'lucide-react'
import { CONTACT, SITE_INDEXED, SITE_URL, BUSINESS_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Servicios Veterinarios en Chamberí Madrid | ${BUSINESS_NAME}`,
  description:
    'Servicios veterinarios completos en Chamberí, Madrid: medicina interna, cirugía, diagnóstico por imagen, hospitalización, urgencias 24h y especialidades. Llama ya.',
  keywords: [
    'servicios veterinarios Madrid',
    'cirugía veterinaria Chamberí',
    'diagnóstico por imagen veterinaria Madrid',
    'urgencias veterinarias 24h',
    'hospitalización veterinaria Madrid',
    'veterinario Chamberí Madrid',
  ],
  openGraph: {
    title: `Servicios Veterinarios en Chamberí Madrid | ${BUSINESS_NAME}`,
    description:
      'Medicina interna, cirugía, diagnóstico por imagen, hospitalización y urgencias 24h en Chamberí, Madrid. Tecnología de referencia, trato personalizado.',
    url: `${SITE_URL}/servicios`,
    siteName: BUSINESS_NAME,
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Servicios Veterinarios en Chamberí Madrid | ${BUSINESS_NAME}`,
    description:
      'Medicina interna, cirugía, diagnóstico por imagen, hospitalización y urgencias 24h en Chamberí, Madrid.',
  },
  robots: SITE_INDEXED
    ? { index: true, follow: true }
    : { index: false, follow: false },
  alternates: {
    canonical: `${SITE_URL}/servicios`,
  },
}

const services = [
  {
    icon: HeartPulse,
    title: 'Medicina Interna',
    short: 'Diagnóstico y tratamiento de enfermedades en órganos internos mediante técnicas no invasivas.',
    long: 'Nuestro servicio de medicina interna aborda problemas cardíacos, digestivos, renales, hepáticos y endocrinos. Contamos con electrocardiógrafo, medidor de presión arterial y tests rápidos de diagnóstico para que los resultados lleguen cuanto antes.',
  },
  {
    icon: Shield,
    title: 'Medicina Preventiva',
    short: 'Mantén sana a tu mascota con programas adaptados a cada etapa de su vida.',
    long: 'Vacunaciones, desparasitaciones interna y externa, microchip, pasaporte europeo para viajes, programa de educación temprana para cachorros, programa bucodental preventivo, nutrición adaptada y revisiones periódicas. Chequeos geriátricos específicos para mascotas mayores.',
  },
  {
    icon: ScanLine,
    title: 'Diagnóstico por Imagen',
    short: 'Diagnóstico preciso y rápido gracias a equipamiento de última generación.',
    long: 'Disponemos de radiografía digital de alta definición y ecógrafo General Electric LOGIQ F6 con Doppler — el mismo equipamiento que encontrarás en hospitales veterinarios de referencia. Detectamos problemas internos con máxima precisión sin necesidad de cirugías exploratorias.',
    image: '/assets/ecografo.jpg',
  },
  {
    icon: TestTube,
    title: 'Análisis Clínicos',
    short: 'Resultados en minutos gracias a nuestro laboratorio propio.',
    long: 'Nuestro laboratorio in-house realiza hemogramas completos, bioquímicas, urianálisis y análisis hormonales (T4, TSH, cortisol). No dependemos de laboratorios externos: los resultados están disponibles durante la propia consulta, lo que acelera el diagnóstico y el inicio del tratamiento.',
  },
  {
    icon: Stethoscope,
    title: 'Cirugía y Anestesia',
    short: 'Quirófano equipado con la tecnología más avanzada para intervenciones seguras.',
    long: 'Nuestro quirófano cuenta con sistema Ligasure (sellado de vasos sin suturas), ventilación mecánica y sistema autónomo de alimentación intraoperatoria. Un protocolo anestésico individualizado para cada paciente garantiza la máxima seguridad durante toda la intervención.',
    image: '/assets/quirofano.jpg',
  },
  {
    icon: BedDouble,
    title: 'Hospitalización',
    short: 'Cuidados continuos cuando tu mascota necesita quedarse con nosotros.',
    long: 'Nuestras instalaciones de hospitalización cuentan con calefacción individual por jaula, oxigenoterapia y acceso al Banco de Sangre Animal para transfusiones. Espacios separados para perros y gatos para minimizar el estrés durante la recuperación.',
  },
  {
    icon: Smile,
    title: 'Odontología',
    short: 'Salud bucodental para una mascota feliz y sin dolor.',
    long: 'La enfermedad dental es una de las patologías más frecuentes y dolorosas en perros y gatos, y muchas veces pasa desapercibida. Realizamos limpiezas dentales ultrasónicas bajo anestesia y extracciones dentarias complicadas con los protocolos más seguros.',
  },
  {
    icon: Apple,
    title: 'Nutrición',
    short: 'Alimentación adaptada a cada mascota, etapa y condición médica.',
    long: 'Diseñamos planes nutricionales personalizados para el control de peso, enfermedades crónicas (insuficiencia renal, diabetes, alergias alimentarias) y necesidades específicas por raza y edad.',
  },
  {
    icon: Phone,
    title: 'Urgencias 24h',
    short: 'Siempre disponibles cuando más nos necesitas.',
    long: `Nuestro servicio de urgencias telefónico está operativo las 24 horas, los 365 días del año. Nuestro equipo evaluará la severidad de la situación y te guiará en los pasos a seguir, incluyendo hospitalización presencial urgente, cirugía de emergencia o derivación a hospitales especializados asociados. Teléfono urgencias: ${CONTACT.phoneUrgencias}.`,
    accent: true,
  },
  {
    icon: Pill,
    title: 'Tratamientos Especializados',
    short: 'Tratamientos avanzados para casos complejos.',
    long: 'Acceso a probióticos veterinarios de última generación, tratamientos quimioterápicos y fórmulas magistrales preparadas específicamente para tu mascota.',
  },
  {
    icon: UserCog,
    title: 'Especialidades por derivación',
    short: 'Red de especialistas para cuando tu mascota necesita atención específica.',
    long: 'Contamos con acceso a especialistas en Traumatología, Neurología, Dermatología, Oftalmología, Oncología, Cardiología, Etología, Adiestramiento Canino y Endoscopia. Coordinamos la derivación y el seguimiento de cada caso.',
  },
]

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        title="Servicios veterinarios en Chamberí, Madrid"
        subtitle="Todo lo que necesita tu mascota en un solo lugar. Diagnóstico, prevención, cirugía, hospitalización y especialidades — con tecnología de referencia y trato personalizado."
        image="/assets/slide_perro.jpg"
        imageAlt="Perro siendo atendido en consulta veterinaria"
        breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios' }]}
      />

      <section className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, short, long, image, accent }) => (
              <article
                key={title}
                className={`rounded-2xl border p-6 flex flex-col ${
                  accent
                    ? 'border-brand-emergency/30 bg-brand-emergency/5'
                    : 'border-brand-border bg-white hover:border-brand-primary/30 hover:shadow-md transition-all'
                }`}
              >
                {image && (
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-4 -mx-2">
                    <Image src={image} alt={title} fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover" />
                  </div>
                )}
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4 ${
                    accent ? 'bg-brand-emergency text-white' : 'bg-brand-primary/10 text-brand-primary'
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-brand-primary mb-2">{title}</h2>
                <p className="text-sm font-medium text-brand-text mb-3">{short}</p>
                <p className="text-sm text-brand-muted leading-relaxed">{long}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-brand-bg p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-primary">¿Tienes dudas sobre algún servicio?</h2>
            <p className="mt-3 text-brand-muted max-w-2xl mx-auto">
              Llámanos y te atenderemos personalmente. Si lo prefieres, escríbenos por el formulario y te responderemos en menos de 24 horas.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-primary px-5 py-3 text-sm font-semibold text-white hover:bg-brand-primary-dark transition-colors"
              >
                <Phone className="h-4 w-4" />
                Llamar: {CONTACT.phone}
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-accent px-5 py-3 text-sm font-semibold text-white hover:bg-brand-accent-dark transition-colors"
              >
                Pedir cita
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTAFinal />
    </>
  )
}
