export type Job = {
  company: string;
  rol: string;
  startTime: string;
  endTime: string;
  location: string;
  url: string;
  techs: string[];
  description: string[];
};

export const jobs: Job[] = [
  {
    company: "Grupo SBS",
    rol: "Team leader and Software Architect.",
    startTime: "Sep 2024",
    endTime: "Present",
    location: "Argentina",
    url: "https://www.gruposbs.com/",
    techs: ["NextJS", " TypeScript", "React Native", "Tailwind"],
    description: [
      "I manage the maintenance and continuous improvement of the current mobile application, ensuring its optimal performance.",
      "I lead the strategic migration of the application to a new technology stack, improving performance and user experience.",
      "I plan and implement changes to infrastructure and services, optimizing the architecture for greater efficiency.",
      "I actively contribute to the comprehensive update of the company's user experience and digital services, driving innovation and digital transformation.",
    ]
  },
  {
    company: "Globant",
    rol: "Web UI Developer",
    startTime: "Jan 2024",
    endTime: "Jan 2025",
    location: "Argentina",
    url: "https://www.globant.com/",
    techs: ["NextJS", " TypeScript", "React Native", "Tailwind"],
    description: [
      "I participate in the development of the user experience solution for ticketing and ancillaries for a major European airline. My main tasks are in the FrontEnd, but I also participate as a mobile developer for a second team, and I participate in a third core team, defining cross-functional components of the whole solution, applying best practices and best architecture strategies, and as a mobile dev, for another team that is working on the development of the solution."
    ]
  },
  {
    company: "Globy Solutions Tech",
    rol: "FullStack Developer",
    startTime: "Sep 2023",
    endTime: "Jan 2024",
    location: "United States",
    url: "https://globy-solutions.tech/",
    techs: ["React Native", " TypeScript", "Own Theme Engine", "Recoil", "Apollo Server", "GraphQL", "GitHub Actions", "Docker"],
    description: [
      "I developed the app in React Native and published it on Apple and Play Store, they are in closed testing.",
      "I used the APIs of the framework itself to interact with the image gallery and GPS, creating particular methods for each platform.",
      "I used a custom theme engine to reduce the final build.",
      "I also developed the services with Apollo Server and GraphQL, sharing the types between both products (FrontEnd and BackEnd), this solution is deployed on onrender.com.",
      "Both solutions have their Dockerfile."
    ]
  },
  {
    company: "FEMSA Digital",
    rol: "React Native Developer",
    startTime: "Jul 2023",
    endTime: "Sep 2023",
    location: "Mexico",
    url: "https://femsa.com/",
    techs: ["React Native", " TypeScript", "React Native Navigator", "Recoil"],
    description: [
      "Participate in the coding of the design and new features of the app they started to create.",
      "I proposed the architecture of the navigation of the app in the form of logical layers, following the standard of the apps that the company has already developed.",
      "I refactored screens to make them more scalable, performant, and testable."
    ]
  },
  {
    company: "Maiti",
    rol: "Teach Leader & React Native Dev",
    startTime: "Jun 2023",
    endTime: "Jul 2023",
    location: "Argentina",
    url: "https://maitillc.com/",
    techs: ["React Native", " TypeScript", "Docker", "Recoil"],
    description: [
      "I took the role of Teach Leader for the definition of the stack and architecture of the project. I used the APIs of the framework itself to interact with the image gallery and GPS, creating particular methods for each platform.",
      "Participate in the interview and selection of the collaborators who joined later.",
      "As Team Leader, I mentored my colleagues with less experience."
    ]
  },
  {
    company: "Codesmith",
    rol: "React Native Developer",
    startTime: "Jul 2022",
    endTime: "Dec 2022",
    location: "United States",
    url: "https://codesmithdev.com/",
    techs: ["React Native", " TypeScript", "NextJS", "ExpressJS", "MUI", "Tailwind", "Redux"],
    description: [
      "I collaborated in the development of a panel in NextJS, for the administration of the service that the client had planned to give in the gastronomic area, and I also developed the backEnd services for this solution.",
      "Then I was reassigned to a new project because they required a developer with experience in React Native, for the product they needed to develop for the Plumbing service that the company's client performs. I used the APIs of the framework itself to interact with the image gallery and GPS, creating particular methods for each platform.",
      "I proposed to them to restart the work for a month, with a new scalable architecture, and using TS, since the first version of the app lacked these features. They accepted the change and let me migrate the services and screens they had already created."
    ]
  },
  {
    company: "Southern Code",
    rol: "Team Leader | React Developer Sr",
    startTime: "Jul 2021",
    endTime: "Mar 2022",
    location: "Argentina",
    url: "https://www.southerncode.us/",
    techs: ["React", "NextJS", "TypeScript", "MaterialUI", "Axios", "Docker", "Redux"],
    description: [
      "I was in charge of the FrontEnd for the creation of the webApp that, through a wizard on the front page, sought to match properties and people interested in operating in the real estate market.",
      "As Teach Leader, I proposed to use NextJS with MUI for the frontEnd, GraphQL as a data manipulation layer and orchestration for the backEnd."
    ]
  },
  {
    company: "JP Morgan Chase",
    rol: "React Developer",
    startTime: "Apr 2021",
    endTime: "Sep 2021",
    location: "United States",
    url: "https://www.jpmorganchase.com/",
    techs: ["React", "React Router", "TypeScript", "GraphQL", "Ant-Design", "Redux"],
    description: [
      "Because of my experience with GraphQL I was assigned to develop a web platform for market analytics, a tool that would be for internal use of the company. As a milestone to consider in this project, I realized that I needed to create and implement the user session maintenance layer, which was validated by the PO and delegated me that task.",
      "I also created the animated logo for the app with CSS and JS, based on the proposed design, but they were going to use a gif."
    ]
  },
  {
    company: "Prisma Medios de Pago",
    rol: "Team Leader | React Developer",
    startTime: "Dec 2020",
    endTime: "Mar 2021",
    location: "Argentina",
    url: "https://www.prismamediosdepago.com/",
    techs: ["React", "React Router", "TypeScript", "Bootstrap", "Axios"],
    description: [
      "I participated in the creation of an administration panel for the client's services, allowing me to define the stack of technologies to be used, being at the side of the Team Leader in the decision making, mentoring my BackEnd colleagues on language or framework agnostic strategies.",
      "I proposed to use React with Bootstrap, since the components were the ones that most respected the look & feel of the client's institutional website.",
      "The project ended in the presentation of the 1st MVP."
    ]
  },
  {
    company: "Parakeet",
    rol: "FullStack Developer",
    startTime: "Oct 2020",
    endTime: "Dec 2020",
    location: "United States",
    url: "https://flyparakeet.com/",
    techs: ["React", "TypeScript", "Bootstrap", "Mongoose", "ExpressJS"],
    description: [
      "Developed the front-end of a web application for an American startup based in Mexico, dealt directly with the CEO and Product Owner of the application, who is Native American.",
      "I participated in the development of the web app for the company, using React, TypeScript, Bootstrap, Mongoose, ExpressJS, and MongoDB."
    ]
  },
  {
    company: "Freelance",
    rol: "FullStack JavaScript Developer",
    startTime: "Feb 2014",
    endTime: "Jul 2020",
    location: "Argentina",
    url: "https://freelance.com/",
    techs: ["React", "TypeScript", "GraphQL"],
    description: [
      "I migrated from the LAMP stack to MERN, doing all my particular projects on NodeJS, with JavaScript frameworks, going through WebComponents, Polymer, VueJs, Ionic, NativeScript, AMP and Flutter, until staying with React and its ecosystem, ReactJS, React Native, Gatsby and NextJS.",
      "As examples, develop some product portfolios.",
      "Perform concept practice with frameworks such as Polymer and Web Components.",
      "I also developed a couple of apps in Ionic and another one in NativeScript."
    ]
  },
  {
    company: "Freelance",
    rol: "FullStack Developer",
    startTime: "Dec 2012",
    endTime: "Dec 2014",
    location: "Argentina",
    url: "https://freelance.com/",
    techs: ["JQuery", "CSS", "Bootstrap", "Apache", "SQL"],
    description: [
      "Build projects independently and on demand, do referrals. Always using the LAMP stack.",
      "As examples, I created several blogs to advertise brands or products. Customize WP templates.",
      "Created and maintained some E-Commerce sites."
    ]
  }
];