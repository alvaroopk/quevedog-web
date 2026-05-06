export type Article = {
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  readMinutes: number
  image: string
  imageAlt: string
  content: string[]
}

export const articles: Article[] = [
  {
    slug: 'cat-friendly-clinic-plata',
    category: 'Clínica',
    title: 'Quevedog obtiene el certificado Cat Friendly Clinic nivel Plata',
    excerpt:
      'Reconocimiento internacional al compromiso con el bienestar felino: protocolos, instalaciones y formación específica del equipo.',
    date: '2025-09-12',
    readMinutes: 4,
    image: '/assets/certificado_cat_friendly.jpg',
    imageAlt: 'Certificado Cat Friendly Clinic nivel Plata otorgado por la ISFM',
    content: [
      'En Clínica Veterinaria Quevedog estamos orgullosos de anunciar que hemos obtenido el certificado Cat Friendly Clinic nivel Plata, otorgado por la International Society of Feline Medicine (ISFM).',
      'Esta certificación reconoce el cumplimiento de estándares internacionales en el manejo, la atención y el bienestar de los pacientes felinos. Para conseguirla, hemos adaptado nuestras instalaciones (zona de espera felina diferenciada con altura para transportines y terapia con feromonas), implementado protocolos específicos de manejo del estrés y formado a todo el equipo en medicina felina.',
      'Si tienes un gato, esto significa que tu mascota recibirá una experiencia diseñada específicamente para reducir su ansiedad — desde que entra por la puerta hasta que termina la consulta.',
    ],
  },
  {
    slug: 'piensos-y-etiquetado',
    category: 'Nutrición',
    title: 'Piensos y etiquetado: claves para una correcta interpretación',
    excerpt:
      'Cómo leer una etiqueta de pienso para perro o gato y entender realmente qué estás dando a tu mascota.',
    date: '2025-07-21',
    readMinutes: 6,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&q=80',
    imageAlt: 'Perro comiendo de su comedero',
    content: [
      'Las etiquetas de los piensos comerciales pueden resultar confusas. Términos como "alimento completo", "complementario", "natural" o "premium" no siempre significan lo mismo, y muchos están sometidos a regulación específica.',
      'Lo primero que debes mirar es la lista de ingredientes: están ordenados por peso. Si las primeras posiciones las ocupan cereales o subproductos, la fuente principal de proteína no es animal. Busca piensos donde el primer ingrediente sea una proteína de origen animal claramente identificada (pollo, salmón, cordero…).',
      'La composición analítica te indica los porcentajes de proteína, grasa, fibra y cenizas. Para perros adultos sanos, una proteína mínima del 22 % suele ser adecuada, pero esta cifra varía según raza, edad y nivel de actividad. Si tienes dudas, en Quevedog te asesoramos individualmente.',
    ],
  },
  {
    slug: 'ventajas-ecografia-veterinaria',
    category: 'Diagnóstico',
    title: 'Ventajas de la ecografía en veterinaria',
    excerpt:
      'La ecografía ha revolucionado el diagnóstico veterinario. Te contamos por qué y cuándo es la prueba más recomendable.',
    date: '2025-06-04',
    readMinutes: 5,
    image: '/assets/ecografo.jpg',
    imageAlt: 'Ecógrafo GE LOGIQ F6 con Doppler',
    content: [
      'La ecografía es una prueba no invasiva, indolora y sin radiación que nos permite visualizar en tiempo real los órganos internos de tu mascota. En Quevedog disponemos de un ecógrafo General Electric LOGIQ F6 con Doppler, el mismo que se utiliza en hospitales humanos y veterinarios de referencia.',
      'Con la ecografía detectamos alteraciones en hígado, riñones, vejiga, bazo, próstata, útero o corazón, entre otros órganos. También guiamos punciones para tomar muestras con máxima precisión, evitando cirugías exploratorias innecesarias.',
      'Si tu veterinario detecta un soplo, una alteración analítica o una masa palpable, es probable que recomiende una ecografía. Es una prueba rápida y, en muchos casos, no requiere sedación.',
    ],
  },
  {
    slug: 'leishmaniosis-canina',
    category: 'Prevención',
    title: 'Diez preguntas rápidas sobre leishmaniosis canina',
    excerpt:
      'Una enfermedad grave, presente en toda la península y prevenible con un protocolo adecuado. Resolvemos las dudas más frecuentes.',
    date: '2025-04-30',
    readMinutes: 7,
    image: 'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=1200&q=80',
    imageAlt: 'Perro al aire libre en zona endémica de leishmaniosis',
    content: [
      'La leishmaniosis es una enfermedad parasitaria transmitida por la picadura de un mosquito hembra (flebotomo). Está presente en toda la cuenca mediterránea y, en España, prácticamente en todo el territorio.',
      'No se transmite directamente entre perros ni del perro al humano. La única vía es la picadura del flebotomo, activo desde abril/mayo hasta octubre, y especialmente al amanecer y al atardecer.',
      'La prevención se basa en tres pilares: repelentes (collares y pipetas específicas), vacunación anual y revisiones periódicas. Si vives en zona endémica o viajas con tu perro a una, consulta con tu veterinario el protocolo personalizado.',
    ],
  },
  {
    slug: 'golpe-de-calor',
    category: 'Urgencias',
    title: '¿Cómo debo actuar ante un golpe de calor?',
    excerpt:
      'El golpe de calor es una urgencia veterinaria real. Reconocer los síntomas y actuar rápido puede salvar la vida de tu mascota.',
    date: '2025-06-22',
    readMinutes: 4,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&q=80',
    imageAlt: 'Gato durmiendo bajo el sol',
    content: [
      'El golpe de calor ocurre cuando la temperatura corporal de tu mascota supera los 40 °C y su organismo no consigue regularse. Es especialmente peligroso en razas braquicéfalas (bulldog, carlino, persa…), animales obesos, ancianos o con patología respiratoria.',
      'Síntomas: jadeo intenso, salivación excesiva, mucosas muy rojas o azuladas, debilidad, vómitos, descoordinación o pérdida de conciencia. Si los detectas, actúa inmediatamente.',
      'Qué hacer: lleva a tu mascota a un lugar fresco, mójala con agua templada (no helada) en cuello, abdomen y patas, ofrécele agua sin forzarla y llama URGENTEMENTE al 674 303 127. El golpe de calor puede ser mortal si no se trata a tiempo.',
    ],
  },
  {
    slug: 'toxoplasmosis-gatos-embarazo',
    category: 'Salud',
    title: 'Toxoplasmosis, gatos y embarazo',
    excerpt:
      'No, no tienes que renunciar a tu gato si estás embarazada. Te explicamos cómo gestionar el riesgo correctamente.',
    date: '2025-05-15',
    readMinutes: 5,
    image: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=1200&q=80',
    imageAlt: 'Mujer embarazada acariciando a su gato',
    content: [
      'La toxoplasmosis es una infección causada por el parásito Toxoplasma gondii. Durante el embarazo, una infección primaria puede afectar al feto, pero el riesgo asociado a vivir con un gato es mucho menor del que se suele creer.',
      'Los gatos solo eliminan el parásito durante un breve periodo tras una infección primaria, y la transmisión requiere ingestión accidental de heces contaminadas. Las medidas básicas (lavarse las manos, no manipular la bandeja durante el embarazo, cocinar bien la carne) reducen el riesgo prácticamente a cero.',
      'En Quevedog podemos hacer un análisis serológico para conocer el estado inmunológico de tu gato y orientarte mejor. No abandones a tu mascota: con información, todo el mundo está más tranquilo.',
    ],
  },
  {
    slug: 'viajar-con-mascota',
    category: 'Viajes',
    title: '¿Qué debo hacer para viajar con mi mascota?',
    excerpt:
      'Pasaporte europeo, microchip, vacunas y documentación. Te explicamos paso a paso qué necesitas para viajar con tu perro o gato.',
    date: '2025-06-10',
    readMinutes: 6,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&q=80',
    imageAlt: 'Perro viajando en transportín',
    content: [
      'Para viajar con tu mascota dentro de la Unión Europea necesitas: microchip, vacuna antirrábica vigente y pasaporte europeo. Algunos países (Reino Unido, Irlanda, Finlandia, Malta) exigen además tratamiento contra Echinococcus.',
      'Si viajas fuera de la UE, los requisitos varían enormemente. Algunos países exigen análisis de anticuerpos antirrábicos con varios meses de antelación, así que planifica con tiempo: empieza al menos 4-6 meses antes del viaje.',
      'En Quevedog gestionamos toda la documentación y los protocolos vacunales necesarios. Pide cita con suficiente antelación y te orientamos según destino.',
    ],
  },
  {
    slug: 'microchip-obligatorio',
    category: 'Legal',
    title: '¿Por qué es obligatorio identificar y censar a todos los animales?',
    excerpt:
      'El microchip y el censo son una obligación legal en España, pero también la mejor forma de recuperar a tu mascota si se pierde.',
    date: '2025-03-18',
    readMinutes: 4,
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80',
    imageAlt: 'Veterinario implantando microchip a un cachorro',
    content: [
      'En España, la identificación con microchip y el censo en el registro autonómico correspondiente son obligatorios para perros, gatos y hurones. Las multas por incumplimiento varían entre comunidades, pero la obligación es estatal.',
      'Más allá de la obligación legal, el microchip es la mejor herramienta para recuperar a tu mascota si se pierde. Mantén siempre tus datos actualizados en el registro y, si tu mascota cambia de propietario, comunica el cambio.',
      'El procedimiento es rápido, prácticamente indoloro y se realiza en consulta. En Quevedog implantamos microchips homologados y gestionamos el alta en el registro al instante.',
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug)
}
