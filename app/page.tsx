"use client";
import { BrowserRouter as Router } from "react-router-dom";
import Image from "next/image";
import project1 from "../public/project1.jpeg";
import avatar from "../public/avatar.jpg";
import logoname from "../public/logoname.png";
import typescript1 from "../public/typesccript1.svg";
import reactjs from "../public/reactjs.svg";
import nextjs from "../public/next.svg";
import tail from "../public/tail.svg";
import figma from "../public/figma.svg";
import html5 from "../public/html5.png";
import javascript from "../public/javascript.png";
import angular from "../public/angular.png";
import Button from "../components/button";
import homeDesktop from "../components/homeDesktop";
import portafoliodos from "../public/portafoliodos.jpeg";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { FaCode, FaFigma, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FaTriangleExclamation,
  FaUpDownLeftRight,
  FaUpRightFromSquare,
} from "react-icons/fa6";
import IconCard from "@/components/iconCard";
import { iconData } from "../components/iconData";
import { iconsTools } from "@/app/data/iconTools";
import { imagesGroup1, imagesGroup2 } from "@/components/imagenData";
import { navDesktop } from "../app/data/navDesktop";
import NavLinks from "@/components/navLinks";
import MenuBurger from "@/components/menuBurger";
import HamburgerMenu from "@/components/menuBurger";
import AvatarImage from "@/components/avatarImagen";
import HomeDesktop from "../components/homeDesktop";
import HomeMobile from "@/components/homeMobile";
import ServiceCard from "@/components/serviceCards";
import { services } from "./data/servicesCards";
import ProjectServices from "@/components/projectsCards";
import { useSectionRefs } from "../app/data/refPage";
import ProjectCards from "@/components/projectsCards";

