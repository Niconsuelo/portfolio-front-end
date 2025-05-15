// src/components/HamburgerMenu.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCircleUser,
  faLayerGroup,
  faCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image"; // Si estás usando Next.js para las imágenes
import avatar from "../public/avatar.jpg"; // Cambia la ruta si es necesario

interface HamburgerMenuProps {
  isMenuOpen: boolean;
  hiddenMenu: () => void;
  handleLinkClick: (ref: React.RefObject<HTMLDivElement>, name: string) => void; // Usa HTMLDivElement aquí
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  className?: string;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isMenuOpen,
  hiddenMenu,
  handleLinkClick,
  homeRef,
  aboutRef,
  servicesRef,
  skillsRef,
  projectsRef,
  contactRef,
  className,
}) => {
  return (
    <div className="relative">
      {/* Las 3 barras del menú hamburguesa */}
      <div
        className={`block md:hidden space-y-2 cursor-pointer z-50`}
        onClick={hiddenMenu}
      >
        <div
          className={`w-8 h-1 bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <div
          className={`w-8 h-1 bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-8 h-1 bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </div>

      {/* Menú lateral cuando está abierto */}
      <div
        className={`fixed inset-0 bg-gradient-to-b from-[#762147fc] to-[#FA5252] flex flex-col items-center justify-center py-4 md:hidden overflow-y-auto transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } z-[9999]`}
      >
        <button
          onClick={hiddenMenu}
          className="absolute top-4 right-4 text-white text-3xl"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="flex flex-col space-y-6 mr-28 mb-2 mt-2">
          <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-b from-[#DD2476] to-[#4543A0] p-[2px]">
          <Image
            src={avatar}
            alt="user profile picture"
            width={116}
            height={116}
            className="rounded-full object-cover w-full h-full"
            priority
          />
          </div>
          <div className="leading-tight">
            <h1 className="font-roboto font-semibold uppercase text-[22px] md:text-[30px] lg:text-[50px] text-white leading-tight">
              Nicole Aburto
            </h1>
            <h2 className="font-roboto font-thin text-[20px] md:text-[30px] lg:text-[50px] text-white mb-2 leading-tight">
              Web developer
            </h2>
          </div>

          {/* Enlaces del menú */}
          <a
          href="#home"
            onClick={() => {
              hiddenMenu(); // Cierra el menú al hacer clic
              handleLinkClick(homeRef, "home");
            }}
            className="relative text-white hover:underline text-lg py-1 font-thin"
          >
            <FontAwesomeIcon icon={faCircleUser} className="mr-4" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#DD2476] to-[#4543A0]"></span>
            HOME
          </a>

          <a
          href="#about"
            onClick={() => {
              hiddenMenu();
              handleLinkClick(aboutRef, "about");
            }}
            className="relative text-white hover:underline text-lg py-1 font-thin"
          >
            <FontAwesomeIcon icon={faCircleUser} className="mr-4" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#DD2476] to-[#4543A0]"></span>
            ABOUT
          </a>

          <a
          href="#services"
            onClick={() => {
              hiddenMenu();
              handleLinkClick(servicesRef, "services");
            }}
            className="relative text-white hover:underline text-lg py-1 font-thin"
          >
            <FontAwesomeIcon icon={faCircleUser} className="mr-4" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#DD2476] to-[#4543A0]"></span>
            SERVICES
          </a>

          <a
          href="#skills"
            onClick={() => {
              hiddenMenu();
              handleLinkClick(skillsRef, "skills");
            }}
            className="relative text-white hover:underline text-lg py-1 font-thin"
          >
            <FontAwesomeIcon icon={faLayerGroup} className="mr-4" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#DD2476] to-[#4543A0]"></span>
            WORKING SKILLS
          </a>

          <a
          href="#projects"
            onClick={() => {
              hiddenMenu();
              handleLinkClick(projectsRef, "projects");
            }}
            className="relative text-white hover:underline text-lg py-1 font-thin"
          >
            <FontAwesomeIcon icon={faCode} className="mr-4" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#DD2476] to-[#4543A0]"></span>
            PROJECTS
          </a>

          <a
          href="#contact"
            onClick={() => {
              hiddenMenu();
              handleLinkClick(contactRef, "contact");
            }}
            className="relative text-white hover:underline text-lg py-1 font-thin"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#DD2476] to-[#4543A0]"></span>
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
