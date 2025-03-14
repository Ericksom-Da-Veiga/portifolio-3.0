"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="py-12 px-6 mt-0 h-screen w-full flex items-center justify-center snap-start dark:text-white"
    >
      <div className="container mx-[7%]">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* IMAGEM */}
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/images/erickson.png"
              alt="Foto de Erickson Horta Da Veiga"
              width={350}
              height={350}
              className="rounded-[30px] w-[80%] max-w-[250px] md:max-w-[400px]"
            />
          </div>

          {/* TEXTO */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-signature">
              Olá, eu sou
              <span className="block text-blue">Erickson Da Veiga</span>
              um Desenvolvedor de Software
            </h2>
            <p className="mb-4 max-w-2xl text-sm sm:text-base text-justify leading-relaxed">
              Um desenvolvedor apaixonado por tecnologia, sempre buscando inovar
              e criar soluções eficientes, adoro transformar ideias em produtos
              digitais que fazem a diferença.
            </p>
            {/* BOTÕES SOCIAIS */}
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="hover:scale-105 transition">
                <button className="bg-transparent p-3 rounded-full dark:text-white border-2 border-black hover:border-transparent hover:bg-blue transition hover:text-white flex">
                  <FaLinkedin size={20} />
                  <p className=" px-2 font-medium">LinkedIn</p>
                </button>
              </a>
              <a href="#" className="hover:scale-105 transition">
                <button className="bg-transparent p-3 rounded-full dark:text-white border-2 border-black hover:border-transparent hover:bg-blue transition hover:text-white flex">
                  <FaGithub size={20} />
                  <p className=" px-2 font-medium">GitHub</p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
