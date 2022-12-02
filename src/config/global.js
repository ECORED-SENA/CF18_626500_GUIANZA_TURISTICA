export default {
  global: {
    componenteFormativo: 'Calidad del servicio de la guianza',
    descripcionCurso:
      'Las habilidades del guía corresponden con la planeación, ejecución y evaluación del servicio, con el uso de instrumentos y herramientas enmarcadas en políticas de gestión de calidad, mejora continua y liderazgo. El presente componente aborda el estudio y profundización sobre calidad, control y toma de decisiones alrededor de las posibilidades del guía en la gestión de la prestación del servicio.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Control del servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Calidad en el servicio',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'La gestión y aseguramiento de estándares',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Sistema de gestión',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Evaluación del servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Instrumentos de evaluación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Autoevaluación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Interpretación y presentación de datos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Toma de decisiones',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Mejora continua',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Instrumentos para la mejora continua en el guionaje',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'El líder',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Liderazgo, principios y estilos',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Competencias, inteligencia emocional',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Atehortúa Tapias, Y., & Restrepo Correa, J. (2010). Kaizen: Un Caso De Estudio. Scientia Et Technica, XVI(45),59-64.[fecha de Consulta 1 de Octubre de 2021]. ISSN: 0122-1701. Disponible en:',
      link: 'https://www.redalyc.org/articulo.oa?id=84917249011',
    },
    {
      referencia:
        'Consejo Nacional de Evaluación de la Política de Desarrollo Social (México). (2013). Manual para el diseño y la construcción de indicadores: Instrumentos principales para el monitoreo de programas sociales de México. CONEVAL, Consejo Nacional de Evaluación de la Política de Desarrollo Social.',
    },
    {
      referencia:
        'Darós, C., Morera, P., Herrera, V., & Philippe, J. (2012). Toma de decisiones en la empresa: Proceso y clasificación. Universidad Politécnica de Valencia.',
    },
    {
      referencia:
        'ISO - International Organization for Standardization. (2021). Normas.',
      link: 'https://www.iso.org/home.html',
    },
    {
      referencia:
        'Membrado Martínez, J. (2013). Metodologías avanzadas para la planificación y mejora:',
      link: 'https://www.editdiazdesantos.com/wwwdat/pdf/9788479788193.pdf',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2008). Sistema de indicadores de competitividad para el turismo competitivo colombiano. ',
      link: 'http://www.mincit.gov.co',
    },
    {
      referencia:
        'Naciones Unidas. Comisión Económica para Europa. (2009). Cómo hacer comprensibles los datos. Ginebra. Recuperado de ',
      link:
        'http://www.unece.org/fileadmin/DAM/stats/documents/writing/MDM_Part2_Spanish.pdf',
    },
    {
      referencia:
        'Opzeeland P. (2021). 9 Métodos prácticos para medir la calidad del servicio. UserLike. ',
      link: 'https://www.userlike.com/es/blog/medir-calidad-del-servicio',
    },
    {
      referencia:
        'Salazar Belloso, I. (2021). Importancia de la servucción en el turismo. Entorno Turístico.',
      link:
        'https://www.entornoturistico.com/importancia-de-la-servuccion-en-el-turismo/',
    },
    {
      referencia:
        'Sellés, S., Pina, T. y Navas, A. (2004). La gestión de la calidad a través de las normas ISO 9000 del año 2000: un estudio empírico. Revista investigaciones europeas de dirección y economía de la empresa, 10(2), 183-199.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (2018). Caracterización del usuario y servicio al cliente de la actividad de proyecto.  Manejo y control de bitácoras de viaje.  Programa tecnólogo en Guianza ',
    },
    {
      referencia:
        'Tiempo, Casa Editorial. (2000). Los 10 mandamientos de un líder. ',
      link: 'https://www.eltiempo.com/archivo/documento/MAM-1304279',
    },
    {
      referencia:
        'Valverde, N. (2012). Resolución de conflictos. Programa Distribución Física Internacional. SENA.',
    },
  ],
  glosario: [
    {
      termino: 'Altruista',
      significado:
        'Personas que se enfocan en el bien ajeno aun a costa del propio. ',
    },
    {
      termino: 'Emergente',
      significado:
        'Es el principio o nacimiento de un suceso o acontecimiento.',
    },
    {
      termino: 'Ético',
      significado:
        'Persona que enmarca sus comportamientos en un conjunto de normas morales y se fundamenta en sus valores. ',
    },
    {
      termino: 'Incidente',
      significado:
        'Suceso en que se puso en peligro el bienestar de una persona sin embargo no tuvo las consecuencias graves y funcionó como una advertencia, para tomar medidas preventivas que eviten consecuencias negativas para otro usuario. ',
    },
    {
      termino: 'NTS',
      significado:
        'Son las siglas de Norma Técnica Sectorial que generan las USN.',
    },
    {
      termino: 'Proactivo',
      significado:
        'Persona que toma activamente el control y decide qué hacer en cada momento, anticipándose a los acontecimientos.',
    },
  ],
  complementario: [
    {
      tema: 'Control del servicio',
      referencia:
        'Gobierno de Navarra. (2009). Guía para medir la satisfacción respecto a los servicios prestados.',
      tipo: 'PDF',
      descarga: 'downloads/GuiaPARAMEDIRLASATISFACCION2012.pdf',
    },
    {
      tema: 'Control del servicio',
      referencia:
        'Ministerio de Comercio Industria y Turismo (2021). Normativa turística.',
      tipo: 'Página Web',
      link: 'https://www.mincit.gov.co/minturismo/normatividad-turismo',
    },
    {
      tema: 'Evaluación del servicio',
      referencia:
        'Consejo Nacional de Evaluación de la Política de Desarrollo Social (México). (2013). Manual para el diseño y la construcción de indicadores: Instrumentos principales para el monitoreo de programas sociales de México.',
      tipo: 'PDF',
      descarga:
        'downloads/MANUAL_PARA_EL_DISENO_Y_CONTRUCCION_DE_INDICADORES.pdf',
    },
    {
      tema: 'Instrumentos de evaluación',
      referencia: 'UNED. (s.f.). Instrumentos de evaluación.',
      tipo: 'Página web',
      link:
        'https://multimedia.uned.ac.cr/pem/recursos_pace/c-instrumentos-escala-calificacion.html',
    },
    {
      tema: 'Interpretación y presentación de datos',
      referencia:
        'Naciones Unidas. Comisión Económica para Europa. (2009). Cómo hacer comprensibles los datos Parte 1.',
      tipo: 'PDF',
      descarga: 'downloads/anexo4.pdf',
    },
    {
      tema: 'Interpretación y presentación de datos',
      referencia:
        'Naciones Unidas. Comisión Económica para Europa. (2009). Cómo hacer comprensibles los datos Parte 2.',
      tipo: 'PDF',
      descarga: 'downloads/MDM_Part2_Spanish.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sandra Villamizar Rivera',
        cargo: 'Experta temática',
        centro: 'Centro Nacional de Hotelería - Regional Distrito Capital',
      },
      {
        nombre: 'Gustavo Santis Mancipe',
        cargo: 'Experta temática',
        centro: 'Centro Nacional de Hotelería - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Metodóloga',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: '',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Marcela Alarcon Granados',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Polanco',
        cargo: 'Validación Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortés García',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Mutis',
        cargo: 'Validación de Maquetación',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Gabriel Urueta Alvarez',
        cargo: 'Actividades didácticas',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación Contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
