import "./TestimonialCard.css";

const galleryImages = [
  "/images/unsplash_0y8p69vwIYM.png",
  "/images/unsplash_1R1ecHV4i0Y.png",
  "/images/unsplash_6_dx4H4yi1Y.png",
  "/images/unsplash_ah7yIXWrtKs.png",
  "/images/unsplash_GHztzvLLOdQ.png",
  "/images/unsplash_jo40QKbxUP0.png",
  "/images/unsplash_QLGA5Zv3doo.png",
  "/images/unsplash_rhn8ff1G_QY.png",
  "/images/unsplash_UUTOuXqaExk.png",
];

function TestimonialCard() {
  return (
    <section className="testimonial-section">
      {/* LEFT COLUMN: Testimonial Content */}
      <div className="testimonial__content">
        <h2 className="testimonial__eyebrow">What they say about us</h2>

        {/* Avatar moved to the top */}
        <img
          src="/images/testimonial user.png"
          alt="Regina Miles"
          className="testimonial__avatar-img"
        />

        {/* 4 filled stars, 1 empty star */}
        <div className="testimonial__stars" aria-label="4 out of 5 stars">
          ★ ★ ★ ★ ☆
        </div>

        <blockquote>
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </blockquote>

        <div className="testimonial__author">
          <h3>Regina Miles</h3>
          <p>Designer</p>
        </div>
      </div>

      {/* RIGHT COLUMN: 3x3 Image Gallery */}
      <div className="testimonial__gallery">
        {galleryImages.map((image, index) => (
          <img
            key={`${image}-${index}`}
            src={image}
            alt={`Gallery ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialCard;
