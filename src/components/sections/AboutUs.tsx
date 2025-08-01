import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Info } from "../cards/info";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

gsap.registerPlugin(ScrollTrigger);

export const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.from(".about-img", {
        opacity: 0,
        scale: 0.9,
        x: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      // Title and paragraph animation
      gsap.from(".about-text", {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      // Info cards animation
      gsap.from(".about-info", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about-us" ref={sectionRef}>
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-10 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              src="https://images.pexels.com/photos/8728381/pexels-photo-8728381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="About Our Mission"
              className="about-img w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col about-text space-y-6">
          <Title>About Our AI Solution</Title>
          <Paragraph>
            We are on a mission to empower businesses with transformative AI
            technology. Our team of experts combines industry-leading research
            with innovative algorithms to deliver a platform that adapts to your
            unique needs. Join us and lead the digital revolution in your
            industry.
          </Paragraph>

          <div className="pt-8 grid grid-col-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <div className="about-info">
              <Info
                title="Mission"
                description="Our mission is to use AI for the good of humanity and the planet."
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </Info>
            </div>

            <div className="about-info">
              <Info
                title="Vision"
                description="Our vision is to drive business innovation and growth."
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </Info>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
