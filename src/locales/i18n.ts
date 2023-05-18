import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "en",
  messages: {
    es: {
      home: 'Inicio',
      contact: 'Contacto',
      start: 'Comenzar',
      // ------------------------------- PERFIL
      profileText:
        "Soy programadora Frontend, tengo una gran pasión por la tecnología y me considero una persona proactiva y enfocada en la calidad y el rendimiento de mi trabajo. Mi experiencia en proyectos con ReactJS y Vue.js me ha permitido adquirir habilidades en el desarrollo de aplicaciones web y la implementación de soluciones efectivas. Me mantengo en constante aprendizaje y siempre busco nuevas oportunidades para crecer como profesional y aportar valor en los proyectos en los que participo.",
      // ------------------------------- RESUMEN
      summary: "Preguntas frecuentes",
      summaryText:
        "En esta página vas a encontrar algunas respuestas que creo que te resultarán útiles.",
      summaryQuestion1:
        "Estás buscando un puesto como desarrolladora Front-end pero, ¿tenés experiencia en el puesto?",
      summaryAnswer1:
        "Si! En la pestaña de experiencia laboral podés ver en detalle mis tareas en este rol. Trabajo desde octubre de 2022 en una fintech argentina enfocada en criptodivisas. ¿Un dato de color? Tiene el primer pool de minería sustentable de Latinoamérica.",
      summaryQuestion2:
        "En tu CV dice que conoces React y Vue. ¿Con cuál te sentís más cómoda?",
      summaryAnswer2:
        "Me siento cómoda en ambos, pero actualmente prefiero Vue ya que es el framework con el que he estado trabajando últimamente.",
      summaryQuestion3: "Necesitamos que hables diferentes idiomas.",
      summaryAnswer3:
        "No es un problema. Hablo español, inglés y un poco de italiano. ¿El dato de color de esta sección? Aprendí italiano haciendo un voluntariado en Italia en el verano del 2022.",
      summaryQuestion4:
        "¿Necesitás sponsor o visa para algún país en particular?",
      summaryAnswer4:
        "No es necesario ni en Argentina ni en Europa. Soy residente y nativa argentina, además de ciudadana italiana.",

      // ------------------------------- PRESENTACIÓN
      coverLetter: "Presentación",
      coverLetterText: `<p>
      ¡Hola! Como ya sabrás, mi nombre es Rocío Girardini, y me entusiasma la oportunidad de contribuir con mis habilidades y experiencia en el desarrollo de aplicaciones web.</p>
    <br />
    <p>En mi trabajo actual, estoy involucrada en el área de Frontend en el desarrollo de una billetera virtual de criptomonedas. Trabajo en la refactorización y mantenimiento del código, colaborando estrechamente con el equipo de diseño UX/UI. También me dedico a integrar APIs propias y de terceros y he demostrado habilidades para la resolución de problemas técnicos, incluso en mi primer semana de trabajo.</p>
    <br />
    <p>Además, tengo experiencia en gestión de proyectos, ya que trabajé como Project Manager para una empresa alemana, específicamente para su sede española. Allí, lideré un equipo de 14 becarios y me encargué de generar documentación e informes, asegurando la correcta ejecución de los objetivos.</p>
    <br />
    <p>Actualmente, estoy buscando nuevas oportunidades que me permitan crecer tanto personal como profesionalmente. Creo que mi perfil podría ser de interés para su empresa debido a mi experiencia en el desarrollo frontend y mi capacidad para enfrentar desafíos.</p>
    <br />
    <p>Agradezco su tiempo y consideración al revisar mi solicitud. Estoy disponible para proporcionar cualquier información adicional que pueda necesitar.</p>
    <br />
    <p>Me quedo a su disposición.</p>`,

      // ------------------------------- EXPERIENCIA
      workExperience: "Experiencia laboral",
      workIntro:
        "Durante mis años universitarios trabajé como fotógrafa y diseñadora gráfica autónoma. Mi primer trabajo formal fue en una agencia de marketing europea, y mi primer (y actual) trabajo IT es en una fintech argentina.",
      CCDate: "Buenos Aires - OCT 2022 hasta la actualidad.",
      CCProject: "Billetera virtual de criptomonedas.",

      CCTasks: `<ul style="padding-left: 2rem">
      <li>Refactorización y mantenimiento de código en aplicaciones web.
      </li>
      <li>Evaluar y colaborar con el equipo de diseño UX UI para la viabilidad técnica.
      </li>
      <li>Consumo de APIs propias y de terceros.
      </li>
      <li>
      Elaboración de código de calidad testeable.
      </li>
      <li>Trabajar en un entorno ágil con metodología scrum.</li>
    </ul>`,
      GCMDate: "España - FEB 2021 a MAY 2022",
      GCMProject: "Proyecto de Amazon OSP.",
      GCMTasks: `<ul style="padding-left: 2rem">
    <li>Dirigir y orientar a un equipo de hasta 14 personas dentro del proyecto OSP Amazon.</li>
    <li>Generar documentación e informes del proyecto.</li>
    <li>Garantizar la correcta ejecución y consecución de los objetivos de todo el equipo.</li>
    <li>Quality management y corrección de artículos.</li>
    <li>Trabajo continuo en el área de marketing de contenidos, marketing de afiliación y SEO utilizando Wordpress como sistema de gestión.</li>
    <li>Proceso automatizado de traducción y adaptación de contenidos para diferentes países (Italia, México, Brasil, Polonia y Holanda).</li>
  </ul>`,
      workTechs: "Tecnologías",

      // ------------------------------- ESTUDIOS
      studies: "Estudios",
      studiesIntro: `<p class="text-left ml-2 mr-2">Resumidamente, mi formación front-end fue con React.js, y aprendí Vue.js en mi actual trabajo.</p>
    <p class="text-left ml-2 mr-2">Además, me encuentro siempre haciendo cursos para mantenerme actualizada.</p>`,
      tab1: "Cursos y Carreras",
      DigitalNao: "Digital NAO x Universidad TecMilenio - 2023/En curso",
      WebDevelopment: "Desarrollo Web",
      Marketing: "Marketing digital y Analítica web",
      Cine: `<h2>Técnico Productor en Medios Audiovisuales</h2>
    <p class="text-subtitle-1 text-disabled">Universidad Nacional de Córdoba - 2017/Incompleto</p>`,

      // ------------------------------- PROGRAMACIÓN
      programming: "Programación",
      programmingIntro:
        "Acá podés encontrar mis conocimientos de programación clasificados por área.",
      programmingTab1: "Tecnologías",
      programmingTab2: "Más",
      moreTitle1: "Editores de código",
      moreTitle2: "Control de versiones",
      moreTitle3: "Software de metodología ágil",
      moreTitle4: "Librerías de unit testing",
      moreTitle5: "Herramientas gráficas",

      // ------------------------------- IDIOMAS
      languages: "Idiomas",
      spanish: "Español",
      spanishLevel: "Lengua nativa.",
      english: "Inglés",
      englishLevel: "Nivel C1 Advanced.",
      italian: "Italiano",
      italianLevel: "Nivel A2.",

      // ------------------------------- OTROS
      copy: "Copiar email",
      copied: "Copiado",
      whatsapp: "Abrir un chat en WhatsApp",
      pdf: "Descargar PDF",
    },
    en: {
      home: 'Home',
      contact: 'Contact',
      start: "Let's start",
      // ------------------------------- PROFILE
      profileText:
        "I am a Frontend programmer, I have a great passion for technology and I consider myself a proactive person focused on the quality and performance of my work. My experience in projects with ReactJS and Vue.js has allowed me to acquire skills in developing web applications and implementing effective solutions. I keep myself in constant learning and always look for new opportunities to grow as a professional and bring value in the projects in which I participate.",
      // ------------------------------- SUMMARY
      summary: "FAQ",
      summaryText:
        "In this page you will find a quick overview that I think you will find useful.",
      summaryQuestion1:
        "You want a position as a Front-end Developer but, do you have experience in the position?",
      summaryAnswer1:
        "Yes! In the work experience tab you can see in detail my tasks in this role. I have been working since October 2022 in an Argentinean fintech focused on cryptocurrencies. A fun fact? It has the first sustainable mining pool in Latin America.",
      summaryQuestion2:
        "You say you know React and Vue. Which one do you feel more comfortable with?",
      summaryAnswer2:
        "I feel comfortable in both, but currently I prefer Vue as it is the framework I have been working with for several months now.",
      summaryQuestion3: "We need you to speak different languages.",
      summaryAnswer3:
        "It is not a problem. I speak Spanish, English and a bit of Italian. The fun fact in this section is that I learned Italian while volunteering in Italy in the summer of 2022.",
      summaryQuestion4: "Do you need a sponsor to work in any country?",
      summaryAnswer4:
        "I do not need a visa or sponsor neither in Argentina nor in Europe. I am a resident and native Argentinean, as well as an Italian citizen.",

      // ------------------------------- COVER LETTER
      coverLetter: "Cover letter",
      coverLetterText: `
    <p>Hi! As you may already know, my name is Rocío Girardini, and I'm excited about the opportunity to contribute my skills and experience in web development.</p>
    <br />
    <p>In my current position, I'm involved in the Frontend area, specifically in the development of a cryptocurrency virtual wallet. I work on code refactoring and maintenance, closely collaborating with the UX/UI design team. I'm also responsible for integrating both proprietary and third-party APIs, and I have demonstrated problem-solving skills, even during my first week on the job.</p>
    <br />
    <p>
    Furthermore, I have experience in project management, as I worked as a Project Manager for a German company, specifically in their Spanish branch. There, I led a team of 14 interns and was responsible for generating documentation and reports, ensuring the successful achievement of objectives.</p>
    <br />
    <p>Currently, I'm seeking new opportunities that allow me to grow both personally and professionally. I believe that my profile could be of interest to your company due to my experience in frontend development and my ability to tackle challenges.</p>
    <br />
    <p>Thank you for your time and consideration in reviewing my application. I'm available to provide any additional information you may require.</p>
    <br />
    <p>I look forward to hearing from you.</p>`,

      // ------------------------------- WORK EXPERIENCE
      workExperience: "Work experience",
      workIntro:
        "During my college years I worked as a freelance photographer and graphic designer. My first formal job was in a European marketing agency, and my first (and current) IT job is in an Argentinean fintech.",
      CCDate: "Buenos Aires - OCT 2022 to current date.",
      CCProject: "Cryptocurrency wallet project.",
      CCTasks: `<ul style="padding-left: 2rem">
      <li>Refactoring and maintaining code in web applications.</li>
      <li>Evaluate and collaborate with UX UI design team for technical feasibility.</li>
      <li>Consumption of own and third party APIs.</li>
      <li>Development of quality testable code.</li>
      <li>Working in an agile environment with scrum methodology.</li>
    </ul>`,
      GCMDate: "Spain - FEB 2021 to MAY 2022",
      GCMProject: "Amazon OSP proyect.",
      GCMTasks: `<ul style="padding-left: 2rem">
    <li>
      Lead and mentor a team of up to 14 people within the OSP Amazon
      project.
    </li>
    <li>Generate project documentation and reports.</li>
    <li>
      Ensure proper execution and achievement of objectives for the
      entire team.
    </li>
    <li>Quality management and proofreading of articles.</li>
    <li>
      Continuous work in the area of content marketing, affiliate
      marketing and SEO using Wordpress as management system
    </li>
    <li>
      Automated translation and content adaptation process for
      different countries (Italy, Mexico, Brazil, Poland, and the
      Netherlands)
    </li>
  </ul>`,
      workTechs: "Technologies",

      // ------------------------------- STUDIES
      studies: "School background",
      studiesIntro: `<p class="text-left ml-2 mr-2">Very briefly, my front-end training was with React.js, and I learned Vue.js at my current job.</p>
    <p class="text-left ml-2 mr-2">In addition, I am always taking courses to keep myself updated.</p>`,
      tab1: "Courses & Careers",
      DigitalNao: "Digital NAO x TecMilenio University - 2023/Ongoing",
      WebDevelopment: "Web Development",
      Marketing: "Digital Marketing and Web Analytics",
      Cine: `<h2>Technical Producer in Audiovisual Media</h2>
    <p class="text-subtitle-1 text-disabled">National University of Córdoba - 2017/Incomplete</p>`,

      // ------------------------------- PROGRAMMING
      programming: "Programming",
      programmingIntro:
        "Here you can find my programming skills categorized by area.",
      programmingTab1: "Technologies",
      programmingTab2: "More",
      moreTitle1: "Code editors",
      moreTitle2: "Version control",
      moreTitle3: "Agile project management",
      moreTitle4: "Unit testing libraries",
      moreTitle5: "Graphic tools",

      // ------------------------------- LANGUAGES
      languages: "Languages",
      spanish: "Spanish",
      spanishLevel: "Native speaker.",
      english: "English",
      englishLevel: "Level C1 Advanced.",
      italian: "Italian",
      italianLevel: "Level A2.",

      // ------------------------------- OTROS
      copy: "Copy email",
      copied: "Copied",
      whatsapp: "Open a chat in WhatsApp",
      pdf: "Download PDF",
    },
  },
});

export default i18n;
