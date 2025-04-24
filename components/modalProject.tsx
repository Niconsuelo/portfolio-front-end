// ModalProject.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { link } from "fs";
import React from "react";
import { FaArrowAltCircleRight, FaBaby, FaGithub } from "react-icons/fa";
import { FaArrowUpRightDots, FaArrowUpRightFromSquare } from "react-icons/fa6";

interface ModalProps {
  project: {
    id: string;
    name: string;
    description: string;
    video: string;
    extraInfo: string;
    technologies: any[];
    linkproject: any[];
  };
  onClose: () => void;
}

const ModalProject: React.FC<ModalProps> = ({ project, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="rounded-2xl w-[500px] sm:w-[200px] md:w-[700px] max-w-full p-6 bg-gradient-to-b  from-[#FA5252] to-[#DD2476]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-4xl text-gray-600 hover:text-[#FA5252] transition-colors"
        >
          &times;
        </button>
        {/* Modal */}
        <div className="py-6 bg-gradient-to-b  from-[#FA5252] to-[#DD2476]">
          {/*  <h2 className="text-2xl font-semibold text-gray-800">{project.name}</h2>  */}
          <h3 className="flex justify-center text-xl text-white font-bold  uppercase mb-4">
            Tecnologías implementadas:
          </h3>
          <div className="border-b-2 border-black-100"></div>
          {/*    <p className="text-lg text-gray-600 ">{project.technologies}</p> */}
          {/* tecnologías */}
          <div className="flex flex-row flex-nowrap gap-4 justify-center sm:flex-wrap">
            {project.technologies.map((tech, index) => (
              <div
                key={index}
                className="flex justify-center items-center space-x-1 w-1/2 sm:w-1/3 lg:w-1/4 mt-6"
              >
                <img src={tech.src} alt={tech.alt} className=" gap-2 w-10 h-10 sm:w-14 sm:h-14 lg:w-14 lg:h-14" />
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="flex justify-center text-lg text-black  border-b-2 border-black uppercase font-bold">
              Link de interés
            </h3>
          </div>

          {/* Información adicional */}

          <div className="flex flex-row justify-center gap-8 mt-6">
            {project.linkproject.map((link, index) => (
              <div key={index} className="">
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={link.icon}
                    className="w-9 h-9 text-black"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
