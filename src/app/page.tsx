import type { Metadata } from 'next'
import { SITE_INDEXED, SITE_URL, BUSINESS_NAME } from '@/lib/constants'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Emergency from '@/components/sections/Emergency'
import Gallery from '@/components/sections/Gallery'
import Equipment from '@/components/sections/Equipment'
import Testimonials from '@/components/sections/Testimonials'
import CTAFinal from '@/components/sections/CTAFinal'

export const metadata: Metadata = {
  title: `${BUSINESS_NAME} | Veterinario en Chamberí, Madrid`,
  description:
    'Clínica veterinaria en Chamberí, Madrid. Urgencias 24h, diagnóstico por imagen, cirugía y Cat Friendly Clinic Plata ISFM. Pide cita: 914 45 52 36.',
  keywords: [
    'veterinario Chamberí',
    'clínica veterinaria Madrid',
    'urgencias veterinarias 24h',
    'cat friendly clinic',
    'veterinario Quevedo',
    'veterinario Chamberí Madrid',
  ],
  openGraph: {
    title: `${BUSINESS_NAME} | Veterinario en Chamberí, Madrid`,
    description:
      'Clínica veterinaria de referencia en Chamberí, Madrid. Urgencias 24h, diagnóstico por imagen, cirugía y Cat Friendly Clinic Plata ISFM.',
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_NAME} | Veterinario en Chamberí, Madrid`,
    description:
      'Clínica veterinaria de referencia en Chamberí, Madrid. Urgencias 24h, diagnóstico por imagen, cirugía y Cat Friendly Clinic Plata ISFM.',
  },
  robots: SITE_INDEXED
    ? { index: true, follow: true }
    : { index: false, follow: false },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Emergency />
      <Gallery />
      <Equipment />
      <Testimonials />
      <CTAFinal />
    </>
  )
}
