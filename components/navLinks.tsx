// src/components/NavLinks.tsx
import React, { useCallback, useRef } from "react";
import { navDesktop } from "../app/data/navDesktop"; // Importando los datos desde la carpeta `data`
import Button from "./button";
import { NavLinkProps } from "../app/models/navLinksProps";

const NavLinks: React.FC<NavLinkProps> = ({ contactRef }) => {
  const goToDown = useCallback(() => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [contactRef]);

  return (
    <div className="flex flex-row items-center lg:pl-20 lo:mr-20 lg:mr-0 w-full">
      {navDesktop.map((link, index) => (
        <a
          key={index}
          href={`${link.href}`}
          className="hidden md:flex hover:underline text-p1 md:text-p1-md lg:text-p1-lg font-thin text-white lg:flex justify-evenly ml-14 mr-14 lg:mt-4"
        >
          {/* Solo mostrar el texto del enlace sin el icono */}
          {link.text}
        </a>
      ))}

      {/* El botón de contacto */}
      <div className="hidden md:flex items-center text-sm">
        <Button
          buttonText="CONTACT"
          className="flex justify-center items-center bg-gradient-to-b from-[#FA5252] to-[#DD2476] hover:from-[#F6F7FB] hover:to-[#F6F7FB] hover:text-[#DD2476] shadow-[4px_4px_0px_#FFFFFF] hover:shadow-[4px_4px_0px_#FA5252] h-8 w-32 text-white font-thin hover:font-medium lg:mt-4"
          onClick={goToDown}
        />
      </div>
    </div>
  );
};

export default NavLinks;
