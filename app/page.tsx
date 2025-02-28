"use client";
import { BrowserRouter as Router } from "react-router-dom";
import Image from "next/image";
import project1 from "../public/project1.jpeg";
import avatar from "../public/avatar.jpg";
import jest from "../public/jest.png";
import typescript1 from "../public/typesccript1.svg";
import reactjs from "../public/reactjs.svg";
import nextjs from "../public/next.svg";
import tail from "../public/tail.svg";
import figma from "../public/figma.svg";
import html5 from "../public/html5.png";
import javascript from "../public/javascript.png";
import angular from "../public/angular.png";
import Button from "../components/button";
import portafoliodos from "../public/portafoliodos.jpeg";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCircleUser,
  faCode,
  faCodeBranch,
  faCube,
  faEnvelope,
  faEyeDropper,
  faFillDrip,
  faLaptop,
  faLaptopCode,
  faLayerGroup,
  faPenToSquare,
  faUser,
  faUserAlt,
  faUserGroup,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FaFigma, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FaTriangleExclamation,
  FaUpDownLeftRight,
  FaUpRightFromSquare,
} from "react-icons/fa6";
import IconCard from "@/components/iconCard";

export default function Home() {
  const contactRef = useRef<HTMLDivElement | null>(null);

  // Función para desplazar a la sección de contact
  const goToDown = () => {
    if (contactRef.current) {
      // Desplazarse a la sección de contacto
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* Menu esta cerrado en un principio */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  /* CAMBIA ENTRE ABIERTO O CERRADO */
  const hiddenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Abre el burgerMenu solo cuando el menú se haya abierto completamente
  useEffect(() => {
    if (isMenuOpen) {
      setIsBurgerMenuOpen(true); // Abre el burgerMenu cuando el menú se abre
    } else {
      setIsBurgerMenuOpen(false); // Si el menú está cerrado, cierra el burgerMenu
    }
  }, [isMenuOpen]); // Este efecto solo se ejecuta cuando `isMenuOpen` cambia

  //array de link contact
  const iconData = [
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/nicole-aburto-olave-884abb152/",
    },
    { icon: <FaGithub />, link: "https://github.com/Niconsuelo" },
    {
      icon: <FaFigma />,
      link: "https://www.figma.com/proto/7w5lvCVh6AIH5AM5q0zX3I/Portfolio?node-id=13-9&p=f&t=DcFGZJCHsI8zRmxG-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=124%3A1145",
    },
  ];
  //funcion para modal tecnologias
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const modalProjectOne = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Niconsuelo/DEV014-burger-queen-api-client",
    },
    {
      icon: <FaUpRightFromSquare />,
      link: "https://github.com/Niconsuelo/DEV014-burger-queen-api-client",
    },
  ];

  const modalProjectTwo = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Niconsuelo/DEV014-movie-challenge-fw",
    },
    {
      icon: <FaUpRightFromSquare />,
      link: "https://dev-014-movie-challenge-fw-gold.vercel.app/?page=1",
    },
  ];
  //skills icons
  const [icons] = useState([
    { src: html5, alt: "HTML5", label: "HTML5" },
    { src: typescript1, alt: "TS", label: "TS" },
    { src: jest, alt: "Jest", label: "Jest" },
    { src: figma, alt: "Figma", label: "Figma" },
    { src: "/docker.svg", alt: "Docker", label: "Docker" },
    { src: tail, alt: "Tail", label: "Tail" },
    { src: "/angular.svg", alt: "Angular", label: "Angular" },
    { src: javascript, alt: "JS", label: "JS" },
    { src: "/postman.svg", alt: "Postman", label: "Postman" },
    { src: reactjs, alt: "React", label: "React" },
    { src: "/sass.svg", alt: "SASSt", label: "SASSt" },
    { src: "/next.svg", alt: "NextJS", label: "NextJS" },
  ]);

  //Opciones del burger menu

  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const handleLinkClick = (
    sectionRef: React.RefObject<HTMLDivElement>,
    sectionId: string
  ) => {
    setIsMenuOpen(false); // Cierra el menú
    window.location.hash = sectionId; // Cambia la URL sin recargar la página
    sectionRef.current?.scrollIntoView({ behavior: "smooth" }); // Desplázate a la sección
  };

  return (
    <main className="flex flex-col justify-between p-12 pt-0 pb-2 bg-scroll bg-cover bg-center font-roboto scroll-smooth overflow-y-scroll h-screen">
      {/* Nav */}
      <nav
        className={`flex flex-row justify-evenly text-white w-[93%] mx-auto h-[10%] items-center fixed z-50 ${
          isMenuOpen ? "" : "border-b-2 border-gray-300 w-[80%] md:w-[93%]"
        }`}
      >
        {/* MENU HAMBURGUESA */}
        <div className="flex flex-row items-center mr-auto pt-4">
          <button
            onClick={hiddenMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <span className="block w-9 h-1 bg-white mb-1"></span>
            <span className="block w-9 h-1 bg-white mb-1"></span>
            <span className="block w-9 h-1 bg-white"></span>
          </button>
        </div>

        {/* NAV PANTALLA GRANDE */}
        <div
          className={`flex flex-row space-x-4 items-center ${
            isMenuOpen ? "hidden" : "md:flex"
          }`}
        ></div>
        <div className="flex flex-row items-center justify-evenly w-full bg-black h-[98%]">
          <a
            href="#home"
            className="hidden md:flex hover:underline text-p1 md:text-p1-md lg:text-p1-lg font-thin text-white"
          >
            HOME
          </a>

          <a
            href="#about"
            className="hidden md:flex hover:underline text-p1 md:text-p1-md lg:text-p1-lg font-thin text-white"
          >
            ABOUT
          </a>
          <a
            href="#services"
            className="hidden md:flex hover:underline text-p1 md:text-p1-md lg:text-p1-lg font-thin text-white"
          >
            SERVICES
          </a>

          <a
            href="#skills"
            className="hidden md:flex hover:underline text-p1 md:text-p1-md lg:text-p1-lg font-thin text-white"
          >
            WORKING SKILLS
          </a>
          <a
            href="#projects"
            className=" hidden md:flex hover:underline text-p1 md:text-p1-md lg:text-p1-lg font-thin text-white"
          >
            PROJECTS
          </a>

          <div className="hidden md:flex items-center text-sm">
            <Button
              buttonText="CONTACT"
              className="flex justify-center items-center bg-gradient-to-b from-[#FA5252] to-[#DD2476] hover:from-[#F6F7FB] hover:to-[#F6F7FB] hover:text-[#DD2476] shadow-[4px_4px_0px_#FFFFFF] hover:shadow-[4px_4px_0px_#FA5252] h-8 w-32 text-white font-thin hover:font-medium"
              onClick={goToDown}
            />
          </div>
        </div>
      </nav>

      {/* Menú desplegable para móviles */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gradient-to-b from-[#762147fc] to-[#FA5252] flex flex-col items-center justify-center py-4 md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        } z-50`}
      >
        <button
          onClick={hiddenMenu}
          className="absolute top-4 right-4 text-white text-3xl"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className="flex flex-col space-y-6 mr-28 mb-2 mt-2">
          <Image
            src={avatar}
            alt="user profile picture"
            width={70}
            height={70}
            className="content-center border-2 bg-center border-transparent bg-gradient-to-b from-[#DD2476] to-[#DD2476] rounded-full"
            priority
          />
          <div className="leading-tight">
            <h1 className="font-roboto font-semibold uppercase text-[18px] md:text-[30px] lg:text-[50px] text-white leading-tight">
              Nicole Aburto
            </h1>
            <h2 className="font-roboto font-thin text-[18px] md:text-[30px] lg:text-[50px] text-white mb-2 leading-tight">
              Front end developer
            </h2>
          </div>

          {/* burger options */}

          <a
            onClick={() => handleLinkClick(homeRef, "home")}
            className="relative text-white hover:underline text-lg py-1 font-thin"
          >
            <FontAwesomeIcon icon={faCircleUser} className="mr-4" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#DD2476] to-[#4543A0]"></span>
            HOME
          </a>

          <a
            onClick={() => handleLinkClick(aboutRef, "about")}
            className="relative text-white hover:underline text-lg py-1 font-thin"
          >
            <FontAwesomeIcon icon={faCircleUser} className="mr-4" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#DD2476] to-[#4543A0]"></span>
            ABOUT
          </a>
          <a
            onClick={() => handleLinkClick(servicesRef, "services")}
            className="relative text-white hover:underline text-lg py-1 font-thin"
          >
            <FontAwesomeIcon icon={faCircleUser} className="mr-4" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#DD2476] to-[#4543A0]"></span>
            SERVICES
          </a>

          <a
            onClick={() => handleLinkClick(skillsRef, "skills")}
            className="relative text-white hover:underline text-lg py-1 font-thin"
          >
            <FontAwesomeIcon icon={faLayerGroup} className="mr-4" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#DD2476] to-[#4543A0]"></span>
            WORKING SKILLS
          </a>

          <a
            onClick={() => handleLinkClick(projectsRef, "projects")}
            className="relative text-white hover:underline text-lg py-1 font-thin"
          >
            <FontAwesomeIcon icon={faCode} className="mr-4" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#DD2476] to-[#4543A0]"></span>
            PROJECTS
          </a>

          <a
            onClick={() => handleLinkClick(contactRef, "contact")}
            className="relative text-white hover:underline text-lg py-1 font-thin"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#DD2476] to-[#4543A0]"></span>
            CONTACT
          </a>
        </div>
      </div>

      {/* Home Section */}
      <section
        id="home"
        className="flex flex-col lg:flex-row lg:mt-[144px] sm:mt-0 lg:mb-20 scroll-mt-20 lg:scroll-mt-36 gap-4 md:gap-6 sm:ml-0 sm:mb-0 lg:ml-8 relative z-10"
      >
        <div className="flex flex-col gap-4 sm:gap-2 md:gap-1 mb-2 sm:ml-0 sm:mb-0 lg:ml-8">
          <div className="order-1 md:order-1 sm:mt-0">
            {" "}
            {/* Aquí se ajusta el margen */}
            <h2 className="font-roboto font-extralight text-h2 md:text-h2-md lg:text-h2-lg text-white mb-10 sm:mb-2">
              Hi! Im Nicole Aburto
            </h2>
            <h1 className="font-extrabold text-h1 md:text-h1-md lg:text-h1-lg text-white uppercase leading-tight mb-4 sm:mb-2">
              Web
            </h1>
            <h1 className="font-extrabold text-h1 md:text-h1-md lg:text-h1-lg text-white uppercase leading-tight sm:mb-2">
              Developer!
            </h1>
          </div>

          <div className="order-3 md:order-3 sm:gap-1 sm:mt-1 sm:mb-1">
            <p className="text-white text-p md:text-p-md lg:text-p-lg leading-relaxed lg:mt-4 lg:mb-10">
              Madrid, España.
            </p>

            <Button
              buttonText="Let's Start"
              className="bg-gradient-to-b from-[#FA5252] to-[#DD2476] text-white hover:from-[#F6F7FB] hover:to-[#F6F7FB] hover:text-[#DD2476] py-2 px-4 mt-6 font-thin shadow-[4px_4px_0px_#F6F7FB] hover:shadow-[4px_4px_0px_#FA5252] h-10 w-48 transition-all hover:font-medium sm:gap-1"
              onClick={goToDown}
            />
          </div>
        </div>
        <div className="order-2 md:order-2 flex items-center justify-center lg:mx-auto">
          <Image
            src={avatar}
            alt="user profile picture"
            width={140}
            height={170}
            className="content-center border-8 bg-center border-transparent bg-gradient-to-b from-[#FA5252] to-[#DD2476] bounce-box z-10 sm:w-[50px] sm:h-[70px] md:w-[50px] md:h-[70px] lg:w-[320px] lg:h-[420px]"
            priority
          />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="flex flex-col lg:flex-row bg-scroll bg-cover bg-center font-roboto lg:mt-20 lg:mb-20 scroll-mt-20"
      >
        <div className="flex flex-col lg:w-1/2 lg:px-8 lg:py-0 mt-4 lg:mt-1">
          {/* Título */}
          <div className="my-8 leading-tight order-1 sm:order-1">
            <h1 className="text-gradient font-extrabold text-h1 md:text-h1-md lg:text-h1-lg text-white uppercase mt-6">
              THERE IS
            </h1>
            <h1 className="text-gradient font-extrabold text-h1 md:text-h1-md lg:text-h1-lg text-white uppercase">
              ALL...
            </h1>
          </div>

          {/* Texto */}
          <div className="order-2 sm:order-2  lg:w-[100%] pt-6">
            <p className="font-roboto font-extralight text-p md:text-p-md lg:text-p-lg text-white leading-tight">
              I am a Freelancer Front-end Developer, Chilean based in Spain. I
              code and create web elements for amazing people and companies
              around the world. I like to work with new people, learn new
              experiences and carry out challenging projects.
            </p>
          </div>
        </div>

        {/* Imagen, oculta en mobile */}
        <div className="hidden md:flex lg:w-1/2 items-center justify-center mt-16 lg:mt-8 ml-20 order-3 sm:order-3">
          <Image
            src={portafoliodos}
            alt="second picture"
            width={470}
            height={300}
            className="border-transparent bg-gradient-to-b from-[#FA5252] to-[#DD2476]"
          />
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="flex flex-col bg-scroll bg-cover bg-center font-roboto mt-10 mb-20 scroll-mt-10"
      >
        <div className="relative mt-16 text-right ml-auto">
          {/* ml-auto pega al borde derecho */}
          <h1 className="font-extrabold text-h2 md:text-h2-md lg:text-h2-lg text-white uppercase relative sm:mb-8">
            WHAT CAN I DO...
          </h1>
        </div>

        {/* cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:gap-3 lg:p-6 sm:p-10 sm:ml-4 sm:pr-0">
          {/* card 1 */}
          <div className="lg:pr-10 pr-4 hover:scale-105 lg:mt-10 mt-4 grid grid-rows-3 grid-flow-col bg-slate-200 bg-opacity-10 lg:w-[90%] w-full p-2 lg:p-6 shadow-[4px_4px_0px_#EC3d65] lg:shadow-[4px_4px_0px_#F6F7FB] hover:bg-gradient-to-b hover:from-[#FA5252] hover:to-[#DD2476] transition-all duration-700 ease-in-out">
            {/* Icono */}
            <h1 className="text-white row-span-3 flex justify-center items-center mr-4">
              <FontAwesomeIcon
                className="text-black text-xs lg:p-4 p-3 sm:p-2 hover:text-red-500 transition duration-300 bg-white lg:h-8 lg:w-8 h-4 w-4 border-2 border-black lg:h-15 lg:w-15"
                icon={faCode}
              />
            </h1>
            {/* Título */}
            <h3 className="ml-1 lg:ml-4 uppercase text-white text-h3 md:text-h3-md lg:text-h3-lg col-span-2 flex items-center">
              web development
            </h3>
            {/* Descripción */}
            <p className="ml-1 lg:ml-4 lg:border-t-2 lg:border-gray-50 text-p1 md:text-p1-md lg:text-p1-lg row-span-2 col-span-2 text-white font-thin pb-4 pt-4 border-t-2">
              Web designer and developer specialized in creating custom and
              responsive websites.
            </p>
          </div>

          {/* card 2 */}
          <div className="lg:pr-10 pr-4 hover:scale-105 lg:mt-10 mt-4 grid grid-rows-3 grid-flow-col bg-slate-200 bg-opacity-10 lg:w-[90%] w-full p-4 lg:p-6 shadow-[4px_4px_0px_#EC3d65] lg:shadow-[4px_4px_0px_#F6F7FB] hover:bg-gradient-to-b hover:from-[#FA5252] hover:to-[#DD2476] transition-all duration-700 ease-in-out">
            <h1 className="text-white row-span-3 flex justify-center items-center mr-4">
              <FontAwesomeIcon
                className="text-black text-xs lg:p-4 p-3 sm:p-2 hover:text-red-500 transition duration-300 bg-white lg:h-8 lg:w-8 h-4 w-4 sm:h-3 sm:w-3 border-2 border-black lg:h-15 lg:w-15"
                icon={faLaptopCode}
              />
            </h1>
            <h3 className="ml-1 lg:ml-4 uppercase text-white text-h3 md:text-h3-md lg:text-h3-lg col-span-2 flex items-center">
              responsive design
            </h3>
            <p className="ml-1 lg:ml-4 border-t-2 border-gray-50 text-p1 md:text-p1-md lg:text-p1-lg row-span-2 col-span-2 text-white font-thin pb-4 pt-4">
              Materializing functional ideas that fit the unique needs of each
              client.
            </p>
          </div>

          {/* card 3 */}
          <div className="lg:pr-10 pr-4 hover:scale-105 lg:mt-10 mt-4 grid grid-rows-3 grid-flow-col bg-slate-200 bg-opacity-10 lg:w-[90%] w-full p-4 lg:p-6 shadow-[4px_4px_0px_#EC3d65] lg:shadow-[4px_4px_0px_#F6F7FB] hover:bg-gradient-to-b hover:from-[#FA5252] hover:to-[#DD2476] transition-all duration-700 ease-in-out">
            <h1 className="text-white row-span-3 flex justify-center items-center mr-4">
              <FontAwesomeIcon
                className="text-black text-xs lg:p-4 p-3 sm:p-2 hover:text-red-500 transition duration-300 bg-white lg:h-8 lg:w-8 h-4 w-4 border-2 border-black lg:h-15 lg:w-15"
                icon={faPenToSquare}
              />
            </h1>
            <h3 className="ml-1 lg:ml-4  uppercase text-white text-h3 md:text-h3-md lg:text-h3-lg col-span-2 flex items-center">
              ux/ui design
            </h3>
            <p className="ml-1 lg:ml-4  border-t-2 border-gray-50 text-p1 md:text-p1-md lg:text-p1-lg row-span-2 col-span-2 text-white font-thin pb-4 pt-4">
              Create digital experiences that leave an inspiring, creative and
              functional impression.
            </p>
          </div>
          {/* card 4 */}
          <div className="lg:pr-10 pr-4 hover:scale-105 lg:mt-10 mt-4 grid grid-rows-3 grid-flow-col bg-slate-200 bg-opacity-10 lg:w-[90%] w-full p-4 lg:p-6 shadow-[4px_4px_0px_#EC3d65] lg:shadow-[4px_4px_0px_#F6F7FB] hover:bg-gradient-to-b hover:from-[#FA5252] hover:to-[#DD2476] transition-all duration-700 ease-in-out">
            <h1 className="text-white row-span-3 flex justify-center items-center mr-4">
              <FontAwesomeIcon
                className="text-black text-xs lg:p-4 p-3 sm:p-2 hover:text-red-500 transition duration-300 bg-white lg:h-8 lg:w-8 h-4 w-4 border-2 border-black lg:h-15 lg:w-15"
                icon={faUserGroup}
              />
            </h1>
            <h3 className="ml-1 lg:ml-4 uppercase text-white text-h3 md:text-h3-md lg:text-h3-lg col-span-2 flex items-center">
              Client management
            </h3>
            <p className="ml-1 lg:ml-4 border-t-2 border-gray-50 text-p1 md:text-p1-md lg:text-p1-lg row-span-2 col-span-2 text-white font-thin pb-4 pt-4">
              Developing efficient communication, ensuring project satisfaction
              and success from the start.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="flex flex-col items-center justify-center bg-scroll bg-cover bg-center font-roboto text-white mt-10 mb-10 h-[600px] scroll-mt-20"
      >
        <h1 className="font-extrabold text-gradient-title text-h1 md:text-h1-md lg:text-h1-lg uppercase text-center mb-4">
          SKILLS
        </h1>
        <p className="lg:mt-4 text-center text-p md:text-p-md lg:text-p-lg font-thin mb-6">
          We put your ideas and therefore your wishes in the form of a unique
          web project that inspires you and your customers. The most important
          thing is the adaptation to different types of projects and challenges.
        </p>
        <div className="flex flex-col items-center lg:h-[600px] lg:w-full lg:text-sm sm:h-[200px]">
          <div className="flex flex-row justify-center lg:gap-x-8 lg:w-full w-[100%] sm:h-[100%] mt-4 lg:mt-6 gap-2 text-[30%] lg:text-xs">
            {icons.slice(0, 6).map((item, index) => (
              <IconCard
                key={index}
                src={item.src}
                alt={item.alt}
                label={<span className="hidden sm:block">{item.label}</span>}
              />
            ))}
          </div>
          <div className="flex flex-row justify-center lg:gap-x-8 lg:w-full w-[100%] sm:h-[100%] mt-4 lg:mt-4 gap-2 text-[20%] lg:text-xs">
            {icons.slice(6, 12).map((item, index) => (
              <IconCard
                key={index}
                src={item.src}
                alt={item.alt}
                label={<span className="hidden sm:block">{item.label}</span>}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="text-white scroll-mt-20">
        <h1 className="text-white font-extrabold text-h1 md:text-h1-md lg:text-h1-lg uppercase mt-6">
          PROJECTS
        </h1>
        <div className="mt-6"> </div>
        {/* Contenido projects*/}
        {/* Project one*/}
        <div className="flex flex-row flex-wrap bg-zinc-800 bg-opacity-40 z-0 w-[100%]">
          <div className="flex flex-col basis-1/2 flex-1 p-20 space-y-6">
            <h1 className="uppercase font-semibold text-h3 md:text-h3-md lg:text-h3-lg">
              POS Restaurant
            </h1>
            <div className="border-t-2 border-gray-300 pt-4">
              <p className="font-thin text-p1 md:text-p1-md lg:text-p1-lg">
                POS application based on the management of restaurant services
                with creation of interface (client) and server (API). Design and
                layout based on figma tool.
              </p>
            </div>
            <div className="flex justify-end">
              <Button
                buttonText="REVIEW"
                className="bg-gradient-to-b from-[#FA5252] to-[#DD2476] hover:from-[#F6F7FB] hover:to-[#F6F7FB] hover:text-[#DD2476] shadow-[4px_4px_0px_#FFFFFF] hover:shadow-[4px_4px_0px_#FA5252] h-10 w-32 text-white font-thin hover:font-medium"
                onClick={openModal}
              />{" "}
            </div>

            <div>
              {/* Modal */}
              {isOpen && (
                <div
                  id="default-modal"
                  tabIndex={0}
                  aria-hidden="true"
                  className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
                >
                  <div className="relative p-8 w-full max-w-md bg-gradient-to-b from-[#FA5252] to-[#DD2476] rounded-lg shadow-sm dark:bg-gray-700">
                    {/* Modal header */}
                    <div className="flex items-center  p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                      <div className="flex flex-col items-center ml-[20%]">
                        <h3 className="flex gap-4 ml-[24%] text-xl font-semibold text-white dark:text-black uppercase">
                          TECHNOLOGIES
                        </h3>
                        <h3 className="flex gap-4 ml-[24%] text-xl font-semibold text-white dark:text-black uppercase">
                          IMPLEMENTED
                        </h3>
                      </div>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>

                    {/* Modal body */}
                    <div className="p-4 md:p-5 space-y-4">
                      <div className="flex flex-col flex-wrap">
                        <div className="flex flex-row basis-1/2 space-x-10 justify-center p-5">
                          {[
                            {
                              src: tail,
                              alt: "Icono Tailwind",
                              width: 50,
                              height: 30,
                            },
                            {
                              src: reactjs,
                              alt: "Icono ReactJS",
                              width: 50,
                              height: 30,
                            },
                            {
                              src: jest,
                              alt: "Icono Jest",
                              width: 50,
                              height: 20,
                            },
                          ].map((image, index) => (
                            <Image
                              key={index}
                              src={image.src}
                              alt={image.alt}
                              width={image.width}
                              height={image.height}
                              className=""
                            />
                          ))}
                        </div>
                        <div className="flex flex-row basis-1/2 space-x-10 justify-center p-5">
                          {[
                            {
                              src: reactjs,
                              alt: "Icono ReactJS",
                              width: 50,
                              height: 30,
                            },
                            {
                              src: figma,
                              alt: "Icono Figma",
                              width: 50,
                              height: 28,
                            },
                          ].map((image, index) => (
                            <Image
                              key={index}
                              src={image.src}
                              alt={image.alt}
                              width={image.width}
                              height={image.height}
                              className=""
                            />
                          ))}
                        </div>
                      </div>

                      <h3 className="ml-[24%] text-xl font-thin text-white dark:text-black uppercase">
                        LINK OF INTEREST
                      </h3>
                    </div>

                    {/* Modal footer */}
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <div className="flex flex-row space-x-14 ml-[30%]">
                        {modalProjectOne.map((item, index) => (
                          <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-700 text-4xl hover:text-white"
                          >
                            {item.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contenedor video */}
          <div className="flex basis-1/2 flex-1 p-20">
            <video
              src="/project3.mp4"
              autoPlay
              loop
              muted
              playsInline
              className=""
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="mt-10"> </div>
        {/* Project two */}
        <div className="flex flex-row flex-wrap bg-zinc-800 bg-opacity-40 z-0 w-[100%]">
          {/* Contenedor video */}
          <div className="flex basis-1/2 flex-1 p-20">
            <video
              src="/project2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className=""
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="flex flex-col basis-1/2 flex-1 p-20 space-y-6">
            <h1 className="uppercase font-semibold text-h3 md:text-h3-md lg:text-h3-lg">
              Cinema Paradiso
            </h1>
            <div className="border-t-2 border-gray-300 pt-4">
              <p className="font-thin text-p1 md:text-p1-md lg:text-p1-lg">
                Informative website for users focused on the search of movies,
                series and more, adapted to an intelligent search and sorting
                based on customer requirements.
              </p>
            </div>
            <div className="flex justify-end">
              <Button
                buttonText="REVIEW"
                className="bg-gradient-to-b from-[#FA5252] to-[#DD2476] hover:from-[#F6F7FB] hover:to-[#F6F7FB] hover:text-[#DD2476] shadow-[4px_4px_0px_#FFFFFF] hover:shadow-[4px_4px_0px_#FA5252] h-10 w-32 text-white font-thin hover:font-medium"
                onClick={openModal}
              />
            </div>
            <div>
              {/* Modal */}
              {isOpen && (
                <div
                  id="default-modal"
                  tabIndex={0}
                  aria-hidden="true"
                  className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
                >
                  <div className="relative p-8 w-full max-w-md bg-gradient-to-b from-[#FA5252] to-[#DD2476] rounded-lg shadow-sm dark:bg-gray-700">
                    {/* Modal header */}
                    <div className="flex items-center  p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                      <div className="flex flex-col items-center ml-[20%]">
                        <h3 className="flex gap-4 ml-[24%] text-xl font-semibold text-white dark:text-black uppercase">
                          TECHNOLOGIES
                        </h3>
                        <h3 className="flex gap-4 ml-[24%] text-xl font-semibold text-white dark:text-black uppercase">
                          IMPLEMENTED
                        </h3>
                      </div>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>

                    {/* Modal body */}
                    <div className="p-4 md:p-5 space-y-4">
                      <div className="flex flex-col flex-wrap">
                        <div className="flex flex-row basis-1/2 space-x-10 justify-center p-5">
                          {[
                            {
                              src: html5,
                              alt: "Icono TypeScript",
                              width: 50,
                              height: 30,
                            },
                            {
                              src: html5,
                              alt: "Icono ReactJS",
                              width: 50,
                              height: 30,
                            },
                            {
                              src: jest,
                              alt: "Icono Jest",
                              width: 50,
                              height: 20,
                            },
                          ].map((image, index) => (
                            <Image
                              key={index}
                              src={image.src}
                              alt={image.alt}
                              width={image.width}
                              height={image.height}
                              className=""
                            />
                          ))}
                        </div>
                        <div className="flex flex-row basis-1/2 space-x-10 justify-center p-5">
                          {[
                            {
                              src: html5,
                              alt: "Icono HTML",
                              width: 50,
                              height: 30,
                            },
                            {
                              src: javascript,
                              alt: "Icono Javascript",
                              width: 50,
                              height: 30,
                            },
                            {
                              src: figma,
                              alt: "Icono Figma",
                              width: 50,
                              height: 28,
                            },
                          ].map((image, index) => (
                            <Image
                              key={index}
                              src={image.src}
                              alt={image.alt}
                              width={image.width}
                              height={image.height}
                              className=""
                            />
                          ))}
                        </div>
                      </div>

                      <h3 className="ml-[24%] text-xl font-thin text-white dark:text-black uppercase">
                        LINK OF INTEREST
                      </h3>
                    </div>

                    {/* Modal footer */}
                    <div className="flex items-center justify-center p-4">
                      <div className="flex flex-row space-x-8">
                        {modalProjectTwo.map((item, index) => (
                          <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-4xl hover:text-gray-400"
                          >
                            {item.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10"> </div>
        {/* Project three*/}
        <div className="flex flex-row flex-wrap bg-zinc-800 bg-opacity-40 z-0 w-[100%]">
          <div className="flex flex-col basis-1/2 flex-1 p-20 space-y-6">
            <h1 className="uppercase font-semibold text-h3 md:text-h3-md lg:text-h3-lg">
              DATAVERSE CHAT
            </h1>
            <div className="border-t-2 border-gray-300 pt-4">
              <p className="font-thin text-p1 md:text-p1-md lg:text-p1-lg">
                SPA application focused on anime fans that allows them to
                interact with their main characters through a chat powered by
                OpenIA API.
              </p>
            </div>
            <div className="flex justify-end">
              <Button
                buttonText="REVIEW"
                className="bg-gradient-to-b from-[#FA5252] to-[#DD2476] hover:from-[#F6F7FB] hover:to-[#F6F7FB] hover:text-[#DD2476] shadow-[4px_4px_0px_#FFFFFF] hover:shadow-[4px_4px_0px_#FA5252] h-10 w-32 text-white font-thin hover:font-medium"
                onClick={openModal}
              />
            </div>
            <div>
              {/* Modal */}
              {isOpen && (
                <div
                  id="default-modal"
                  tabIndex={0}
                  aria-hidden="true"
                  className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
                >
                  <div className="relative p-8 w-full max-w-md bg-gradient-to-b from-[#FA5252] to-[#DD2476] rounded-lg shadow-sm dark:bg-gray-700">
                    {/* Modal header */}
                    <div className="flex items-center  p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                      <div className="flex flex-col items-center ml-[20%]">
                        <h3 className="flex gap-4 ml-[24%] text-xl font-semibold text-white dark:text-black uppercase">
                          TECHNOLOGIES
                        </h3>
                        <h3 className="flex gap-4 ml-[24%] text-xl font-semibold text-white dark:text-black uppercase">
                          IMPLEMENTED
                        </h3>
                      </div>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>

                    {/* Modal body */}
                    <div className="p-4 md:p-5 space-y-4">
                      <div className="flex flex-col flex-wrap">
                        <div className="flex flex-row basis-1/2 space-x-10 justify-center p-5">
                          {[
                            {
                              src: typescript1,
                              alt: "Icono TypeScript",
                              width: 50,
                              height: 30,
                            },
                            {
                              src: reactjs,
                              alt: "Icono ReactJS",
                              width: 50,
                              height: 30,
                            },
                            {
                              src: jest,
                              alt: "Icono Jest",
                              width: 50,
                              height: 20,
                            },
                          ].map((image, index) => (
                            <Image
                              key={index}
                              src={image.src}
                              alt={image.alt}
                              width={image.width}
                              height={image.height}
                              className=""
                            />
                          ))}
                        </div>
                        <div className="flex flex-row basis-1/2 space-x-10 justify-center p-5">
                          {[
                            {
                              src: tail,
                              alt: "Icono Tailwind",
                              width: 50,
                              height: 30,
                            },
                            {
                              src: reactjs,
                              alt: "Icono ReactJS",
                              width: 50,
                              height: 30,
                            },
                            {
                              src: figma,
                              alt: "Icono Figma",
                              width: 50,
                              height: 28,
                            },
                          ].map((image, index) => (
                            <Image
                              key={index}
                              src={image.src}
                              alt={image.alt}
                              width={image.width}
                              height={image.height}
                              className=""
                            />
                          ))}
                        </div>
                      </div>

                      <h3 className="ml-[24%] text-xl font-thin text-white dark:text-black uppercase">
                        LINK OF INTEREST
                      </h3>
                    </div>

                    {/* Modal footer */}
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <div className="flex flex-row space-x-14 ml-[30%]">
                        {modalProjectOne.map((item, index) => (
                          <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-700 text-4xl hover:text-white"
                          >
                            {item.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contenedor video */}
          <div className="flex basis-1/2 flex-1 p-20">
            <video
              src="/project1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className=""
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="mt-20 scroll-mt-10">
        <div className="flex flex-col bg-black w-full min-h-[80vh] justify-center items-center space-y-20 sm:h-full">
          <div className="text-h1 md:text-h1-md lg:text-h1-lg font-thin justify-center text-white sm:ml-6">
            Ready to bring your ideas to life?
          </div>

          <div className="flex justify-center">
            <Button
              buttonText="DOWNLOAD CV"
              className="bg-gradient-to-b from-[#FA5252] to-[#DD2476] hover:bg-white shadow-[4px_4px_0px_#FFFFFF] text-white font-thin py-4 px-8 w-48"
              onClick={goToDown}
            />
          </div>
          <div className="justify-center flex flex-row space-x-14">
            {iconData.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-5xl hover:text-zinc-700"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
      <footer className="text-zinc-400 flex justify-center mt-4 mb-1">
        © 2025 All rights reserved by Nicole Aburto ·
      </footer>
    </main>
  );
}
