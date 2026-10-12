import { useState, useMemo } from "react";
import { sliderLists } from "../data";

export function Menu() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const totalCocktails = useMemo(() => sliderLists.length, [])
  const goToSlide = (index: number):void => {
    const newIndex = (index + totalCocktails) % totalCocktails;

    setCurrentIndex(newIndex);
  }

  return (
    <section id="menu" aria-labelby="menu-heading">
      <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
      <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />
      <h2 id="menu-heading" className="sr-only">Cocktail Menu</h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((slide, index) => {
          const isActive = index === currentIndex;

          return(
            <button
              key={slide.id}
              role="button"
              onClick={() => goToSlide(index)}
              className={`${isActive ? "text-white border-white" : "text-white/50 border-white/50"}`}
            >
              {slide.name}
            </button>
          )
        })}
      </nav>

      <div className="content">
        <div className="arrow"></div>
      </div>
    </section>
  )
}
