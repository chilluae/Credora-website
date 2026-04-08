import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  /* Close menu on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (menuOpen && navbarRef.current && !navbarRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  /* Close on ESC */
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      {/* Logo */}
      <div className="logo">Credora 
      </div>

      {/* Center menu */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li onClick={() => setMenuOpen(false)}>Home</li>
        <li onClick={() => setMenuOpen(false)}>Services</li>
        <li onClick={() => setMenuOpen(false)}>About Us</li>
        <li onClick={() => setMenuOpen(false)}>FAQs</li>
      </ul>

      {/* Contact button */}
      <button className="contact-btn">Contact Us</button>

      {/* Hamburger (mobile) */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}