import { useState } from "react";
import type { Product } from "../../types/product";
import "./ProductGallery.css";

interface ProductGalleryProps {
  product: Product;
}

function ProductGallery({ product }: ProductGalleryProps) {
  const images = product.images?.length ? product.images : [product.thumbnail];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentImage = images[selectedIndex];

  const goToImage = (index: number) => {
    const next = (index + images.length) % images.length;
    setSelectedIndex(next);
  };

  return (
    <div className="product-gallery">
      <div className="main-image-wrapper">
        <img
          src={currentImage}
          alt={product.title}
          className="main-image"
        />

        {images.length > 1 && (
          <>
            <button
              className="nav-arrow nav-arrow--left"
              aria-label="Previous image"
              onClick={() => goToImage(selectedIndex - 1)}
            >
              &lt;
            </button>
            <button
              className="nav-arrow nav-arrow--right"
              aria-label="Next image"
              onClick={() => goToImage(selectedIndex + 1)}
            >
              &gt;
            </button>
          </>
        )}
      </div>

      <div className="thumbnail-list">
        {images.map((img: string, idx: number) => (
          <img
            key={idx}
            src={img}
            alt={`${product.title} thumbnail ${idx + 1}`}
            className={`thumbnail ${currentImage === img ? "active" : ""}`}
            onClick={() => setSelectedIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
