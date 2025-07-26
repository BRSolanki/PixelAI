import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

gsap.registerPlugin(ScrollTrigger);

export const CTA = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".cta-button", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.4,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      });
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pb-20 relative" ref={ctaRef}>
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8 cta-content">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
              Quick Start Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                own AI
              </span>{" "}
              Business
            </h1>

            <Paragraph className="pt-10">
              Leverage our AI-powered platform to revolutionize your digital
              marketing efforts. Get data-driven and automation at your
              fingertips.
            </Paragraph>

            <div className="mx-auto max-w-md sm:w-xl pt-10 dark:text-white">
              <Button className="cta-button transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
