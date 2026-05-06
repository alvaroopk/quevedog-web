import { Calendar, Clock, Cat, Microscope } from 'lucide-react'

const items = [
  { icon: Calendar, label: 'Cita por teléfono o formulario — sin esperas innecesarias' },
  { icon: Clock, label: 'Urgencias 24h · 365 días al año' },
  { icon: Cat, label: 'Cat Friendly Clinic · Certificado ISFM Plata' },
  { icon: Microscope, label: 'Laboratorio y diagnóstico propio' },
]

export default function TrustBar() {
  return (
    <section className="bg-brand-bg border-b border-brand-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-sm text-brand-text">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                <Icon className="h-4 w-4" />
              </span>
              <span className="font-medium leading-snug">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
