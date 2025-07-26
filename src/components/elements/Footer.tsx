import { Container } from "../shared/Container";
import logo from "/assets/icon.svg";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/Navitem";

// Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="relative pt-28 rounded-t-3xl bg-box-bg text-heading-2">
      <Container className="pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="logo" className="w-7 h-7" />
              <span className="text-lg font-semibold text-heading-1">
                PixelAI
              </span>
            </div>
            <p className="text-sm">
              Empowering creators and businesses with smart, AI-driven tools to
              innovate, grow, and automate their digital workflows.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-heading-1">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {navItems.map((item, key) => (
                <li key={key}>
                  <NavItem href={item.href} text={item.text} />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-heading-1">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Email: support@pixelai.io</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: 101 AI Street, Ahmedabad, Gujarat</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-heading-1">
              Follow Us
            </h4>
            <div className="flex gap-4 text-xl text-heading-1">
              <a href="#" className="hover:text-blue-500 transition">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="hover:text-blue-700 transition">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="hover:text-gray-600 transition">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="mt-10 border-t border-box-border pt-6 text-sm text-center text-heading-3">
          © {new Date().getFullYear()} PixelAI. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};
