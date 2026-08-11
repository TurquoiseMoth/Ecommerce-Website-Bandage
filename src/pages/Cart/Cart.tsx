import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/store";
import {
  removeFromCart,
  selectCartItems,
  updateQuantity,
} from "../../features/cart/cartSlice";
import { useGetProductsQuery } from "../../services/productsApi";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CartItemRow from "./CartItemRow";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import "./Cart.css";

const DELIVERY_CHARGES = 10;

function Cart() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const { data: productsData } = useGetProductsQuery();

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const total = subtotal + DELIVERY_CHARGES;

  const handleIncrease = (id: number) => {
    const item = items.find((cartItem) => cartItem.id === id);
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  const handleDecrease = (id: number) => {
    const item = items.find((cartItem) => cartItem.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart-page">
      <Header />

      <nav className="cart-breadcrumb">
        <div className="cart-container">
          <Link to="/">Home</Link>
          <span className="cart-breadcrumb__separator">&gt;</span>
          <Link to="/shop">Shop</Link>
          <span className="cart-breadcrumb__separator">&gt;</span>
          <span className="cart-breadcrumb__current">Shopping Cart</span>
        </div>
      </nav>

      <main className="cart-main">
        <div className="cart-container">
          {items.length === 0 ? (
            <section className="cart-empty">
              <h1 className="cart-empty__title">Your cart is empty</h1>
              <p className="cart-empty__text">
                Looks like you haven't added any products yet.
              </p>
              <Link to="/" className="cart-empty__link">
                Continue Shopping
              </Link>
            </section>
          ) : (
            <>
              <h1 className="cart-title">Shopping Cart</h1>

              <div className="cart-layout">
                <section className="cart-items">
                  <div className="cart-items__header">
                    <span>Item Details</span>
                    <span>Quantity</span>
                    <span>Price</span>
                  </div>

                  <div className="cart-items__list">
                    {items.map((item) => (
                      <CartItemRow
                        key={item.id}
                        item={item}
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        onRemove={handleRemove}
                      />
                    ))}
                  </div>
                </section>

                <aside className="cart-summary">
                  <h2 className="cart-summary__title">Order Summary</h2>

                  <div className="cart-summary__row">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="cart-summary__row">
                    <span>Delivery Charges</span>
                    <span>${DELIVERY_CHARGES.toFixed(2)}</span>
                  </div>

                  <div className="cart-summary__row cart-summary__row--total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <button type="button" className="cart-summary__checkout">
                    Proceed to Checkout
                  </button>

                  <div className="cart-summary__payments" aria-hidden="true">
                    <span>VISA</span>
                    <span>mc</span>
                    <span>PAYPAL</span>
                    <span>AMEX</span>
                    <span>G-PAY</span>
                  </div>
                </aside>
              </div>

              <section className="cart-related">
                <h2 className="cart-related__title">PRODUCTS RELATED TO ITEMS IN YOUR CART</h2>
                <ProductGrid
                  products={(productsData?.products ?? []).slice(0, 8)}
                  columns={4}
                />
              </section>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Cart;
