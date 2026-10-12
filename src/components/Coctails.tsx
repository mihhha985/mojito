import { cocktailLists, mockTailLists } from "../data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Coctails() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    })
    tl.from("#c-left-leaf", { x: -200, y: 150, ease: "power3.inOut" })
    tl.from("#c-right-leaf", { x: 300, y: 100, ease: "power3.inOut" })
  });
  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id="c-right-leaf" />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>

          <ul>
            {cocktailLists.map((cocktail) =>
              <li key={cocktail.name}>
                <div className="md:me-28">
                  <h3>{cocktail.name}</h3>
                  <p>{cocktail.country} | {cocktail.detail}</p>
                </div>
                <span>- {cocktail.price}</span>
              </li>
            )}
          </ul>
        </div>

        <div className="loved">
          <h2>Most loved mocktails:</h2>

          <ul>
            {mockTailLists.map((cocktail) =>
              <li key={cocktail.name}>
                <div className="md:me-28">
                  <h3>{cocktail.name}</h3>
                  <p>{cocktail.country} | {cocktail.detail}</p>
                </div>
                <span>- {cocktail.price}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}
