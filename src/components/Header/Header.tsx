import './Header.css';

function Header() {
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

          <button type="button" aria-label="Shopping cart">
            🛒
            <span>1</span>
          </button>

          <button type="button" aria-label="Wishlist">
            ♡
            <span>1</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;