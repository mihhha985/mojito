import { useState, useRef } from "react";
import { sliderLists, type SliderItem } from "../data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Menu() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const contentRef = useRef(null)
  const totalCocktails = sliderLists.length;

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 })
    gsap.fromTo(".cocktail img",
      { opacity: 0, xPercent: -100 },
      { opacity: 1, xPercent: 0, duration: 1, ease: "power1.inOut" }
    )
    gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" })
    gsap.fromTo('.details p ', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#menu",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      }
    });

    tl.from("#m-right-leaf", { opacity: 0, xPercent: 100 })
      .from("#m-left-leaf", { opacity: 0, xPercent: -100 })
  }, [currentIndex])

  const getCocktailAt = (indexOffset: number):SliderItem  => {
    return sliderLists[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
  }

  const goToSlide = (index: number):void => {
    const newIndex = (index + totalCocktails) % totalCocktails;

    setCurrentIndex(newIndex);
  }

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1)
  const nextCocktail = getCocktailAt(1)

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
        <div className="arrows">

          <button
            role="button"
            onClick={() => goToSlide(currentIndex -1)}
            className="text-left"
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>

          <button
            role="button"
            onClick={() => goToSlide(currentIndex +1)}
            className="text-left"
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail">
          <img src={currentCocktail.image} alt="cocktail"/>
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
