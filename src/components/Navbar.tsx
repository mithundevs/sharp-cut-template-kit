
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#" className="text-2xl font-playfair font-bold text-barber-800">
          The<span className="text-barber-600">Barbers</span>
        </a>

        <nav className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-barber-900 hover:text-barber-600 transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-barber-900 hover:text-barber-600 transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-barber-900 hover:text-barber-600 transition-colors"
          >
            About
          </a>
          <a
            href="#gallery"
            className="text-barber-900 hover:text-barber-600 transition-colors"
          >
            Gallery
          </a>
          <a
            href="#testimonials"
            className="text-barber-900 hover:text-barber-600 transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-barber-900 hover:text-barber-600 transition-colors"
          >
            Contact
          </a>
        </nav>

        <button className="hidden md:block btn-primary">Book Now</button>

        <button
          className="md:hidden text-barber-900 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <a
              href="#home"
              className="text-barber-900 hover:text-barber-600 transition-colors py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-barber-900 hover:text-barber-600 transition-colors py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-barber-900 hover:text-barber-600 transition-colors py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#gallery"
              className="text-barber-900 hover:text-barber-600 transition-colors py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Gallery
            </a>
            <a
              href="#testimonials"
              className="text-barber-900 hover:text-barber-600 transition-colors py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-barber-900 hover:text-barber-600 transition-colors py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <button className="btn-primary self-start mt-4">Book Now</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
