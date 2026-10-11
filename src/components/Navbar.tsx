import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { navLinks, type NavLink } from "../data"

export function Navbar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
        end: "+=200",
        scrub: true,
      }
    });

    navTween.fromTo('nav',
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: 'power1.inOut'
      })
  });

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <span>Velvet Pour</span>
        </a>

        <ul>
          {navLinks.map((link: NavLink) =>
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
