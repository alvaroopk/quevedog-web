export const SITE_INDEXED = false
export const ORIGINAL_URL = 'https://www.quevedog.es'
export const SITE_URL = 'https://quevedog-web.vercel.app'

export const BUSINESS_NAME = 'Clínica Veterinaria Quevedog'
export const BUSINESS_SHORT_NAME = 'Quevedog'
export const TAGLINE = 'Tu veterinario de confianza en Chamberí, Madrid'

export const CONTACT = {
  phone: '914 45 52 36',
  phoneRaw: '+34914455236',
  phoneUrgencias: '674 303 127',
  phoneUrgenciasRaw: '+34674303127',
  email: 'cvquevedog@gmail.com',
  address: 'Calle de Fernández de los Ríos, 32, 28015 Madrid',
  addressShort: 'C/ Fernández de los Ríos 32 — Chamberí, Madrid',
  hours: 'Lunes a viernes 10:00 – 20:30 · Sábados 10:00 – 14:00',
  hoursUrgencias: '24 horas, 365 días al año',
  whatsapp: 'https://wa.me/34674303127',
} as const

export const SOCIAL = {
  facebook: 'https://www.facebook.com/Clínica-Veterinaria-Quevedog-1392448537670221/',
  instagram: 'https://www.instagram.com/cvquevedog/',
  twitter: 'https://twitter.com/cvquevedog',
} as const

export const NAV_LINKS = [
  { href: '/nuestra-clinica', label: 'Nuestra Clínica' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/urgencias', label: 'Urgencias 24h', emergency: true },
  { href: '/campanas', label: 'Campañas' },
  { href: '/articulos', label: 'Artículos' },
  { href: '/contacto', label: 'Contacto' },
] as const
