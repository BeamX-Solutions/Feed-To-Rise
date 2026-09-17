import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/BrandMark";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Impact", path: "/impact" },
  { name: "Get Involved", path: "/involve" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

/* Desktop link: an orange rule wipes in from the left on hover and stays put
   on the active route. Motion is opt-out via motion-reduce. */
const desktopLink =
  "relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ease-out " +
  "after:absolute after:bottom-1 after:left-4 after:right-4 after:h-[2px] after:origin-left " +
  "after:rounded-full after:bg-primary after:transition-transform after:duration-300 after:ease-out " +
  "motion-reduce:transition-none motion-reduce:after:transition-none motion-reduce:hover:transform-none";

/* Mobile link: a lead-coloured tick grows beside the label and the row slides. */
const mobileLink =
  "relative block rounded-lg px-4 py-3 text-base font-semibold transition-all duration-200 ease-out " +
  "before:absolute before:left-0 before:top-1/2 before:w-[3px] before:-translate-y-1/2 before:rounded-full " +
  "before:bg-primary before:transition-all before:duration-300 before:ease-out " +
  "motion-reduce:transition-none motion-reduce:before:transition-none motion-reduce:hover:transform-none";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <BrandMark />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${desktopLink} ${
                  isActive(link.path)
                    ? "text-primary-ink after:scale-x-100"
                    : "text-secondary/75 after:scale-x-0 hover:-translate-y-0.5 hover:text-secondary hover:after:scale-x-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              asChild
              variant="default"
              size="default"
              className="rounded-full px-6 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:transform-none"
            >
              <Link to="/involve">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-2 text-secondary transition-colors duration-200 hover:bg-muted lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block transition-transform duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border animate-fade-in">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`${mobileLink} ${
                    isActive(link.path)
                      ? "bg-primary/10 text-primary-ink before:h-6"
                      : "text-secondary/80 before:h-0 hover:translate-x-1 hover:bg-muted hover:text-secondary hover:before:h-6"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  asChild
                  variant="default"
                  className="w-full rounded-full transition-all duration-200 ease-out hover:shadow-lg hover:shadow-primary/30 motion-reduce:transition-none"
                  size="lg"
                >
                  <Link to="/involve" onClick={() => setIsOpen(false)}>
                    Donate Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
