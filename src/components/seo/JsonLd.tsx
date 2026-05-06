import { CONTACT, BUSINESS_NAME, ORIGINAL_URL, SITE_URL } from '@/lib/constants'

export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: BUSINESS_NAME,
    description:
      'Clínica veterinaria de referencia en Chamberí, Madrid. Urgencias 24h, equipamiento avanzado y certificación Cat Friendly Clinic Plata ISFM.',
    image: `${ORIGINAL_URL}/assets/fachada_clinica.jpg`,
    telephone: CONTACT.phoneRaw,
    email: CONTACT.email,
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle de Fernández de los Ríos, 32',
      addressLocality: 'Madrid',
      addressRegion: 'Madrid',
      postalCode: '28015',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.4346,
      longitude: -3.7115,
    },
    hasMap:
      'https://maps.google.com/?q=Calle+de+Fern%C3%A1ndez+de+los+R%C3%ADos+32+28015+Madrid',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '20:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '14:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/Clínica-Veterinaria-Quevedog-1392448537670221/',
      'https://www.instagram.com/cvquevedog/',
      'https://twitter.com/cvquevedog',
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
