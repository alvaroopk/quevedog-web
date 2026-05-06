import { CONTACT } from '@/lib/constants'

export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-20 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden
      >
        <path d="M20.52 3.48A11.91 11.91 0 0 0 12 0C5.37 0 0 5.37 0 12a11.93 11.93 0 0 0 1.65 6.05L0 24l6.13-1.6A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 21.82a9.78 9.78 0 0 1-4.99-1.36l-.36-.21-3.64.95.97-3.55-.23-.36A9.83 9.83 0 1 1 21.82 12 9.83 9.83 0 0 1 12 21.82Zm5.39-7.31c-.29-.15-1.71-.85-1.97-.95s-.46-.15-.65.15-.74.95-.91 1.14-.34.22-.63.07a8.06 8.06 0 0 1-2.36-1.46 8.85 8.85 0 0 1-1.63-2c-.17-.29 0-.45.13-.6s.29-.34.43-.5a2.04 2.04 0 0 0 .29-.5.55.55 0 0 0 0-.5c-.07-.15-.65-1.57-.89-2.15s-.47-.49-.65-.5h-.55a1.06 1.06 0 0 0-.78.36 3.27 3.27 0 0 0-1.02 2.4 5.66 5.66 0 0 0 1.19 3.02 12.99 12.99 0 0 0 4.96 4.39c.69.3 1.23.48 1.65.61a4 4 0 0 0 1.83.12 3 3 0 0 0 1.97-1.39 2.45 2.45 0 0 0 .17-1.39c-.07-.12-.27-.19-.56-.34Z" />
      </svg>
    </a>
  )
}
