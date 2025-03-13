import { useState } from "react";

import Modal from "./Modal";

export default function PortifolioSection() {
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    images: string[];
    description: string;
    status: string;
    where: string;
    website: string;
    technologies: string[];
  } | null>(null);

  const projects = [
    {
      title: "Nhabex",
      images: [
        "/images/nhabex1.png",
        "/images/nhabex2.png",
        "/images/nhabex3.png",
      ],
      description:
        "Sistema de senhas para atendimento em instituições públicas e privadas.",
      status: "Em desenvolvimento",
      where: "ITSolutions",
      website: "https://dev.nhabex.cv",
      technologies: ["Next.js", "Tailwind", "Laravel"],
    },
    {
      title: "Sports Hall Management",
      images: [
        "/images/salle-sport1.png",
        "/images/salle-sport2.png",
        "/images/salle-sport3.png",
      ],
      description:
        "Plataforma de gerenciamento para academias e espaços esportivos.",
      status: "Terminado",
      where: "Pessoal",
      website: "",
      technologies: ["Angular", "Spring Boot", "SQL & PL/SQL"],
    },
  ];

  return (
    <section id="experience" className=" w-full mb-8">
      <div className="container mx-auto px-4 py-8 mt-8">
        <h1 className="text-black text-title-lg font-title  font-extrabold text-center">
          Portifolio
        </h1>

        {/* Cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 bg-gray-light rounded-xl shadow-xl h-96"
              onClick={() => setSelectedProject(project)}
            >
              <div
                className="w-full h-[80%] bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url(${project.images[0]})`,
                }}
              ></div>
              <h2 className="text-black font-body text-center mb-2 mt-2">
                {project.title}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedProject(null)}
          {...selectedProject}
        />
      )}
    </section>
  );
}
