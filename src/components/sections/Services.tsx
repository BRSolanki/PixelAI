import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { services } from "../../utlis/Service-data";
import { Service } from "../cards/Service";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

gsap.registerPlugin(ScrollTrigger);

// Inline Title component
type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Title = ({ children, className = "" }: TitleProps) => (
  <h2 className={`services-title text-heading-1 text-2xl sm:text-3xl md:text-4xl font-bold ${className}`}>
    {children}
  </h2>
);

export const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(".services-title", {
        opacity: 0,
        y: -40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });

      // Animate each service card
      gsap.from(".service-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef}>
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>Our AI Services</Title>
          <Paragraph>
            Unlock the potential of advanced machine learning, natural language
            processing, and predictive analytics. Our services include:
          </Paragraph>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, key) => (
            <div key={key} className="service-card">
              <Service
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
