import { useEffect, useState } from "react";

export function useSmoothScroll(sectionIds: string[]) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        // Scroll para baixo
        setCurrentIndex((prevIndex) =>
          Math.min(prevIndex + 1, sectionIds.length - 1),
        );
      } else {
        // Scroll para cima
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [sectionIds]);

  useEffect(() => {
    const section = document.getElementById(sectionIds[currentIndex]);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentIndex, sectionIds]);
}
