"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
  description: string;
  status: string;
  where: string;
  website: string;
  technologies: string[];
}

const Modal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  images,
  description,
  status,
  where,
  website,
  technologies,
}) => {
  if (!isOpen) return null;

  const [emblaRef] = useEmblaCarousel({ loop: true });

  const [currentImage, setCurrentImage] = useState(0);

  // Fecha o modal ao pressionar a tecla "Esc"
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  // Função para avançar no carrossel
  const nextImage = () =>
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // Função para voltar no carrossel
  const prevImage = () =>
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // Efeito para trocar a imagem automaticamente a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);

    // Limpa o intervalo ao desmontar ou quando a imagem muda manualmente
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div
      className="fixed font-body inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose} // Fecha o modal ao clicar fora do modal
    >
      <div
        className="bg-white w-[90%] max-w-2xl h-[70%] rounded-xl shadow-lg p-6"
        onClick={(e) => e.stopPropagation()} // Evita que clique dentro do modal feche ele
      >
        {/* Título */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-title-sm font-title font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        </div>

        {/* Carrossel de Imagens */}
        <div className="relative w-full h-52 md:h-64 lg:h-72 flex items-center justify-center overflow-hidden">
          {/* Imagem atual */}
          <Image
            src={images[currentImage]}
            alt={`Imagem ${currentImage + 1}`}
            width={800}
            height={500}
            className="w-full h-full object-cover transition-opacity duration-300"
          />

          {/* Botões de Navegação */}
          <button
            className="absolute left-2 p-2 bg-gray-700 text-white rounded-full opacity-80 hover:opacity-100"
            onClick={prevImage}
          >
            ❮
          </button>
          <button
            className="absolute right-2 p-2 bg-gray-700 text-white rounded-full opacity-80 hover:opacity-100"
            onClick={nextImage}
          >
            ❯
          </button>
        </div>

        {/* Descrição */}
        <p className="mt-4 text-gray-700">{description}</p>

        {/* Status */}
        <div className="mt-4">
          <h3 className="font-semibold font-title">Status</h3>
          <p className="text-gray-600">{status}</p>
        </div>

        {/* Where */}
        <div className="mt-4">
          <h3 className="font-semibold font-title">Where</h3>
          <p className="text-gray-600">{where}</p>
        </div>

        {/* Website */}
        <div className="mt-4">
          <h3 className="font-semibold font-title">Link</h3>
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {website}
          </a>
        </div>

        {/* Tecnologias */}
        <div className="mt-4">
          <h3 className="font-semibold">Tecnologias Utilizadas</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-xl text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