export default function Home() {
  //funcion para modal tecnologias
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const icons = iconsTools;

  //Es para los skills
  const renderIconGroup = (start: number, end: number) => (
    <div className="flex flex-row justify-center lg:gap-x-8 lg:w-full w-[100%] sm:h-[100%] mt-4 lg:mt-4 gap-2 text-[20%] lg:text-xs">
      {icons.slice(start, end).map((item, index) => (
        <IconCard
          key={index}
          src={item.src}
          alt={item.alt}
          label={<span className="hidden sm:block">{item.label}</span>}
        />
      ))}
    </div>
  );
  //descarga CV
  const downloadCV = () => {
    const link = document.createElement("a") as HTMLAnchorElement;
    link.href = "/CV-NicoleAburto.pdf";
    link.download = "/CV-NicoleAburto.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  //Icon data RRSS
  <div>
    {iconData.map(({ icon, link }) => (
      <a href={link} target="_blank" rel="noopener noreferrer" key={link}>
        {icon}
      </a>
    ))}
  </div>;

  //Para burgerMenu
  const handleLinkClickNav = (ref: React.RefObject<HTMLElement>, section: string) => {
    if (window.innerWidth <= 768) {
      // En pantallas móviles (ajusta el ancho según necesites)
      ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      // En desktop scroll normal al inicio de la sección
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  //Esconde el burgerMenu
  const hiddenMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Desplaza para abouts

  const goToDownAbout = useCallback(() => {
    if (sectionRefs.aboutRef.current) {
      sectionRefs.aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const sectionRefs = useSectionRefs();

  return (
    <main className="flex flex-col justify-between p-12 pt-10 lg:pt-0 pb-2 bg-scroll bg-cover bg-center font-roboto scroll-smooth overflow-y-scroll h-screen">
      {/* Nav */}
      <nav className="flex flex-row text-white w-[93%] mx-auto h-[10%] items-center fixed z-50">
        {/* Menu burger */}
        <HamburgerMenu
          isMenuOpen={isMenuOpen}
          hiddenMenu={hiddenMenu}
          handleLinkClick={handleLinkClickNav}
          homeRef={sectionRefs.homeRef}
          aboutRef={sectionRefs.aboutRef}
          servicesRef={sectionRefs.servicesRef}
          skillsRef={sectionRefs.skillsRef}
          projectsRef={sectionRefs.projectsRef}
          contactRef={sectionRefs.contactRef}
          className={`md:hidden ${isMenuOpen ? "justify-start" : ""}`} 
        />

        {/* NAV PANTALLA GRANDE */}
        <div
          className={`flex flex-row space-x-4 items-center justify-between ${
            isMenuOpen ? "hidden" : "md:flex"
          } ${!isMenuOpen ? " flex justify-center" : ""}`} 
        >
          <NavLinks contactRef={sectionRefs.contactRef} />
        </div>
      </nav>

      {/* Home Section */}
      <section ref={sectionRefs.homeRef} id="home">
        <div className="block lg:hidden">
          <HomeMobile goToDownAboutProps={goToDownAbout} />
        </div>

        {/* Vista Desktop: visible desde lg en adelante */}
        <div className="hidden lg:block">
          <HomeDesktop goToDownAboutProps={goToDownAbout} />
        </div>
      </section>

      {/* About Section */}
      <section
        ref={sectionRefs.aboutRef}
        id="about"
        className="flex flex-col lg:flex-row bg-scroll bg-cover bg-center font-roboto lg:mt-20 lg:mb-20 scroll-mt-20"
      >
        <div className="flex flex-col lg:w-1/2 lg:px-8 lg:py-0 mt-4 lg:mt-1">
          {/* Título */}
          <div className="my-8 leading-tight order-1 sm:order-1">
            <h1 className="text-gradient font-extrabold text-h1 md:text-h1-md lg:text-h1-lg text-white uppercase mt-6">
              THERE IS ALL...
            </h1>
            <h1 className="text-gradient font-extrabold text-h1 md:text-h1-md lg:text-h1-lg text-white uppercase"></h1>
          </div>

          {/* Texto */}
          <div className="order-2 sm:order-2  lg:w-[100%] pt-6">
            <p className="font-roboto font-extralight text-[16px] lg:text-[20px] text-white leading-relaxed">
              Front-end developer passionate about creating modern and
              functional interfaces. I focus on clean code and best practices to
              build scalable and efficient applications. For me, development is
              the perfect mix of creativity and logic, where every line of code
              tells a story.I like to take on new challenges and constantly
              learn from a team. Outside of programming, Im a big fan of anime
              and music. If you are looking for someone curious and with
              dedication to add value to your team, lets get connected! 🚀
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
        ref={sectionRefs.servicesRef}
      >
        <div className="relative mt-16 text-right ml-auto">
          <h1 className="font-extrabold text-h2 md:text-h2-md lg:text-h2-lg text-white uppercase relative sm:mb-8">
            WHAT CAN I DO...
          </h1>
        </div>

        {/* cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:gap-3 lg:p-4 sm:p-6 sm:ml-4 sm:pr-0">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={sectionRefs.skillsRef}
        className="flex flex-col items-center justify-center bg-scroll bg-cover bg-center font-roboto text-white mt-10 mb-10 h-[600px] scroll-mt-20"
      >
        <h1 className="font-extrabold text-gradient-title text-h1 md:text-h1-md lg:text-h2-lg uppercase text-center mb-4">
          SKILLS
        </h1>
        <p className="lg:mt-4 text-center text-p md:text-p-md lg:text-p-lg font-thin mb-6">
          We put your ideas and therefore your wishes in the form of a unique
          web project that inspires you and your customers. The most important
          thing is the adaptation to different types of projects and challenges.
        </p>

        {/* Versión Desktop */}
        <div className="hidden sm:flex flex-col items-center lg:h-[600px] lg:w-full lg:text-sm sm:h-[200px]">
          {renderIconGroup(0, 6)}
          {renderIconGroup(6, 12)}
        </div>

        {/* Versión Mobile */}
        <div className="sm:hidden flex flex-col items-center lg:h-[600px] lg:w-full lg:text-sm sm:h-[200px] mt-6">
          {renderIconGroup(0, 4)}
          {renderIconGroup(4, 8)}
          {renderIconGroup(8, 12)}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={sectionRefs.projectsRef}
        className="text-white scroll-mt-20 mt-16"
      >
        <h1 className="text-white font-extrabold text-h1 md:text-h1-md lg:text-h2-lg uppercase mt-6 mb-2">
          PROJECTS
        </h1>
        <div className="mt-6"> </div>
        {/* Contenido projects */}
        <ProjectCards></ProjectCards>
      </section>

      {/* Contact Section */}
      <section
        ref={sectionRefs.contactRef}
        id="contact"
        className="mt-20 scroll-mt-10 relative"
      >
        {/* Contenedor principal */}
        <div className="relative flex flex-col bg-black w-full min-h-[80vh] justify-center items-center space-y-20 sm:h-full">
          {/* Pseudo-elemento para el borde en mobile y desktop */}
          <div className="absolute inset-0 border border-zinc-800 bg-zinc-800 bg-opacity-40 sm:border-zinc-800 sm:bg-opacity-20"></div>

          {/* Texto principal */}
          <div className="text-h1 md:text-h1-md lg:text-h1-lg font-thin text-center text-white sm:text-left sm:ml-6 z-10">
            Ready to bring your ideas to life?
          </div>

          {/* Botón de descarga */}
          <div className="flex justify-center z-10">
            <Button
              buttonText="DOWNLOAD CV"
              className="bg-gradient-to-b from-[#FA5252] to-[#DD2476] hover:bg-white shadow-[4px_4px_0px_#FFFFFF] text-white font-thin py-4 px-8 w-48"
              onClick={downloadCV}
            />
          </div>

          {/* Iconos sociales */}
          <div className="justify-center flex flex-row space-x-14 z-10">
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
      {/* Footer Section */}
      <footer className="text-zinc-700 sm:text-zinc-700 flex justify-center mt-4 mb-1 sm:ml-2 text-xs sm:text-base">
        © 2025 All rights reserved by Nicole Aburto ·
      </footer>
    </main>
  );
}
