import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { pricingPlans } from "../../utlis/pricing-plans";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { Button } from "../shared/Button";

gsap.registerPlugin(ScrollTrigger);

export const Pricing = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".price-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });

      gsap.utils.toArray<HTMLElement>(".price-count").forEach((el) => {
        const full = el.getAttribute("data-price") || "$0/mo";
        const match = full.match(/([^0-9.]*)(\d+(?:\.\d+)?)([^0-9.]*)/);
        if (!match) return;

        const [, prefix, numberStr, suffix] = match;
        const number = parseFloat(numberStr);
        const decimal = numberStr.includes(".") ? 1 : 0;

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: number,
            duration: 2,
            ease: "power3.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "restart none none none",
            },
            onUpdate: function () {
              el.innerText =
                prefix + Number(el.innerText).toFixed(decimal) + suffix;
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" className="py-5" ref={sectionRef}>
      <Container className="text-center">
        <Title>Pricing</Title>
        <Paragraph>Choose the plan that's right for your business.</Paragraph>
      </Container>
      <Container className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, key) => (
            <div key={key} className="price-card relative group h-full">
              {/* ✨ Glowing Blur Hover Effect */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl scale-105 pointer-events-none bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl" />

              <div className="relative z-10 bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
                <div className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow p-8 flex flex-col h-full relative">
                  {plan.bestValue && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600">
                      Best Value
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-heading-1">
                    {plan.title}
                  </h3>
                  <p
                    className="mt-4 text-4xl font-bold text-heading-1 price-count"
                    data-price={plan.price}
                  >
                    {plan.price}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3 text-left text-heading-3">
                    {plan.features.map((feature, keyFeatures) => (
                      <li key={keyFeatures} className="flex items-center gap-2">
                        <span>✅</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button className="w-full transform transition-transform duration-300 hover:scale-105">
                      Choose Plan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
