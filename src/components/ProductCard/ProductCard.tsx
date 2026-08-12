import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
}
function ProductCard({ product }: ProductCardProps) {
  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;
  return (
    <article className="product-card">
      <Link
        to={`/product/${product.id}`}
        className="product-card__link"
        aria-label={`View ${product.title}`}
      >
        <div className="product-card__image-wrapper">
          <img
            className="product-card__image"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>

        <div className="product-card__content">
          <p className="product-card__category">{product.category}</p>

          <p className="product-card__department">{product.category}</p>

          <h2 className="product-card__title">{product.title}</h2>

          <div className="product-card__prices">
            <span className="product-card__original-price">
              ${product.price.toFixed(2)}
            </span>

            <span className="product-card__discounted-price">
              ${discountedPrice.toFixed(2)}
            </span>
          </div>

        </div>
      </Link>
    </article>
  );
}

export default ProductCard;
