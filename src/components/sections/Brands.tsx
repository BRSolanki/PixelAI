import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../shared/Container";

gsap.registerPlugin(ScrollTrigger);

// Inline Title component
type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Title = ({ children, className = "" }: TitleProps) => {
  return (
    <h2 className={`text-heading-1 text-2xl sm:text-3xl md:text-4xl font-bold ${className}`}>
      {children}
    </h2>
  );
};

const logos = ["discord", "openai", "paypal", "slack", "spotify", "youtube"];

export const Brands = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Title
      gsap.fromTo(
        ".brands-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%", // Scroll-triggered
            toggleActions: "play none none reset",
          },
        }
      );

      // Animate Logos
      gsap.fromTo(
        ".brand-logo",
        { opacity: 0, scale: 0.85, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef}>
      <Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title className="brands-title"> Trusted by Industry Leaders </Title>
        </div>
        <div className="flex justify-center flex-wrap gap-4 pt-3">
          {logos.map((logo, key) => (
            <div
              key={key}
              className="brand-logo p-4 sm:p-5 rounded-xl bg-body border border-box-border group"
            >
              <img
                src={`/assets/logos/${logo}.png`}
                width="100"
                height="60"
                alt={logo}
                className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-125"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
