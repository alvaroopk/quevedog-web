import Image from 'next/image'
import { Check } from 'lucide-react'

const equipment = [
  'Ecógrafo GE LOGIQ F6 con Doppler — diagnóstico de primer nivel',
  'Radiografía digital de alta definición',
  'Laboratorio propio — hemograma, bioquímica, hormonas',
  'Quirófano con Ligasure y ventilación mecánica',
  'Oxigenoterapia y banco de sangre animal',
  'Electrocardiógrafo y medidor de presión arterial',
]

export default function Equipment() {
  return (
    <section className="py-20 md:py-28 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">Tecnología y certificaciones</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary leading-tight">
            Tecnología que marca la diferencia
          </h2>
          <p className="mt-4 text-lg text-brand-muted leading-relaxed">
            Invertimos en el equipamiento más avanzado para que el diagnóstico de tu mascota sea preciso y el tratamiento, el más eficaz posible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white border border-brand-border p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-primary mb-5">Equipamiento médico</h3>
            <ul className="space-y-3">
              {equipment.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-brand-text">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/assets/ecografo.jpg"
                  alt="Ecógrafo GE LOGIQ F6 con Doppler en clínica Quevedog"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/assets/quirofano.jpg"
                  alt="Quirófano equipado con Ligasure y ventilación mecánica"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-brand-primary text-white p-8 shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold mb-5">Cat Friendly Clinic · Plata</h3>
            <p className="text-white/85 leading-relaxed">
              Quevedog ha obtenido el certificado <strong>Cat Friendly Clinic nivel Plata</strong> otorgado por la International Society of Feline Medicine (ISFM). Esta distinción reconoce nuestro compromiso con el bienestar felino: protocolos específicos, instalaciones adaptadas y formación del equipo en medicina felina.
            </p>
            <p className="mt-3 text-white/85 leading-relaxed">
              Una de las pocas clínicas de Madrid con esta acreditación.
            </p>
            <div className="mt-6 relative bg-white rounded-xl overflow-hidden flex-1 min-h-[200px]">
              <Image
                src="/assets/certificado_cat_friendly.jpg"
                alt="Certificado Cat Friendly Clinic nivel Plata otorgado por ISFM"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
