import { useEffect, useState } from "react";
import "./TestimonialCard.css";

interface ProductImageItem {
  id: number;
  thumbnail: string;
}

function TestimonialCard() {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=9");
        const data = await response.json();
        const images = (data.products ?? [])
          .map((product: ProductImageItem) => product.thumbnail)
          .filter(Boolean)
          .slice(0, 9);

        setGalleryImages(images);
      } catch {
        setGalleryImages([]);
      }
    };

    fetchGalleryImages();
  }, []);

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
        {galleryImages.length > 0
          ? galleryImages.map((image, index) => (
              <img
                key={`${image}-${index}`}
                src={image}
                alt={`Gallery ${index + 1}`}
              />
            ))
          : Array.from({ length: 9 }).map((_, index) => (
              <img
                key={`fallback-${index}`}
                src="/images/testimonial user.png"
                alt={`Gallery ${index + 1}`}
              />
            ))}
      </div>
    </section>
  );
}

export default TestimonialCard;
