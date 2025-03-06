"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Link, usePathname, useRouter } from "@/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { useTranslations } from "next-intl";
import { Menu, ChevronDown, ChevronUp, User, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "next-themes";
import LanguageSwitcher from "@/components/language-switcher";

export default function Header2() {
  // const language = useTranslations("Navigation");
  const router = useRouter(); // Instância do roteador

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const usePathName = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // funçao para mudar a lingua
  const pathname = usePathname();
  const routerChange = useRouter();

  const switchLanguage = useCallback(
    (langCode: string) => {
      const currentLang = pathname.split("/")[1];
      if (currentLang === langCode) return;
      const newPathname = pathname.replace(`/${currentLang}`, `/${langCode}`);
      routerChange.push(newPathname);
    },
    [pathname, routerChange],
  );
  return (
    <>
      <header
        className={`header left-0 top-0 z-40 w-full justify-between flex-col items-center text-gray-dark font-poppins`}
      >
        <div className="md:mx-[12%] p-4 flex md:justify-start sm:justify-center ">
          <div className="relative mx-4 flex items-center justify-between ">
            <div className="w-60 max-w-full px-2 xl:mr-12">
              <Link
                href="/"
                className="header-logo block w-[15rem] mt-6 hover:scale-105 transition duration-200"
              >
                <p className="font-black text-white text-title-sm">
                  Erickson <br />
                  <span className="text-primary text-title-md">
                    Horta Da Veiga
                  </span>
                </p>
              </Link>
            </div>

            <div className="flex w-full items-center justify-between px-1">
              <div>
                <nav>
                  <ul className="lg:flex lg:items-center lg:space-x-0 mt-[4%]">
                    <li className="group relative px-[60px]">
                      <Link
                        href="#home"
                        className="text-md flex cursor-pointer lg:inline-flex lg:py-6 hover:text-white hover:scale-105 transition duration-200"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="group relative px-[60px]">
                      <Link
                        href="#about"
                        className={`text-md flex cursor-pointer lg:inline-flex lg:py-6 hover:text-white hover:scale-105 transition duration-200`}
                      >
                        About
                      </Link>
                    </li>
                    <li className="group relative px-[60px]">
                      <Link
                        href="#skills"
                        className={`text-md flex cursor-pointer lg:inline-flex lg:py-6 hover:text-white hover:scale-105 transition duration-200`}
                      >
                        Skills
                      </Link>
                    </li>
                    <li className="group relative px-[60px]">
                      <Link
                        href="#projects"
                        className={`text-md flex cursor-pointer lg:inline-flex lg:py-6 hover:text-white hover:scale-105 transition duration-200`}
                      >
                        Projects
                      </Link>
                    </li>
                    <li className="group relative px-[60px]">
                      <a href="#contatos">
                        <button className="text-black font-medium bg-primary w-[10rem] h-[3rem] rounded-full hover:scale-105 transition duration-200 hover:shadow-[0px_0px_8px_#07fa0f] ">
                          Contacto
                        </button>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
