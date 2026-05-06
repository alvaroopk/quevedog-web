import type { Metadata } from 'next'
import { SITE_INDEXED, SITE_URL, BUSINESS_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Contacto | ${BUSINESS_NAME} — Veterinario Chamberí, Madrid`,
  description:
    'Contacta con la clínica veterinaria Quevedog en Chamberí, Madrid. Pide cita por teléfono (914 45 52 36) o formulario. Urgencias 24h: 674 303 127.',
  keywords: [
    'contacto veterinario Chamberí',
    'pedir cita veterinario Madrid',
    'clínica veterinaria Chamberí dirección',
    'veterinario Quevedo Madrid',
    'teléfono veterinario Madrid',
  ],
  openGraph: {
    title: `Contacto | ${BUSINESS_NAME} — Veterinario Chamberí, Madrid`,
    description:
      'Pide cita en la clínica veterinaria Quevedog. Calle Fernández de los Ríos, 32 — Chamberí, Madrid. Tel: 914 45 52 36. Urgencias 24h: 674 303 127.',
    url: `${SITE_URL}/contacto`,
    siteName: BUSINESS_NAME,
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contacto | ${BUSINESS_NAME}`,
    description:
      'Pide cita en la clínica veterinaria Quevedog en Chamberí, Madrid. Tel: 914 45 52 36. Urgencias 24h: 674 303 127.',
  },
  robots: SITE_INDEXED
    ? { index: true, follow: true }
    : { index: false, follow: false },
  alternates: {
    canonical: `${SITE_URL}/contacto`,
  },
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
