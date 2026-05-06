import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { articles, getArticle } from '@/lib/articles'
import { SITE_INDEXED, SITE_URL, BUSINESS_NAME } from '@/lib/constants'
import CTAFinal from '@/components/sections/CTAFinal'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return { title: 'Artículo no encontrado' }
  const canonicalUrl = `${SITE_URL}/articulos/${slug}`
  return {
    title: `${article.title} | ${BUSINESS_NAME}`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: canonicalUrl,
      siteName: BUSINESS_NAME,
      type: 'article',
      locale: 'es_ES',
      images: [{ url: article.image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
    robots: SITE_INDEXED
      ? { index: true, follow: true }
      : { index: false, follow: false },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function ArticuloPage({ params }: Props) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const others = articles.filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <>
      <article className="bg-white">
        <header className="bg-brand-bg border-b border-brand-border">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <Link
              href="/articulos"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:gap-2 transition-all mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Todos los artículos
            </Link>
            <div className="flex items-center gap-3 text-xs text-brand-muted mb-4 flex-wrap">
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-primary/10 text-brand-primary px-2.5 py-1 font-semibold">
                <Tag className="h-3 w-3" />
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formatDate(article.date)}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {article.readMinutes} min de lectura
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary leading-tight">
              {article.title}
            </h1>
            <p className="mt-4 text-lg text-brand-muted leading-relaxed">{article.excerpt}</p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              sizes="(min-width: 1024px) 56rem, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="prose prose-lg max-w-none">
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-brand-text leading-relaxed mb-4 text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      <section className="py-20 bg-brand-bg border-t border-brand-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-10">
            Otros artículos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((a) => (
              <article key={a.slug} className="rounded-2xl overflow-hidden bg-white border border-brand-border">
                <Link href={`/articulos/${a.slug}`} className="relative aspect-[16/10] block">
                  <Image src={a.image} alt={a.imageAlt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                </Link>
                <div className="p-5">
                  <p className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-2">{a.category}</p>
                  <h3 className="font-semibold text-brand-primary mb-2 leading-snug">
                    <Link href={`/articulos/${a.slug}`} className="hover:underline">
                      {a.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed line-clamp-3">{a.excerpt}</p>
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
