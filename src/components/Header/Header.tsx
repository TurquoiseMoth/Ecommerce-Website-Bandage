import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/store";
import { selectCartItems } from "../../features/cart/cartSlice";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useAppSelector(selectCartItems);
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
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
          <span>◎</span>
          <span>▶</span>
          <span>●</span>
          <span>♥</span>
        </div>
      </div>

      <nav className="main-nav">
        <a href="/" className="main-nav__logo">
          Bandage
        </a>

        <div className="main-nav__links">
          <a href="/">Home</a>

          <a href="/shop" className="main-nav__shop">
            Shop <span>⌄</span>
          </a>

          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
          <a href="/pages">Pages</a>
        </div>

        <div className="main-nav__actions">
          <a href="/login">♙ Login / Register</a>

          <button type="button" aria-label="Search">
            ⌕
          </button>

          <Link to="/cart" className="main-nav__cart" aria-label="Shopping cart">
            🛒
            <span>{cartCount}</span>
          </Link>

          <button type="button" aria-label="Wishlist">
            ♡
            <span>1</span>
          </button>
        </div>

        <button
          type="button"
          className="main-nav__menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "×" : "⋮"}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-menu__links" aria-label="Mobile navigation">
            <a href="/" onClick={closeMenu}>
              Home
            </a>
            <a href="/shop" onClick={closeMenu}>
              Shop <span>⌄</span>
            </a>
            <a href="/about" onClick={closeMenu}>
              About
            </a>
            <a href="/blog" onClick={closeMenu}>
              Blog
            </a>
            <a href="/contact" onClick={closeMenu}>
              Contact
            </a>
            <a href="/pages" onClick={closeMenu}>
              Pages
            </a>
          </nav>

          <div className="mobile-menu__actions">
            <a href="/login" onClick={closeMenu}>
              ♙ Login / Register
            </a>

            <button type="button" aria-label="Search">
              ⌕
            </button>

            <Link
              to="/cart"
              className="mobile-menu__cart"
              aria-label="Shopping cart"
              onClick={closeMenu}
            >
              🛒
              <span>{cartCount}</span>
            </Link>

            <button type="button" aria-label="Wishlist">
              ♡
              <span>1</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
