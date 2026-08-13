import type { Product } from "../../types/product";
import "./ProductInfo.css";

interface ProductInfoProps {
  product: Product;
  onAddToCart: () => void;
}

const COLOR_OPTIONS = ["#23A6F0", "#2DC071", "#E77C40", "#252B42"];

function ProductInfo({ product, onAddToCart }: ProductInfoProps) {
  const filledStars = Math.min(5, Math.max(0, Math.round(product.rating)));

  return (
    <div className="product-info">
      <h1 className="product-info__title">{product.title}</h1>

      <div className="product-info__rating-row">
        <span className="product-info__stars" aria-hidden="true">
          <span className="product-info__stars--filled">
            {"★".repeat(filledStars)}
          </span>
          <span className="product-info__stars--empty">
            {"☆".repeat(5 - filledStars)}
          </span>
        </span>
        <span className="product-info__reviews-count">
          {product.reviews.length} reviews
        </span>
      </div>

      <div className="product-info__price">${product.price.toFixed(2)}</div>

      <div className="product-info__stock">
        <span className="product-info__stock-label">Availability :</span>{" "}
        {product.stock > 0 ? (
          <span className="product-info__stock-value">In Stock</span>
        ) : (
          <span className="product-info__stock-value product-info__stock-value--out">
            Out of Stock
          </span>
        )}
      </div>

      <hr className="product-info__divider" />

      <div className="product-info__options">
        {COLOR_OPTIONS.map((color) => (
          <span
            key={color}
            className="product-info__color-dot"
            style={{ backgroundColor: color }}
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="product-info__actions">
        <button
          type="button"
          className="product-info__select-options"
          onClick={onAddToCart}
        >
          Select Options
        </button>

        <button
          type="button"
          className="product-info__icon-btn"
          aria-label="Add to wishlist"
        >
          ♡
        </button>

        <button
          type="button"
          className="product-info__icon-btn"
          aria-label="Add to cart"
          onClick={onAddToCart}
        >
          🛒
        </button>

        <button
          type="button"
          className="product-info__icon-btn"
          aria-label="Quick view"
        >
          👁
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
