// ProjectServices.tsx
import { FaCode, FaMobileAlt, FaSearchengin } from "react-icons/fa"; // Importar los iconos
import { projectServices } from "../app/data/projectServices"; // Importar los datos de los servicios
import Button from "./button";
import { useState } from "react";
import ModalProject from "./modalProject";

const ProjectCards: React.FC = ({}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  ); // Estado para guardar el ID del proyecto seleccionado
  const [isModalOpen, setIsModalOpen] = useState(false);

  //maneja el click en el botón de un proyecto
  const handleProjectClick = (id: string) => {
    setSelectedProjectId(id); // Establecemos el ID del proyecto seleccionado
    setIsModalOpen(true);
  };

  //para cerrar el modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProjectId(null); // Limpiamos el ID seleccionado, lo que cerrará el modal
  };

  //busca el proyecto seleccionado por su ID
  const selectedProject = projectServices.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <section id="services" className="text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
        {projectServices.map((service, index) => (
          <div
            key={service.id}
            className="p-6 bg-zinc-800 bg-opacity-40 rounded-lg shadow-md text-center"
          >
            <h3 className="text-xl font-semibold mb-2 mt-4">{service.name}</h3>
            <div className="border-b border-gray-100"></div>
            <p className="text-gray-400 mt-6">{service.description}</p>

            {/* Mostrar el video si existe */}
            {service.video && (
              <div className="mt-6 mb-6">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-lg"
                >
                  <source src={service.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            <div className="mt-6 mb-2">
              {" "}
              {/* Espacio entre el video y el botón */}
              <Button
                buttonText="review"
                className="bg-gradient-to-b from-[#FA5252] to-[#DD2476] hover:from-[#F6F7FB] hover:to-[#F6F7FB] hover:text-[#DD2476] shadow-[4px_4px_0px_#FFFFFF] hover:shadow-[4px_4px_0px_#FA5252] h-7 w-32 text-white font-thin hover:font-small"
                onClick={() => handleProjectClick(service.id)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Si hay un proyecto seleccionado y el modal está abierto, mostramos el Modal */}
      {isModalOpen && selectedProject && (
        <ModalProject project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default ProjectCards;
