'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, CONTACT, BUSINESS_NAME } from '@/lib/constants'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    handler()
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur shadow-sm border-b border-brand-border'
          : 'bg-white border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={`${BUSINESS_NAME} - Inicio`}>
            <Image
              src="/assets/logo_horizontal.svg"
              alt={BUSINESS_NAME}
              width={180}
              height={48}
              priority
              className="h-10 w-auto md:h-12"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    ('emergency' in link && link.emergency)
                      ? 'text-brand-emergency hover:bg-brand-emergency/10'
                      : isActive
                      ? 'text-brand-primary bg-brand-primary/5'
                      : 'text-brand-text hover:text-brand-primary hover:bg-brand-primary/5'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${CONTACT.phoneUrgenciasRaw}`}
              className="hidden xl:flex items-center gap-2 text-sm text-brand-emergency font-semibold"
              aria-label="Llamar a urgencias 24 horas"
            >
              <Phone className="h-4 w-4" />
              <span>Urgencias: {CONTACT.phoneUrgencias}</span>
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-md bg-brand-accent px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-accent-dark transition-colors"
            >
              Pedir cita
            </Link>
          </div>

          <button
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-brand-text hover:bg-brand-primary/5"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 border-t border-brand-border pt-3">
            <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      ('emergency' in link && link.emergency)
                        ? 'text-brand-emergency'
                        : isActive
                        ? 'text-brand-primary bg-brand-primary/5'
                        : 'text-brand-text hover:bg-brand-primary/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="mt-3 flex flex-col gap-2 px-1">
                <a
                  href={`tel:${CONTACT.phoneUrgenciasRaw}`}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-emergency px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <Phone className="h-4 w-4" /> Urgencias 24h: {CONTACT.phoneUrgencias}
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-md bg-brand-accent px-4 py-2.5 text-sm font-semibold text-white"
                >
                  Pedir cita
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
