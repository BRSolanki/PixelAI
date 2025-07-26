import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "../shared/Container";
import logo from "/assets/icon.svg";
import { NavItem } from "../shared/Navitem";
import { BtnLink } from "../shared/BtnLink";
import { useThemeStore } from "../../store/ThemeStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const navItems = [
  { href: "#", text: "Home" },
  { href: "#services", text: "Services" },
  { href: "#about-us", text: "About Us" },
  { href: "#pricing", text: "Pricing" },
];

export const Navbar = () => {
  const { toggleTheme, theme } = useThemeStore();
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-logo", {
        opacity: 0,
        x: -30,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".nav-links li", {
        opacity: 0,
        y: -20,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      });

      gsap.from(".nav-actions", {
        opacity: 0,
        x: 30,
        duration: 1,
        ease: "power2.out",
        delay: 0.4,
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={navRef}
      className="absolute inset-x-0 top-0 z-50 py-6 backdrop-blur-sm bg-body/80 border-b border-box-border"
    >
      <Container>
        <nav className="flex justify-between items-center relative">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 nav-logo">
            <img src={logo} alt="EdgeAI Logo" className="w-10 h-10" />
            <span className="text-xl font-semibold text-heading-1 tracking-wide">
              PixelAI
            </span>
          </a>

          {/* Nav Links */}
          <ul className="hidden lg:flex items-center gap-8 text-heading-2 text-base font-medium nav-links">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavItem href={item.href} text={item.text} />
              </li>
            ))}
          </ul>

          {/* CTA Button + Theme Toggle */}
          <div className="flex items-center gap-4 nav-actions">
            <BtnLink
              text="Get Started"
              href="#cta"
              className="hidden lg:inline-flex bg-accent hover:bg-accent-dark transition-colors duration-200"
            />

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-box-border hover:bg-muted/40 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              <FontAwesomeIcon
                icon={theme === "dark" ? faSun : faMoon}
                className="w-5 h-5 text-[rgb(var(--heading-1))]"
              />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
