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
        "Soy programadora frontend en ReactJS y Vue.js 🙋🏽‍♀️. Actualmente estoy trabajando en una cripto Fintech, y realizando un curso de Full Stack Developer 👩🏽‍💻. Siempre estoy abierta a nuevas oportunidades que potencien mis habilidades 🚀.",
      // ------------------------------- RESUMEN
      summary: "Resumen",
      summaryText:
        "En esta página vas a encontrar algunas cuestiones que creo que te resultarán útiles.",
      summaryQuestion1:
        "Querés un puesto como desarrolladora Front-end pero, ¿tenés experiencia en el puesto?",
      summaryAnswer1:
        "Si! En la pestaña de experiencia laboral podés ver en detalle mis tareas en este rol. Trabajo desde octubre de 2022 en una fintech argentina enfocada en criptodivisas. ¿Un dato de color? Tiene el primer pool de minería sustentable de Latinoamérica.",
      summaryQuestion2:
        "En tu CV dice que conoces React y Vue. ¿En qué framework te sentís más cómoda?",
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
      ¡Hola! Como ya sabrás, mi nombre es Rocío Girardini, y espero ser considerada como candidata para el puesto de desarrolladora Frontend.
    </p>
    <br />
    <p>
    Para contarte un poco sobre mí, durante la pandemia trabajé en una agencia de marketing alemana, para su sede española. Allí redactaba artículos para el programa OSP de Amazon, además de gestionar un grupo de becarios de hasta 14 personas. Mientras trabajaba estudié programación, y así es como actualmente trabajo como desarrolladora Front-end para una Crypto Fintech. Estos trabajos me han permitido desarrollar habilidades tales como el trabajo en equipo, la organización, así como también poner a prueba mi capacidad creativa.  
    </p>
    <br />
    <p>Actualmente, busco nuevas y desfiantes oportunidades para poder crecer tanto personal como profesionalmente. Espero que mi perfil sea de tu interés.</p>
    <br />
    <p>Me quedo a tu disposición.</p>`,

      // ------------------------------- EXPERIENCIA
      workExperience: "Experiencia laboral",
      workIntro:
        "Durante mis años universitarios trabajé como fotógrafa y diseñadora gráfica autónoma. Mi primer trabajo formal fue en una agencia de marketing europea, y mi primer (y actual) trabajo IT es en una fintech argentina.",
      CCDate: "Buenos Aires - OCT 2022 hasta la actualidad.",
      CCProject: "Billetera virtual de criptomonedas.",

      CCTasks: `<ul style="padding-left: 2rem">
      <li>Optimizar y refactorizar código, y crear funcionalidades web.
      </li>
      <li>Diseñar páginas dinámicas e interactivas.
      </li>
      <li>Desarrollo de código de calidad testeable.
      </li>
      <li>
      Evaluar y colaborar con el equipo de diseño UX UI para la viabilidad técnica.
      </li>
      <li>Trabajar en un entorno con metodologías ágiles.</li>
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
      studiesIntro: `<p class="text-left ml-2 mr-2">Como verás a continuación, no es una página muy concurrida. Soy sobre todo autodidacta. Tuve que dejar la universidad a causa de la pandemia, pero me enseñó todas las herramientas gráficas que conozco y que sigo utilizando hoy en día.</p>
    <p class="text-left ml-2 mr-2">Por otro lado, mi formación front-end fue con el framework React, pero aprendí Vue en mi trabajo actual.</p>`,
      tab1: "Cursos y Carreras",
      studies1: "Carrera de desarrollo Front End",
      studiesText1: `<p>Este programa está compuesto por los siguientes cursos</p>
    <ul style="padding-left: 2rem">
      <li> Curso de React Js <span class="text-disabled"> - 2022</span></li>
      <li> Curso de Javascript <span class="text-disabled"> - 2022</span></li>
      <li> Curso de Web Development <span class="text-disabled"> - 2021</span></li>
    </ul>`,
      studies2: "Máster en Marketing digital y Analítica web",
      studies3: `<h2>Técnico Productor en Medios Audiovisuales</h2>
    <p class="text-subtitle-1 text-disabled">Universidad Nacional de Córdoba - 2017/Incompleto</p>`,

      // ------------------------------- PROGRAMACIÓN
      programming: "Programación",
      programmingIntro:
        "Acá podés encontrar mis conocimientos de programación clasificados por área.",
      programmingTab1: "Desarrollo web",
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
      englishLevel: "Nivel B2 en expresión oral y escrita.",
      italian: "Italian",
      italianLevel: "Nivel A2 en expresión oral y escrita.",

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
        "I am a frontend ReactJS and Vue.js developer🙋🏽‍♀️. I am currently working in a crypto Fintech, and taking a course to become a Full Stack Developer 👩🏽‍💻. I am always open to new and challenging opportunities that enhance my skills 🚀.",
      // ------------------------------- SUMMARY
      summary: "Summary",
      summaryText:
        "In this page you will find a quick overview that I think you will find useful.",
      summaryQuestion1:
        "You want a position as a Front-end Developer but, do you have experience in the position?",
      summaryAnswer1:
        "Yes! In the work experience tab you can see in detail my tasks in this role. I have been working since October 2022 in an Argentinean fintech focused on cryptocurrencies. A fun fact? It has the first sustainable mining pool in Latin America.",
      summaryQuestion2:
        "You say you know React and Vue. In which framework do you feel more comfortable?",
      summaryAnswer2:
        "I feel comfortable in both, but currently I prefer Vue as it is the framework I have been working with for several months now.",
      summaryQuestion3: "We need you to speak different languages.",
      summaryAnswer3:
        "It is not a problem. I speak Spanish, English and a bit of Italian. The fun fact in this section is that I learned Italian while volunteering in Italy in the summer of 2022.",
      summaryQuestion4: "Do you need a sponsor to work in any country?",
      summaryAnswer4:
        "I do not need a visa or sponsor to work in Argentina or Europe. I am an Italian citizen and Argentinean resident.",

      // ------------------------------- COVER LETTER
      coverLetter: "Cover letter",
      coverLetterText: `<p>
      Hi! As you know, my name is Rocío Girardini, and I am here to be
      considered as a candidate for the position of Frontend developer.
    </p>
    <br />
    <p>
    To tell you a little about myself, during the pandemic I worked in a German marketing agency for their Spanish branch, writing articles for the OSP (Onsite Associates Program) of Amazon ES, as well as managing a group of interns of up to 14 people. While working there I studied programming, and this is how I currently work as a Front-end developer for a Crypto Fintech. These jobs allowed me to develop skills such as teamwork, organization, as well as to test my creative skills. 
    </p>
    <br />
    <p>Currently, I am looking for new and challenging opportunities to grow both personally and professionally. I hope my profile is of interest to you.</p>
    <br />
    <p>I remain at your disposal.</p>`,

      // ------------------------------- WORK EXPERIENCE
      workExperience: "Work experience",
      workIntro:
        "During my college years I worked as a freelance photographer and graphic designer. My first formal job was in a European marketing agency, and my first (and current) IT job is in an Argentinean fintech.",
      CCDate: "Buenos Aires - OCT 2022 to current date.",
      CCProject: "Cryptocurrency wallet project.",
      CCTasks: `<ul style="padding-left: 2rem">
      <li>Optimize and refactor code, and create web features.</li>
      <li>Design dynamic and interactive pages.</li>
      <li>Development of quality testable code.</li>
      <li>
        Assess and collaborate with the UX UI design team for technical
        feasibility.
      </li>
      <li>Work in an agile environment with scrum methodology.</li>
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
      studiesIntro: `<p class="text-left ml-2 mr-2">As you will see below, this is not a crowded page. I am mostly self-taught. I had to drop out of college because of the pandemic, but it taught me all the graphics tools that I know and still use today.</p>
    <p class="text-left ml-2 mr-2">On the other hand, my front-end training was with the React framework, but I learned Vue at my current job.</p>`,
      tab1: "Courses & Careers",
      studies1: "Front End Development Career",
      studiesText1: `<p>This program consisted of the following courses:</p>
    <ul style="padding-left: 2rem">
      <li>React Js course <span class="text-disabled"> - 2022</span></li>
      <li>Javascript course <span class="text-disabled"> - 2022</span></li>
      <li>Web Development course <span class="text-disabled"> - 2021</span></li>
    </ul>`,
      studies2: "Master in Digital Marketing and Web Analytics",
      studies3: `<h2>Technical Producer in Audiovisual Media</h2>
    <p class="text-subtitle-1 text-disabled">National University of Córdoba - 2017/Incomplete</p>`,

      // ------------------------------- PROGRAMMING
      programming: "Programming",
      programmingIntro:
        "Here you can find my programming skills categorized by area.",
      programmingTab1: "Web development",
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
      englishLevel: "Level B2 in oral and written expression.",
      italian: "Italian",
      italianLevel: "Level A2 in oral and written expression.",

      // ------------------------------- OTROS
      copy: "Copy email",
      copied: "Copied",
      whatsapp: "Open a chat in WhatsApp",
      pdf: "Download PDF",
    },
  },
});

export default i18n;
