import {
  AgileSVG,
  CicdSVG,
  CssSVG,
  DataDogSVG,
  FigmaSVG,
  GithubSVG,
  GoSVG,
  HtmlSVG,
  JestSVG,
  JsSVG,
  LinkedinSVG,
  MailSVG,
  MobileSVG,
  NextSVG,
  NodeSVG,
  PdfSVG,
  ReactNativeSVG,
  ReactSVG,
  RelicSVG,
  UxSVG,
  WhatsAppSVG,
} from "./app/components/svg";

export const SiteConfig = {
  defaultLanguage: "en",
  metadata:{
    title: "Lucas Delgado | Full Stack Developer",
    description: "I'm a Full Stack Developer based in Buenos Aires, Argentina.",
  },
  main: {
    title: "Lucas Delgado",
    rol: "Full Stack Developer",
    description: "I'm a Full Stack Developer based in Buenos Aires, Argentina.",
    email: "lucas.matias.delgado@gmail.com",
  },
  sections: {
    experience: {
      title: "Experienc<span class='main-color'>e</span>",
      list: [
        {
          rol: "Full Stack Developer",
          company: "Mercado Libre",
          date: ["10/2022", "Present"],
          description:
            "I currently work at Mercado Libre, where I lead several projects and act as a reference across both backend and frontend. I work on projects with backends built in Node.js with TypeScript and in Go, connecting projects to a Big Queue that handles more than 50k news deliveries per minute. We work with REST APIs and middleware. On the frontend, we build and maintain React projects with TypeScript. I also work on the infrastructure and metrics of each project.",
        },
        {
          rol: "Full Stack Developer",
          company: "La Nación Newspaper",
          date: ["08/2016", "10/2022"],
          description:
            "I had the great opportunity to work at La Nación and learn a great deal. I experienced significant professional growth there. I started on the team responsible for web layout and complex CSS3 effects. Over time, I grew into a Full Stack Developer and eventually led projects such as the new login system and the paywall. I gained substantial experience in team management and soft skills. Additionally, since La Nación is a news outlet where SEO is critical, we received in-depth training on the subject. The technologies we used were React and Node.js, both with TypeScript, and some .NET.",
        },
        {
          rol: "Frontend Developer",
          company: "IdForYou Digital Agency",
          date: ["01/2016", "08/2016"],
          description:
            "It was a short-lived experience, as I was given the opportunity to move to a larger company. There, I worked on responsive layouts and with WordPress. We used libraries such as Bootstrap and jQuery.",
        },
        {
          rol: "Full Stack Product Developer",
          company: "lucasdelgado.dev",
          date: ["2015", ""],
          description:
            "This was the beginning of my career: my own business, where I offered digital services such as SEO, website development, design, and digital marketing consulting. At this stage, I was responsible for the entire project, from client communication and design to product development and programming. It was a great and enriching experience.",
        },
      ],
    },
    education: {
      title: "Educatio<span class='main-color'>n</span>",
      main: {
        title: "Systems Analyst",
        inst: "ORT Argentina",
        date: ["06/2020", "Present"],
      },
      courses: [
        {
          title: "UX Design",
          inst: "Coderhouse",
          date: "2019",
        },
        {
          title: "Agile",
          inst: "IT Education",
          date: "2019",
        },
        {
          title: "Node.js",
          inst: "IT Education",
          date: "2017",
        },
        {
          title: "React",
          inst: "IT Education",
          date: "2016",
        },
        {
          title: "Vanilla JS",
          inst: "Coderhouse",
          date: "2016",
        },
        {
          title: "Frontend Developer",
          inst: "Coderhouse",
          date: "2015",
        },
      ],
    },
    contact: [
      {
        title: "WhatsApp",
        component: <WhatsAppSVG />,
        link: "https://wa.me/5491152610887",
      },
      {
        title: "LinkedIn",
        component: <LinkedinSVG />,
        link: "https://www.linkedin.com/in/lucas-delgado-692340107/",
      },
      {
        title: "Email",
        component: <MailSVG />,
        link: "mailto:lucas.matias.delgado@gmail.com",
      },
      {
        title: "CV (PDF)",
        component: <PdfSVG />,
        link: "Lucas_Delgado_CV.pdf",
      },
      {
        title: "GitHub",
        component: <GithubSVG />,
        link: "https://github.com/LucasDelgado/",
      },
    ],
    skills: [
      {
        title: "React",
        component: <ReactSVG />,
      },
      {
        title: "Node",
        component: <NodeSVG />,
      },
      {
        title: "JavaScript",
        component: <JsSVG />,
      },
      {
        title: "Jest",
        component: <JestSVG />,
      },
      {
        title: "CI / CD",
        component: <CicdSVG />,
      },
      {
        title: "Next.js",
        component: <NextSVG />,
      },
      {
        title: "Go",
        component: <GoSVG />,
      },
      {
        title: "React Native",
        component: <ReactNativeSVG />,
      },
      {
        title: "Datadog",
        component: <DataDogSVG />,
      },
      {
        title: "New Relic",
        component: <RelicSVG />,
      },
      {
        title: "CSS3",
        component: <CssSVG />,
      },
      {
        title: "HTML5",
        component: <HtmlSVG />,
      },
      {
        title: "Agile",
        component: <AgileSVG />,
      },
      {
        title: "Figma",
        component: <FigmaSVG />,
      },
      {
        title: "UX/UI",
        component: <UxSVG />,
      },
      {
        title: "Mobile First",
        component: <MobileSVG />,
      },
    ]
  },
  nav: [
    {
      name: "Experience",
    },
    {
      name: "Education",
    },
    {
      name: "Skills",
    },
  ],
};
