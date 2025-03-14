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

export default function Header() {
  // const language = useTranslations("Header");

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
    <header className="fixed left-0 top-0 z-40 w-full bg-white dark:bg-black text-black dark:text-white font-poppins">
      <div className="container flex flex-wrap items-center justify-between p-4">
        {/* LOGO */}
        <div className="mx-[5%] w-auto px-2">
          <Link
            href="#hero"
            className="block w-auto sm:w-[15rem] hover:scale-105 transition duration-200"
          >
            <p className="font-black font-title dark:text-white text-xl sm:text-title-sm text-left">
              Erickson
              <span className="font-signature block text-blue text-xl sm:text-title-md">
                Da Veiga
              </span>
            </p>
          </Link>
        </div>

        <nav className=" flex  font-title w-auto space-x-2 md:space-x-9 xl:mr-4 text-sm sm:text-md">
          <Link
            href="#about"
            className="hover:scale-125 transition duration-200"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="hover:scale-125 transition duration-200"
          >
            Skills
          </Link>
          <Link
            href="#portfolio"
            className="hover:scale-125 transition duration-200"
          >
            Portifolio
          </Link>
          {/* <LanguageSwitcher /> */}
        </nav>
      </div>
    </header>
  );
}
