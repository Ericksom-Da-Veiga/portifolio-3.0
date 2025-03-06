import { FaInstagram, FaGithub } from "react-icons/fa6";
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
export default function Footer() {
  return (
    <footer>
      <div className="bg-blue mt-11 h-[30rem] ">
        <div className="line-footer">
          <div className="flex flex-col items-center text-center py-3">
            {/* <h2 className="text-green font-extrabold font-title justify-start text-center text-title-lg mt-6 mb-6">
              Contato
            </h2> */}
            <h2 className="text-green font-extrabold font-title text-center text-title-lg mt-6 mb-6">
              Diga um olá
            </h2>

            <p className="mb-2 text-white px-10 pt-3 max-w-xl font-normal text-body text-center leading-relaxed">
              {/* Interested in working together? We should queue up a time to chat.
              I’ll buy the coffee.{" "} */}
              Interessado em trabalhar juntos? Devemos agendar um horário para
              conversar. O café é por minha conta.
            </p>
            {/* <p
              type="email"
              className="mb-3 text-white px-10 max-w-xl font-normal text-body text-center leading-relaxed"
            >
              ericksondaveiga10@gmail.com
            </p> */}
            <button className="bg-transparent text-white p-3 rounded-full border-2 border-green hover:border-transparent hover:bg-green transition hover:text-black flex">
              <BiLogoGmail size={20} />
              <p className=" px-2 font-medium">Vamos Conversar</p>
            </button>
            <div className="flex mt-6 justify-center px-6">
              <a
                href="https://www.linkedin.com/in/erickson-da-veiga/"
                className="hover:scale-105 transition px-6"
                target="_blank"
              >
                <button className="bg-transparent">
                  <BiLogoLinkedin size={34} className="text-white " />
                </button>
              </a>
              <a
                href="https://github.com/Ericksom-Da-Veiga"
                className="hover:scale-105 transition px-6"
                target="_blank"
              >
                <button className="bg-transparent">
                  <FaGithub size={34} className="text-white  " />
                </button>
              </a>
              <a
                href="https://www.instagram.com/iamerickdaveiga/"
                className="hover:scale-105 transition px-6"
                target="_blank"
              >
                <button className="bg-transparent">
                  <FaInstagram size={34} className="text-white " />
                </button>
              </a>
            </div>
            <p className="text-gray-400 mt-9">Copyright © 2021 - 2025 </p>
            <p className="text-gray-400 mt-1">
              Handcrafted by me © Erickson Da Veiga
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
