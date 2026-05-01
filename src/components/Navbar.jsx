import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-secondary sticky top-0 z-1000 shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="font-display text-2xl font-black text-primary tracking-tight">
          Shivan
        </Link>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl bg-none border-none cursor-pointer"
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <ul
          className={`fixed md:static left-0 top-16 md:top-0 w-full md:w-auto bg-secondary md:bg-transparent flex flex-col md:flex-row gap-6 p-4 md:p-0 list-none ${
            isMenuOpen ? 'block' : 'hidden md:flex'
          }`}
        >
          <li>
            <Link
              to="/"
              className="text-white font-medium hover:text-primary transition-colors relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white font-medium hover:text-primary transition-colors relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white font-medium hover:text-primary transition-colors relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
