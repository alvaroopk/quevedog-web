import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react'
import { CONTACT, SOCIAL, BUSINESS_NAME, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-primary text-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/assets/logo_vertical.svg"
                alt={BUSINESS_NAME}
                width={140}
                height={140}
                className="h-24 w-auto bg-white rounded-md p-2"
              />
            </Link>
            <p className="text-sm text-white/80 leading-relaxed">
              Medicina veterinaria de referencia en el corazón de Chamberí. Tecnología de hospital con el trato cercano de tu clínica de barrio.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-brand-accent animate-pulse" aria-hidden />
              Cat Friendly Clinic · Plata ISFM
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" aria-hidden />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" aria-hidden />
                <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-white">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-brand-emergency" aria-hidden />
                <a href={`tel:${CONTACT.phoneUrgenciasRaw}`} className="hover:text-white font-semibold">
                  Urgencias 24h: {CONTACT.phoneUrgencias}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" aria-hidden />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white break-all">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" aria-hidden />
                <span>{CONTACT.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Síguenos</h3>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20 transition-colors"
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
                Facebook
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20 transition-colors"
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
                Instagram
              </a>
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mt-6 mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/politica-privacidad" className="text-white/80 hover:text-white transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="text-white/80 hover:text-white transition-colors">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/60">
          <p>
            © {year} {BUSINESS_NAME}. Todos los derechos reservados.
          </p>
          <p>Hecho con cariño para perros y gatos de Chamberí.</p>
        </div>
      </div>
    </footer>
  )
}
