import './CtaBanner.css';

function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner__container">
        <div className="cta-banner__content">
          <span className="cta-banner__eyebrow">
            Designing Better Experience
          </span>

          <h2 className="cta-banner__title">
            Problems trying to resolve the conflict between
          </h2>

          <p className="cta-banner__description">
            Problems trying to resolve the conflict between the two major
            realms of Classical physics:
          </p>

          <span className="cta-banner__price">$16.48</span>

          <button className="cta-banner__btn" type="button">
            ADD YOUR CALL TO ACTION
          </button>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;