import { useState } from "react";
import { useGetProductsQuery } from "../../services/productsApi";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Header from "../../components/Header/Header";
import CategoryShowcase from "../../components/CategoryShowcase/CategoryShowcase";
import Services from "../../components/Services/Services";
import FeaturedPosts from "../../components/FeaturedPosts/FeaturedPosts";
import TestimonialCard from "../../components/Testimonials/TestimonialCard";
import CtaBanner from "../../components/Services/CtaBanner";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

function Home() {
  const [displayCount, setDisplayCount] = useState(10);
  const { data } = useGetProductsQuery();
  const products = data?.products ?? [];

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 10);
  };
  return (
    <>
      <Header />

      <main className="home">
        <CategoryShowcase />

        <section className="featured-products">
          <div className="featured-products__heading">
            <p className="featured-products__eyebrow">Featured Products</p>

            <h1>Bestseller Products</h1>

            <p>
              Problems trying to resolve the conflict between products and
              design.
            </p>
          </div>

          <ProductGrid products={products.slice(0, displayCount)} columns={5} />

          <button
            className="featured-products__load-more"
            onClick={handleLoadMore}
          >
            LOAD MORE PRODUCTS
          </button>
        </section>
        <Services />
        <FeaturedPosts />
        <TestimonialCard />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

export default Home;
