import { useRef } from "react"
import { useMediaQuery } from "react-responsive"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import gsap from "gsap"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: 'chars, words' });
    const paragraphSplit = new SplitText(".subtitle", { type: 'lines' });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"))
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.1,
      delay: 1
    });

    gsap.fromTo(".headline-left",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.4, delay: 1.6}
    )

    gsap.fromTo(".headline-right",
      { opacity: 0, x: 100},
      { opacity: 1, x: 0, duration: 0.6, delay: 1.8}
    )

    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: '50% top',
        scrub: true
      }
    })
      .to('.right-leaf', { y: 100 }, 0)
      .to('.left-leaf', { y: -100 }, 0)

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top"
    const video = videoRef.current;

    if (!video) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true
      }
    })

    video.onloadedmetadata = () => {
      tl.to(video, {currentTime: video.duration})
    }

  }, { dependencies: [isMobile], revertOnUpdate: true })

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img
          src="/images/cocktail-left-leaf.png"
          alt="leaf"
          className="left-leaf"
        />
        <img
          src="/images/cocktail-right-leaf.png"
          alt="leaf"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p className="headline-left">Cool. Crisp. Classic</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your senses.
              </p>
              <h4 className="headline-right">View cocktails</h4>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  )
}
