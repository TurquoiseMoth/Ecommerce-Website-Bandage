import './TestimonialCard.css';

function TestimonialCard() {
  return (
    <section className="testimonial-section">
      
      {/* LEFT COLUMN: Testimonial Content */}
      <div className="testimonial__content">
        <h2 className="testimonial__eyebrow">
          What they say about us
        </h2>

        {/* Avatar moved to the top */}
        <img 
          src="https://i.pravatar.cc/150?img=47" 
          alt="Regina Miles" 
          className="testimonial__avatar-img" 
        />

        {/* 4 filled stars, 1 empty star */}
        <div className="testimonial__stars" aria-label="4 out of 5 stars">
          ★ ★ ★ ★ ☆
        </div>

        <blockquote>
          Slate helps you see how many more days you need
          to work to reach your financial goal.
        </blockquote>

        <div className="testimonial__author">
          <h3>Regina Miles</h3>
          <p>Designer</p>
        </div>
      </div>

      {/* RIGHT COLUMN: 3x3 Image Gallery */}
      <div className="testimonial__gallery">
        <img src="https://picsum.photos/200?random=1" alt="Gallery 1" />
        <img src="https://picsum.photos/200?random=2" alt="Gallery 2" />
        <img src="https://picsum.photos/200?random=3" alt="Gallery 3" />
        <img src="https://picsum.photos/200?random=4" alt="Gallery 4" />
        <img src="https://picsum.photos/200?random=5" alt="Gallery 5" />
        <img src="https://picsum.photos/200?random=6" alt="Gallery 6" />
        <img src="https://picsum.photos/200?random=7" alt="Gallery 7" />
        <img src="https://picsum.photos/200?random=8" alt="Gallery 8" />
        <img src="https://picsum.photos/200?random=9" alt="Gallery 9" />
      </div>

    </section>
  );
}

export default TestimonialCard;