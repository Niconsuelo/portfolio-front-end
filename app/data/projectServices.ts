import { faArrowUpRightFromSquare, faCodeBranch, faLaptop, faLaptopCode, faTerminal } from "@fortawesome/free-solid-svg-icons";

// projectServiceData.ts
export const projectServices = [
  {
    id: "project1",
    name: "Virtual Chat OpenAI",
    description:
      "SPA application focused on anime fans that allows them to interact with their main characters through a chat powered by OpenIA API.",
    icon: "FaCode",
    video: "/project1.mp4",
    extraInfo: "Review",
    technologies: [
      { src: "/javascript.png", alt: "JS", label: "JS" },
      { src: "/html5.png", alt: "HTML5", label: "HTML5" },
      { src: "/jest.png", alt: "Jest", label: "Jest" },
      { src: "/figma.svg", alt: "Figma", label: "Figma" },
      { src: "/css-imagen.png", alt: "Css", label: "Css" },
    ],
    linkproject: [
      {
        href: "https://google.com/",
        label: "dataverse chat code",
        icon: faCodeBranch,
      },
      {
        href: "https://hunterxversexchat.vercel.app/",
        label: "dataverse chat page",
        icon: faArrowUpRightFromSquare,
      },
    ],
  },
  {
    id: "project2",
    name: "Search movie",
    description:
      "Informative website for users focused on the search of movies,series and more, adapted to an intelligent search and sorting based on customer requirements.",
    icon: "FaMobileAlt",
    video: "/project2.mp4",
    extraInfo: "Review",
    technologies: [
      { src: "/typesccript1.svg", alt: "TS", label: "TS" },
      { src: "/reactjs.svg", alt: "React", label: "React" },
      { src: "/figma.svg", alt: "Figma", label: "Figma" },
      { src: "/sass.svg", alt: "SASS", label: "SASS" },
      { src: "/jest.png", alt: "Jest", label: "Jest" },
    ],
    linkproject: [
      {
        href: "https://google.com/",
        label: "search movie code",
        icon: faCodeBranch,
      },
      {
        href: "https://dev-014-movie-challenge-fw-gold.vercel.app/",
        label: "search movie page",
        icon: faArrowUpRightFromSquare,
      },
    ],
  },
  {
    id: "project3",
    name: "Point of Sale",
    description:
      "Application based on the management of restaurant services with creation of interface (client) and server (API). Design and layout based on figma tool",
    icon: "FaSearchengin",
    video: "/project3.mp4",
    extraInfo: "Review",
    technologies: [
      { src: "/typesccript1.svg", alt: "TS", label: "TS" },
      { src: "/reactjs.svg", alt: "React", label: "React" },
      { src: "/postman.svg", alt: "Postman", label: "Postman" },
      { src: "/figma.svg", alt: "Figma", label: "Figma" },
      { src: "/tail.svg", alt: "Tailwind", label: "Tailwind" },
    ],
    linkproject: [
      {
        href: "https://google.com/",
        label: "point of sale code",
        icon: faCodeBranch,
      },
      {
        href: "https://pointofsale.restaurant.app/",
        label: "point of sale page",
        icon: faArrowUpRightFromSquare,
      },
    ],
  },
];
