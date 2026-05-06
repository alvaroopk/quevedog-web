import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import DemoBanner from '@/components/DemoBanner'
import WhatsAppButton from '@/components/WhatsAppButton'
import { LocalBusinessJsonLd } from '@/components/seo/JsonLd'
import { SITE_INDEXED, BUSINESS_NAME, SITE_URL } from '@/lib/constants'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_NAME} — Veterinario en Chamberí, Madrid`,
    template: `%s | ${BUSINESS_NAME} — Chamberí, Madrid`,
  },
  description:
    'Clínica veterinaria de referencia en Chamberí (Madrid). Medicina interna, cirugía, diagnóstico por imagen y urgencias 24h. Cat Friendly Clinic nivel Plata.',
  keywords: [
    'veterinario Chamberí',
    'clínica veterinaria Madrid',
    'urgencias veterinarias 24h',
    'cat friendly clinic',
    'ecografía veterinaria',
    'cirugía veterinaria Madrid',
  ],
  authors: [{ name: BUSINESS_NAME }],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: BUSINESS_NAME,
    url: SITE_URL,
    title: `${BUSINESS_NAME} — Veterinario en Chamberí, Madrid`,
    description:
      'Medicina veterinaria de referencia en Chamberí: cirugía, diagnóstico por imagen y urgencias 24h. Cat Friendly Clinic Plata.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_NAME} — Veterinario en Chamberí, Madrid`,
    description:
      'Medicina veterinaria de referencia en Chamberí: cirugía, diagnóstico por imagen y urgencias 24h. Cat Friendly Clinic Plata.',
  },
  robots: SITE_INDEXED
    ? { index: true, follow: true }
    : { index: false, follow: false },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-text">
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <DemoBanner />
      </body>
    </html>
  )
}
