import { useEffect, useRef } from "react";
import { Container } from "../shared/Container";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Numbers = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".number-box",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative mt-12 md:mt-16" ref={sectionRef}>
      <Container className="flex justify-center items-center">
        <div
          className="mx-auto lg:mx-0 p-5 sm:py-8 max-w-5xl rounded-3xl bg-box-bg
                      border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border
                      grid grid-cols-2 md:grid-cols-4"
        >
          {[
            { end: 100, suffix: "+", label: "AI Models Implemented", duration: 2 },
            { end: 250, suffix: "+", label: "Enterprise Clients", duration: 2.5 },
            { end: 99.9, suffix: "%", label: "UpTime Guarantee", duration: 3.0, decimals: 1 },
            { end: 5, suffix: "+", label: "Years Of Innovation", duration: 3.5 },
          ].map((stat, index) => (
            <div className="number-box text-center px-5" key={index}>
              <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
                <CountUp
                  end={stat.end}
                  duration={stat.duration}
                  decimals={stat.decimals || 0}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.suffix}
              </h2>
              <p className="mt-2 text-heading-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
