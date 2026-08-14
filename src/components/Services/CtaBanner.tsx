import './CtaBanner.css';

function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner__container">
        {/* Real <img> element so the photo renders on all devices/browsers.
            CSS background-image alone can fail to paint on mobile when
            background-size behaves unexpectedly with dynamic heights. */}
        <img
          src="/images/kitchen-utensils.jpg"
          alt="Kitchen utensils lifestyle shot"
          className="cta-banner__bg-img"
          loading="lazy"
        />

        <div className="cta-banner__content">
          <span className="cta-banner__eyebrow">
            Designing Better Experience
          </span>

          <h2 className="cta-banner__title">
            Problems trying to resolve the conflict between
          </h2>

          <span className="cta-banner__price">$16.48</span>

          <p className="cta-banner__description">
            Problems trying to resolve the conflict between the two major
            realms of Classical physics:
          </p>

          <button className="cta-banner__btn" type="button">
            ADD YOUR CALL TO ACTION
          </button>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;