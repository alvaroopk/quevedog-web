import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, AlertTriangle, ClipboardList, Ambulance, Hospital, Activity } from 'lucide-react'
import { CONTACT, SITE_INDEXED, SITE_URL, BUSINESS_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Urgencias Veterinarias 24h en Madrid | ${BUSINESS_NAME}`,
  description:
    'Urgencias veterinarias 24 horas, 365 días al año en Chamberí, Madrid. Llama al 674 303 127: hospitalización urgente, cirugía de emergencia y derivación inmediata.',
  keywords: [
    'urgencias veterinarias Madrid',
    'urgencias veterinarias 24h',
    'veterinario urgencias Chamberí',
    'clínica veterinaria urgencias Madrid',
    'emergencia veterinaria Madrid',
  ],
  openGraph: {
    title: `Urgencias Veterinarias 24h en Madrid | ${BUSINESS_NAME}`,
    description:
      'Servicio de urgencias veterinarias 24h, 365 días al año. Llama al 674 303 127: hospitalización urgente, cirugía de emergencia y derivación en Chamberí, Madrid.',
    url: `${SITE_URL}/urgencias`,
    siteName: BUSINESS_NAME,
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Urgencias Veterinarias 24h en Madrid | ${BUSINESS_NAME}`,
    description:
      'Urgencias veterinarias 24h, 365 días al año en Chamberí, Madrid. Llama al 674 303 127.',
  },
  robots: SITE_INDEXED
    ? { index: true, follow: true }
    : { index: false, follow: false },
  alternates: {
    canonical: `${SITE_URL}/urgencias`,
  },
}

const protocolo = [
  {
    title: 'Llama al 674 303 127',
    desc: 'Nuestro equipo responde las 24 horas, los 365 días del año.',
  },
  {
    title: 'Evaluación inmediata',
    desc: 'Te hacemos las preguntas clave para valorar la gravedad de la situación.',
  },
  {
    title: 'Orientación y plan de acción',
    desc: 'Te decimos exactamente qué hacer: si debes venir, qué medidas tomar en casa o si es necesaria derivación urgente.',
  },
  {
    title: 'Atención presencial si es necesario',
    desc: 'Hospitalización de urgencia, cirugías de emergencia o coordinación con hospitales especializados.',
  },
]

const senales = [
  'Dificultad respiratoria o respiración muy acelerada',
  'Convulsiones o pérdida de conciencia',
  'Traumatismo (atropello, caída, golpe)',
  'Sangrado que no se detiene',
  'Incapacidad para orinar (especialmente en gatos)',
  'Vómitos o diarrea con sangre persistentes',
  'Abdomen muy hinchado y/o con dolor',
  'Intoxicación sospechada (ingesta de tóxicos)',
  'Parálisis o debilidad repentina de extremidades',
  'Temperatura muy alta (golpe de calor)',
]

const capacidades = [
  { icon: Hospital, label: 'Hospitalización urgente' },
  { icon: Ambulance, label: 'Cirugía de emergencia' },
  { icon: Activity, label: 'Oxigenoterapia' },
  { icon: ClipboardList, label: 'Banco de sangre animal' },
]

const faqs = [
  {
    q: '¿Funciona el servicio de urgencias todos los días del año, incluidos festivos?',
    a: 'Sí, el teléfono de urgencias 674 303 127 está operativo las 24 horas, los 365 días del año, incluidos festivos y noches.',
  },
  {
    q: '¿Puedo llevar a mi mascota directamente sin llamar antes?',
    a: 'Te recomendamos llamar primero al teléfono de urgencias para que nuestro equipo evalúe la situación y te prepare la mejor asistencia posible. En situaciones de extrema urgencia, ven directamente.',
  },
  {
    q: '¿Atienden urgencias de todas las especies?',
    a: 'Nos especializamos en pequeños animales: perros y gatos.',
  },
]

export default function UrgenciasPage() {
  return (
    <>
      <section className="bg-brand-emergency text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <nav aria-label="Migas de pan" className="mb-6 text-sm text-white/80">
            <ol className="flex items-center flex-wrap gap-1">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li>›</li>
              <li>Urgencias 24h</li>
            </ol>
          </nav>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-5">
            <AlertTriangle className="h-3.5 w-3.5" />
            Servicio activo 24/7 · 365 días
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl">
            Urgencias veterinarias — disponibles ahora mismo
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
            Cuando tu mascota necesita atención urgente, cada minuto cuenta. Llama ahora a nuestro teléfono de urgencias y nuestro equipo te atenderá inmediatamente.
          </p>

          <div className="mt-10 max-w-2xl bg-white/10 backdrop-blur rounded-2xl p-6 md:p-8 border border-white/20">
            <p className="text-sm uppercase tracking-wider text-white/85 font-semibold mb-2">Teléfono urgencias 24h</p>
            <a
              href={`tel:${CONTACT.phoneUrgenciasRaw}`}
              className="block text-5xl md:text-6xl font-extrabold tracking-tight hover:text-white/90"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {CONTACT.phoneUrgencias}
            </a>
            <a
              href={`tel:${CONTACT.phoneUrgenciasRaw}`}
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-white text-brand-emergency px-6 py-3.5 text-base font-semibold shadow-lg hover:bg-white/90 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Llamar ahora
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">Cómo funciona</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary leading-tight">
              Nuestro protocolo de urgencias paso a paso
            </h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {protocolo.map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl border border-brand-border bg-white p-6 flex gap-4"
              >
                <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-brand-primary text-lg mb-1">{step.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-brand-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-emergency mb-3">Señales de alerta</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary leading-tight">
              ¿Cuándo llamar por urgencias?
            </h2>
            <p className="mt-4 text-lg text-brand-muted leading-relaxed">
              Si observas alguno de estos síntomas en tu mascota, no esperes a la consulta habitual. Llama al servicio de urgencias ahora.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {senales.map((s) => (
              <li
                key={s}
                className="flex items-start gap-3 rounded-xl bg-white border border-brand-border p-4"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-emergency/10 text-brand-emergency">
                  <AlertTriangle className="h-4 w-4" />
                </span>
                <span className="text-brand-text">{s}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <a
              href={`tel:${CONTACT.phoneUrgenciasRaw}`}
              className="inline-flex items-center gap-2 rounded-md bg-brand-emergency px-7 py-4 text-base font-semibold text-white shadow-lg hover:bg-brand-emergency-dark transition-colors"
            >
              <Phone className="h-5 w-5" />
              Llamar urgencias: {CONTACT.phoneUrgencias}
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">Capacidades</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary leading-tight">
              Lo que podemos hacer por tu mascota en una emergencia
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {capacidades.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-brand-border p-5 text-center"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-3">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="font-semibold text-brand-primary">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-brand-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-8 text-center">
            Preguntas frecuentes
          </h2>
          <dl className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-xl bg-white border border-brand-border p-6">
                <dt className="font-semibold text-brand-primary mb-2">{f.q}</dt>
                <dd className="text-brand-muted leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 text-center text-sm text-brand-muted">
            <p>
              Consultas y citas:{' '}
              <a className="font-semibold text-brand-primary hover:underline" href={`tel:${CONTACT.phoneRaw}`}>
                {CONTACT.phone}
              </a>
            </p>
            <p className="mt-1">
              Urgencias 24h:{' '}
              <a className="font-semibold text-brand-emergency hover:underline" href={`tel:${CONTACT.phoneUrgenciasRaw}`}>
                {CONTACT.phoneUrgencias}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
