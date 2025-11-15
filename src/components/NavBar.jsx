import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="nav">
        <div className="nav-content">
          <Link to="/" className="brand" onClick={closeMenu}>
            🕉️ Saysanskritam
          </Link>
          
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <div className="nav-links nav-links-full">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/blog">Daily Posts</Link>
            <Link to="/slokas">Slokas</Link>
            <Link to="/posters">Posters</Link>
            <Link to="/testimonials">Reviews</Link>
            <Link to="/offerings">Offerings</Link>
            <Link to="/inquiry">Book Session</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/multimedia">Multimedia</Link>
            <Link to="/newsletter">Newsletter</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>🏠 Home</Link>
        <Link to="/about" onClick={closeMenu}>👤 About Me</Link>
        <Link to="/courses" onClick={closeMenu}>📚 Courses</Link>
        <Link to="/blog" onClick={closeMenu}>📝 Daily Posts</Link>
        <Link to="/slokas" onClick={closeMenu}>🙏 Slokas</Link>
        <Link to="/posters" onClick={closeMenu}>🎨 Festival Posters</Link>
        <Link to="/testimonials" onClick={closeMenu}>⭐ Testimonials</Link>
        <Link to="/offerings" onClick={closeMenu}>💼 Offerings</Link>
        <Link to="/inquiry" onClick={closeMenu}>📩 Book Session</Link>
        <Link to="/faq" onClick={closeMenu}>❓ FAQ</Link>
        <Link to="/resources" onClick={closeMenu}>📖 Resources</Link>
        <Link to="/multimedia" onClick={closeMenu}>🎥 Multimedia</Link>
        <Link to="/newsletter" onClick={closeMenu}>📧 Newsletter</Link>
        <Link to="/contact" onClick={closeMenu}>📞 Contact</Link>
      </div>
    </>
  )
}
