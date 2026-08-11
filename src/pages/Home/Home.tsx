import { useGetProductsQuery } from "../../services/productsApi";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Header from "../../components/Header/Header";
import CategoryShowcase from "../../components/CategoryShowcase/CategoryShowcase";
import Services from '../../components/Services/Services';
import FeaturedPosts from '../../components/FeaturedPosts/FeaturedPosts';
import "./Home.css";

function Home() {
  const { data } = useGetProductsQuery();
  const products = data?.products ?? [];
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

          <ProductGrid products={products} columns={5} />

          <button className="featured-products__load-more">
            Load More Products
          </button>
        </section>
         <Services />
         <FeaturedPosts/>
      </main>
    </>
  );
}

export default Home;
