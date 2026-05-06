'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, AlertTriangle, Send, CheckCircle } from 'lucide-react'
import { CONTACT, BUSINESS_NAME } from '@/lib/constants'

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    await new Promise((r) => setTimeout(r, 800))
    setSending(false)
    setSubmitted(true)
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-primary text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Migas de pan" className="mb-6 text-sm text-white/70">
            <ol className="flex items-center flex-wrap gap-1">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li>›</li>
              <li>Contacto</li>
            </ol>
          </nav>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            Contacta con {BUSINESS_NAME}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Estamos en Chamberí, Madrid. Pide cita por teléfono o mediante el formulario
            y te confirmaremos en menos de 24 horas.
          </p>
        </div>
      </section>

      {/* Datos + Formulario */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Datos de contacto */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-primary mb-8">
                Cómo encontrarnos
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="shrink-0 rounded-full bg-brand-primary/10 p-3">
                    <Phone className="h-5 w-5 text-brand-primary" aria-hidden />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-text mb-1">Consultas</p>
                    <a href={`tel:${CONTACT.phoneRaw}`} className="text-brand-primary hover:underline text-lg font-bold">
                      {CONTACT.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="shrink-0 rounded-full bg-brand-emergency/10 p-3">
                    <AlertTriangle className="h-5 w-5 text-brand-emergency" aria-hidden />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-text mb-1 flex items-center gap-2">
                      Urgencias
                      <span className="bg-brand-emergency text-white text-xs px-2 py-0.5 rounded-full font-bold">24h</span>
                    </p>
                    <a href={`tel:${CONTACT.phoneUrgenciasRaw}`} className="text-brand-emergency hover:underline text-lg font-bold">
                      {CONTACT.phoneUrgencias}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="shrink-0 rounded-full bg-brand-primary/10 p-3">
                    <Mail className="h-5 w-5 text-brand-primary" aria-hidden />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-text mb-1">Email</p>
                    <a href={`mailto:${CONTACT.email}`} className="text-brand-primary hover:underline">
                      {CONTACT.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="shrink-0 rounded-full bg-brand-primary/10 p-3">
                    <MapPin className="h-5 w-5 text-brand-primary" aria-hidden />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-text mb-1">Dirección</p>
                    <p className="text-brand-text/80">{CONTACT.address}</p>
                    <p className="text-sm text-brand-text/60 mt-1">
                      A 5 min de Metro Quevedo (L2) · Metro Ríos Rosas (L1) · Bus 2, 16, 61, 202
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="shrink-0 rounded-full bg-brand-primary/10 p-3">
                    <Clock className="h-5 w-5 text-brand-primary" aria-hidden />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-text mb-1">Horario</p>
                    <p className="text-brand-text/80">{CONTACT.hours}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Formulario */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-primary mb-8">
                Envíanos un mensaje
              </h2>
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-16 text-center">
                  <CheckCircle className="h-16 w-16 text-brand-secondary" aria-hidden />
                  <p className="text-xl font-semibold text-brand-primary">¡Mensaje enviado!</p>
                  <p className="text-brand-text/70">
                    Gracias por contactar con Quevedog. Te responderemos en menos de 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-brand-text mb-1">
                        Nombre <span className="text-brand-emergency">*</span>
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-1">
                        Email <span className="text-brand-emergency">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-brand-text mb-1">
                        Teléfono
                      </label>
                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        placeholder="600 000 000"
                      />
                    </div>
                    <div>
                      <label htmlFor="asunto" className="block text-sm font-medium text-brand-text mb-1">
                        Asunto
                      </label>
                      <select
                        id="asunto"
                        name="asunto"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      >
                        <option value="cita">Pedir cita</option>
                        <option value="consulta">Consulta</option>
                        <option value="urgencia">Urgencia</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-brand-text mb-1">
                      Mensaje <span className="text-brand-emergency">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none"
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <input
                      id="lopd"
                      name="lopd"
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
                    />
                    <label htmlFor="lopd" className="text-sm text-brand-text/70">
                      He leído y acepto la{' '}
                      <Link href="/politica-privacidad" className="underline hover:text-brand-primary">
                        política de privacidad
                      </Link>{' '}
                      <span className="text-brand-emergency">*</span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-brand-primary text-white px-8 py-3 font-semibold text-sm hover:bg-brand-primary/90 transition-colors disabled:opacity-60"
                  >
                    <Send className="h-4 w-4" aria-hidden />
                    {sending ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-brand-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-serif text-2xl font-bold text-brand-primary mb-6 text-center">
            Cómo llegar
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[16/7]">
            <iframe
              title="Mapa Clínica Veterinaria Quevedog"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.6!2d-3.703!3d40.441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228fc!2sCalle+de+Fern%C3%A1ndez+de+los+R%C3%ADos%2C+32%2C+28015+Madrid!5e0!3m2!1ses!2ses!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-sm text-brand-text/60 mt-4">
            A 5 minutos de Metro Quevedo (L2) · Metro Ríos Rosas (L1) · Bus líneas 2, 16, 61, 202
          </p>
        </div>
      </section>
    </main>
  )
}
