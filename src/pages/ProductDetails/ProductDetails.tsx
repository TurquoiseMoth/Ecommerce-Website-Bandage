import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetProductByIdQuery, useGetProductsQuery } from "../../services/productsApi";
import { useAppDispatch } from "../../app/store";
import { addToCart } from "../../features/cart/cartSlice";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ProductDetails.css";

const DESCRIPTION_FALLBACK =
  "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const { data: product, isLoading, error } = useGetProductByIdQuery(id ?? "1");
  const { data: productsData } = useGetProductsQuery();

  const [activeTab, setActiveTab] = useState<"desc" | "additional" | "reviews">(
    "desc",
  );

  if (isLoading)
    return <div className="loading-spinner">Loading product...</div>;
  if (error || !product)
    return <div className="error-message">Product not found.</div>;

  const description = product.description || DESCRIPTION_FALLBACK;
  const descriptionImage =
    product.images?.[1] || product.images?.[0] || product.thumbnail;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.thumbnail,
        quantity: 1,
      }),
    );
  };

  return (
    <div className="product-details-page">
      <Header />

      <nav className="breadcrumb-container">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">&gt;</span>
          <span className="current">Shop</span>
        </div>
      </nav>

      <section className="product-hero container">
        <ProductGallery product={product} />
        <ProductInfo product={product} onAddToCart={handleAddToCart} />
      </section>

      <section className="product-tabs-section">
        <div className="container">
          <div className="tabs-header">
          <button
            className={`tab-btn ${activeTab === "desc" ? "active" : ""}`}
            onClick={() => setActiveTab("desc")}
          >
            Description
          </button>
          <button
            className={`tab-btn ${activeTab === "additional" ? "active" : ""}`}
            onClick={() => setActiveTab("additional")}
          >
            Additional Information
          </button>
          <button
            className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews <span className="tab-btn__count">(0)</span>
          </button>
        </div>

        <div className="tab-content-wrapper">
          {activeTab === "desc" && (
            <div className="tab-content description-grid">
              <div className="text-col">
                <h3>the quick fox jumps over</h3>
                <p>{description}</p>
                <blockquote className="quote-box">{description}</blockquote>
                <p>{description}</p>
              </div>
              <div className="image-col">
                <img
                  src={descriptionImage}
                  alt={product.title}
                  className="tab-banner-img"
                />
              </div>
            </div>
          )}
          {activeTab === "additional" && (
            <div className="tab-content">
              <p>
                Weight: 0.5 kg | Dimensions: 10 x 10 x 15 cm | Material: Ceramic
              </p>
            </div>
          )}
          {activeTab === "reviews" && (
            <div className="tab-content">
              <p>No customer reviews yet. Be the first to leave a review!</p>
            </div>
            )}
          </div>
        </div>
      </section>

      <section className="bestseller-section container">
        <h2 className="bestseller-title">BESTSELLER PRODUCTS</h2>
        <ProductGrid
          products={(productsData?.products ?? []).slice(0, 10)}
          columns={5}
        />
      </section>

      <section className="companies-section" aria-label="Trusted by companies">
        <div className="companies-section__row">
          <svg
            className="companies-logo"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Hooli"
          >
            <path d="M4.5 3.5h4V11h7V3.5h4v17h-4V13h-7v7.5h-4z" />
          </svg>

          <svg
            className="companies-logo"
            viewBox="0 0 46 24"
            role="img"
            aria-label="Lyft"
          >
            <text
              x="0"
              y="18.5"
              fontFamily="Arial, Helvetica, sans-serif"
              fontWeight="700"
              fontSize="19"
            >
              lyft
            </text>
          </svg>

          <svg
            className="companies-logo"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Robinhood"
          >
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" />
            <line
              x1="16"
              y1="8"
              x2="2"
              y2="22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="17.5"
              y1="15"
              x2="9"
              y2="15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <svg
            className="companies-logo"
            viewBox="0 0 60 24"
            role="img"
            aria-label="Stripe"
          >
            <text
              x="0"
              y="18.5"
              fontFamily="Arial, Helvetica, sans-serif"
              fontWeight="700"
              fontSize="19"
            >
              stripe
            </text>
          </svg>

          <svg
            className="companies-logo"
            viewBox="0 0 64 30"
            role="img"
            aria-label="Amazon Web Services"
          >
            <text
              x="0"
              y="12"
              fontFamily="Arial, Helvetica, sans-serif"
              fontWeight="700"
              fontSize="14"
              letterSpacing="-0.5"
            >
              amazon
            </text>
            <path
              d="M4 17c5 1.6 12 1.6 18 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <text
              x="21"
              y="27.5"
              fontFamily="Arial, Helvetica, sans-serif"
              fontWeight="700"
              fontSize="8"
              letterSpacing="2"
            >
              aws
            </text>
          </svg>

          <svg
            className="companies-logo"
            viewBox="0 0 62 24"
            role="img"
            aria-label="Reddit"
          >
            <text
              x="0"
              y="18.5"
              fontFamily="Arial, Helvetica, sans-serif"
              fontWeight="700"
              fontSize="19"
            >
              reddit
            </text>
          </svg>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetails;
