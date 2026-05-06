import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type Crumb = { label: string; href?: string }

interface Props {
  title: string
  subtitle?: string
  image?: string
  imageAlt?: string
  breadcrumbs?: Crumb[]
  variant?: 'image' | 'flat' | 'emergency'
}

export default function PageHero({
  title,
  subtitle,
  image,
  imageAlt = '',
  breadcrumbs,
  variant = 'image',
}: Props) {
  if (variant === 'emergency') {
    return (
      <section className="relative bg-brand-emergency text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          {breadcrumbs && (
            <nav aria-label="Migas de pan" className="mb-6 text-sm text-white/80">
              <ol className="flex items-center flex-wrap gap-1">
                {breadcrumbs.map((c, i) => (
                  <li key={i} className="flex items-center gap-1">
                    {c.href ? (
                      <Link href={c.href} className="hover:text-white">
                        {c.label}
                      </Link>
                    ) : (
                      <span>{c.label}</span>
                    )}
                    {i < breadcrumbs.length - 1 && <ChevronRight className="h-3.5 w-3.5" />}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    )
  }

  if (variant === 'flat') {
    return (
      <section className="bg-brand-bg border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          {breadcrumbs && (
            <nav aria-label="Migas de pan" className="mb-4 text-sm text-brand-muted">
              <ol className="flex items-center flex-wrap gap-1">
                {breadcrumbs.map((c, i) => (
                  <li key={i} className="flex items-center gap-1">
                    {c.href ? (
                      <Link href={c.href} className="hover:text-brand-primary">
                        {c.label}
                      </Link>
                    ) : (
                      <span>{c.label}</span>
                    )}
                    {i < breadcrumbs.length - 1 && <ChevronRight className="h-3.5 w-3.5" />}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-brand-primary">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg md:text-xl text-brand-muted max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className="relative isolate min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden">
      {image && (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover -z-10"
        />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-primary/90 via-brand-primary/70 to-brand-primary/40" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full text-white">
        {breadcrumbs && (
          <nav aria-label="Migas de pan" className="mb-4 text-sm text-white/80">
            <ol className="flex items-center flex-wrap gap-1">
              {breadcrumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span>{c.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <ChevronRight className="h-3.5 w-3.5" />}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
