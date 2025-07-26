import { useEffect, useState } from "react";

interface NavItemProps {
  href: string;
  text: string;
}

export const NavItem = ({ href, text }: NavItemProps) => {
  const [activeHash, setActiveHash] = useState(window.location.hash || "#");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isActive = activeHash === href;

  return (
    <li>
      <a
        href={href}
        className={`relative inline-block py-3 px-2 font-medium ease-linear duration-300
          ${
            isActive
              ? "text-[rgb(var(--heading-1))] after:w-full"
              : "hover:text-[rgb(var(--heading-1))] after:w-0 hover:after:w-full"
          }
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
          after:bg-[rgb(var(--heading-1))] after:transition-all after:duration-300
        `}
      >
        {text}
      </a>
    </li>
  );
};
