"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, User } from "lucide-react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = useCallback(
    (langCode: string) => {
      const currentLang = pathname.split("/")[1];
      if (currentLang === langCode) return;
      const newPathname = pathname.replace(`/${currentLang}`, `/${langCode}`);
      router.push(newPathname);
    },
    [pathname, router],
  );

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-center w-10 h-10 rounded-full bg-transparent focus:outline-none"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <Globe className="h-7 w-10 text-dark" />
          <span className="sr-only">Mudar linguagem do sistema</span>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-15 bg-white dark:bg-gray-dark rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
            <Button
              className="bg-white dark:bg-gray-dark hover:bg-primary dark:hover:bg-primary"
              onClick={() => switchLanguage("pt")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="16"
                viewBox="0 0 640 480"
              >
                <g fillRule="evenodd" strokeWidth="1pt">
                  <path fill="#ff0000" d="M213.3 0h426.7v480H213.3z" />
                  <path fill="#060" d="M0 0h213.3v480H0z" />
                  <circle cx="213.3" cy="240" r="71.1" fill="#ff0" />
                  <path fill="#fff" d="M184.5 204.7h57.6v70.6h-57.6z" />
                  <path
                    fill="#00f"
                    d="M187.3 210.5h21.4v14.5h-21.4zm25.2 0h21.4v14.5h-21.4zm-25.2 19.3h21.4v14.5h-21.4zm25.2 0h21.4v14.5h-21.4zm-25.2 19.3h21.4v14.5h-21.4zm25.2 0h21.4v14.5h-21.4z"
                  />
                  <path
                    fill="#ff0"
                    d="M213.3 240a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"
                  />
                </g>
              </svg>
              <span className="text-black dark:text-white">PT</span>
            </Button>
            <Button
              className="bg-white dark:bg-gray-dark hover:bg-primary dark:hover:bg-primary"
              onClick={() => switchLanguage("en")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="16"
                viewBox="0 0 640 480"
              >
                <path fill="#fff" d="M0 0h640v480H0z" />
                <path fill="#cf142b" d="M252 0h136v480H252zM0 172h640v136H0z" />
                <image
                  href="/images/languages/reino_unido.png"
                  x="0"
                  y="0"
                  height="480"
                  width="640"
                />
              </svg>
              <span className="text-black dark:text-white">EN</span>
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageSwitcher;
