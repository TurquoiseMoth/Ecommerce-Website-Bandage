import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

// ─── Hamburger icon (3 lines = open, X = close) ───────────────────────────────
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`hamburger-icon ${open ? "hamburger-icon--open" : ""}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {/* Three bars that morph into an X via CSS transitions */}
      <rect
        className="bar bar--top"
        x="2"
        y="5"
        width="20"
        height="2"
        rx="1"
        fill="#252b42"
      />
      <rect
        className="bar bar--mid"
        x="2"
        y="11"
        width="20"
        height="2"
        rx="1"
        fill="#252b42"
      />
      <rect
        className="bar bar--bot"
        x="2"
        y="17"
        width="20"
        height="2"
        rx="1"
        fill="#252b42"
      />
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      {/* ── Top promotional bar (desktop only) ── */}
      <div className="top-bar">
        <div className="top-bar__contact">
          <span>☎ (225) 555-0118</span>
          <span>✉ michelle.rivera@example.com</span>
        </div>

        <p className="top-bar__message">
          Follow Us and get a chance to win 80% off
        </p>

        <div className="top-bar__socials">
          <span>Follow Us :</span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src="/icons/instagram.svg"
              alt="Instagram"
              className="social-icon"
            />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <img
              src="/icons/youtube.svg"
              alt="YouTube"
              className="social-icon"
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img
              src="/icons/facebook.svg"
              alt="Facebook"
              className="social-icon"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <img
              src="/icons/twitter.svg"
              alt="Twitter"
              className="social-icon"
            />
          </a>
        </div>
      </div>

      {/* ── Main navigation bar ── */}
      <nav className="main-nav">
        <Link to="/" className="main-nav__logo">
          Bandage
        </Link>

        {/* Desktop links */}
        <div className="main-nav__links">
          <Link to="/">Home</Link>
          <Link to="/shop" className="main-nav__shop">
            Shop <span>⌄</span>
          </Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/pages">Pages</Link>
        </div>

        {/* Desktop actions */}
        <div className="main-nav__actions">
          <Link to="/login" className="main-nav__login">
            <img src="/icons/customer.svg" alt="" className="nav-icon" />
            <span>Login / Register</span>
          </Link>
          <button type="button" aria-label="Search" className="nav-icon-btn">
            <img src="/icons/search.svg" alt="" className="nav-icon" />
          </button>
          <button
            type="button"
            aria-label="Shopping cart"
            className="nav-icon-btn"
          >
            <img src="/icons/cart.svg" alt="" className="nav-icon" />
          </button>
          <button type="button" aria-label="Wishlist" className="nav-icon-btn">
            <img src="/icons/heart.svg" alt="" className="nav-icon" />
            <span className="wishlist-count">1</span>
          </button>
        </div>

        <div className="main-nav__mobile-actions">
          <button
            type="button"
            aria-label="Search"
            className="nav-icon-btn nav-icon-btn--mobile"
          >
            <img src="/icons/search.svg" alt="" className="nav-icon" />
          </button>
          <button
            type="button"
            aria-label="Shopping cart"
            className="nav-icon-btn nav-icon-btn--mobile"
          >
            <img src="/icons/cart.svg" alt="" className="nav-icon" />
          </button>
          <button
            type="button"
            className="main-nav__menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-menu__links" aria-label="Mobile navigation">
          <Link
            to="/"
            onClick={closeMenu}
            className="mobile-menu__link mobile-menu__link--active"
          >
            Home
          </Link>
          <Link to="/shop" onClick={closeMenu} className="mobile-menu__link">
            Product
          </Link>
          <Link to="/about" onClick={closeMenu} className="mobile-menu__link">
            Pricing
          </Link>
          <Link to="/blog" onClick={closeMenu} className="mobile-menu__link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
