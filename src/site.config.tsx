import {
  AgileSVG,
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
  ReactSVG,
  RelicSVG,
  UxSVG,
  WhatsAppSVG,
} from "./app/components/svg";

export const SiteConfig = {
  defaultLanguage: "en",
  metadata:{
    title: "Lucas Delgado FullStack Developer",
    description: "I'm a Full Stack Developer based in Buenos Aires, Argentina.",
  },
  main: {
    title: "Lucas Delgdo",
    rol: "FullStack Developer",
    description: "I'm a Full Stack Developer based in Buenos Aires, Argentina.",
    email: "lucas.matias.delgado@gmail.com",
  },
  sections: {
    experience: {
      title: "Experienc<span class='main-color'>e</span>",
      list: [
        {
          rol: "Full Stack developer",
          company: "Mercado Libre",
          date: ["10/22", "present"],
          description:
            "I am currently working at this great company. I lead and serve as a reference in several projects, both on the backend and frontend. I participate in projects with a backend in Node.js with TypeScript and in Golang. Connecting projects to a Big Queue with more than 50k rpm news deliveries. We work with REST APIs and middlewares. On the frontend, we build and maintain projects in React with TypeScript. In addition to working on the infrastructure and metrics of each project.",
        },
        {
          rol: "Full Stack developer",
          company: "La Nación Newspaper",
          date: ["08/16", "10/22"],
          description:
            "I had the great opportunity to work at this company and learn a lot. Here, I experienced significant professional growth. I started on the web layout and complex CSS3 effects team. Over time, I evolved to become a FullStack developer. I eventually led projects such as the new login and the paywall. I gained a lot of experience in team management and soft skills. Additionally, as it is a news outlet where SEO is important, we received thorough education on that front. The technologies used were React, Node.js, both with TypeScript, and some .NET.",
        },
        {
          rol: "Frontend developer",
          company: "IdForYou Agencia Digital",
          date: ["01/16", "08/16"],
          description:
            "It was a short-lived experience because I was given the opportunity to migrate to a larger company. Here, I did responsive layout work and worked with WordPress. We used some libraries like Bootstrap, jQuery, and others.",
        },
        {
          rol: "Full Stack Product Developer",
          company: "lucasdelgado.com",
          date: ["2015", ""],
          description:
            "This was the beginning of my career, my own website where I sold digital products such as SEO, websites, design, digital marketing consulting, and more. During this stage, I was in charge of the entire project, including client communication, design, product development, programming, and more. It was a great and enriching experience.",
        },
      ],
    },
    education: {
      title: "Educatio<span class='main-color'>n</span>",
      main: {
        title: "System Analist",
        inst: "ORT Institute",
        date: ["06/2020","-", "present"],
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
          title: "Node.JS",
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
        title: "Mail",
        component: <MailSVG />,
        link: "mailto:lucas.matias.delgado@gmail.com",
      },
      {
        title: "CV.PDF",
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
        component: <AgileSVG />,
      },
      {
        title: "Next.js",
        component: <NextSVG />,
      },
      {
        title: "Golang",
        component: <GoSVG />,
      },
      {
        title: "ReactNative",
        component: <ReactSVG />,
      },
      {
        title: "DataDog",
        component: <DataDogSVG />,
      },
      {
        title: "NewRelic",
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
