import { cocktailLists, mockTailLists } from "../data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Coctails() {
  useGSAP(() => {
    gsap.from("#c-left-leaf", {
      scrollTrigger: {
        trigger: "#cocktaiks",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
      x: -200,
      y: 150
    })
    gsap.from("#c-right-leaf", {
      scrollTrigger: {
        trigger: "#cocktaiks",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
      x: 300,
      y: 100
    })
  });
  return (
    <section id="cocktails" className="noisy border-t-2 border-t-fuchsia-300">
      <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id="c-right-leaf" />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>

          <ul>
            {cocktailLists.map((cocktail) =>
              <li>
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
            {mockTailLists .map((cocktail) =>
              <li>
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
