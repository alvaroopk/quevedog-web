import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CTAFinal from '@/components/sections/CTAFinal'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import { articles } from '@/lib/articles'
import { SITE_INDEXED, SITE_URL, BUSINESS_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Artículos y Consejos Veterinarios | ${BUSINESS_NAME} — Madrid`,
  description:
    'Blog veterinario de Quevedog en Madrid: guías sobre salud, nutrición, prevención de leishmaniosis, urgencias y viajes con mascotas. Escritos por nuestro equipo.',
  keywords: [
    'artículos veterinarios Madrid',
    'consejos veterinario Chamberí',
    'blog veterinaria Madrid',
    'salud mascotas Madrid',
    'leishmaniosis perros Madrid',
    'urgencias veterinarias Madrid verano',
  ],
  openGraph: {
    title: `Artículos y Consejos Veterinarios | ${BUSINESS_NAME}`,
    description:
      'Blog veterinario de Quevedog: guías sobre salud, nutrición, prevención y viajes con mascotas, escritas por nuestro equipo en Chamberí, Madrid.',
    url: `${SITE_URL}/articulos`,
    siteName: BUSINESS_NAME,
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Artículos y Consejos Veterinarios | ${BUSINESS_NAME}`,
    description:
      'Blog veterinario de Quevedog: guías sobre salud, nutrición, prevención y viajes con mascotas en Madrid.',
  },
  robots: SITE_INDEXED
    ? { index: true, follow: true }
    : { index: false, follow: false },
  alternates: {
    canonical: `${SITE_URL}/articulos`,
  },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function ArticulosPage() {
  return (
    <>
      <PageHero
        title="Artículos y consejos veterinarios"
        subtitle="El equipo de Clínica Quevedog comparte conocimiento para que puedas cuidar mejor de tu mascota."
        image="/assets/slide_perro.jpg"
        imageAlt="Perro siendo atendido en consulta"
        breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Artículos' }]}
      />

      <section className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <article
                key={a.slug}
                className="group rounded-2xl overflow-hidden border border-brand-border bg-white hover:shadow-lg transition-all flex flex-col"
              >
                <Link href={`/articulos/${a.slug}`} className="relative aspect-[16/10] block overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-brand-muted mb-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-primary/10 text-brand-primary px-2.5 py-1 font-semibold">
                      <Tag className="h-3 w-3" />
                      {a.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(a.date)}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-brand-primary leading-snug mb-2">
                    <Link href={`/articulos/${a.slug}`} className="hover:underline">
                      {a.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-brand-muted leading-relaxed flex-1">{a.excerpt}</p>
                  <Link
                    href={`/articulos/${a.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:gap-2 transition-all"
                  >
                    Leer más <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTAFinal />
    </>
  )
}
