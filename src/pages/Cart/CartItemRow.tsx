import { Link } from "react-router-dom";
import type { CartItem } from "../../features/cart/cartSlice";
import { useGetProductByIdQuery } from "../../services/productsApi";
import QuantityControl from "../../components/QuantityControl/QuantityControl";
import "./CartItemRow.css";

interface CartItemRowProps {
  item: CartItem;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
}

function CartItemRow({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemRowProps) {
  const { data: product } = useGetProductByIdQuery(item.id);

  const rating = product?.rating ?? 0;
  const inStock = (product?.stock ?? 1) > 0;
  const reviewCount = product?.reviews?.length ?? 0;
  const filledStars = Math.min(5, Math.max(0, Math.round(rating)));

  return (
    <article className="cart-item">
      <div className="cart-item__main">
        <Link to={`/product/${item.id}`} className="cart-item__thumb">
          <img src={item.image} alt={item.title} />
        </Link>

        <div className="cart-item__info">
          <Link to={`/product/${item.id}`} className="cart-item__title">
            {item.title}
          </Link>

          <p
            className={`cart-item__status ${
              inStock
                ? "cart-item__status--in"
                : "cart-item__status--out"
            }`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </p>

          <div className="cart-item__rating">
            <span className="cart-item__stars" aria-hidden="true">
              <span className="cart-item__stars--filled">
                {"★".repeat(filledStars)}
              </span>
              <span className="cart-item__stars--empty">
                {"☆".repeat(5 - filledStars)}
              </span>
            </span>
            <span className="cart-item__reviews">
              ({reviewCount} Reviews)
            </span>
          </div>
        </div>
      </div>

      <div className="cart-item__qty">
        <QuantityControl
          value={item.quantity}
          onDecrease={() => onDecrease(item.id)}
          onIncrease={() => onIncrease(item.id)}
        />
      </div>

      <div className="cart-item__price-container">
        <div className="cart-item__price">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
        <div className="cart-item__price-calc">
          ${item.price.toFixed(2)} x {item.quantity} items
        </div>
      </div>

      <button
        type="button"
        className="cart-item__remove"
        onClick={() => onRemove(item.id)}
      >
        <span className="cart-item__remove-icon" aria-hidden="true">
          🗑
        </span>
        Remove
      </button>
    </article>
  );
}

export default CartItemRow;
