import { useGetProductsQuery } from '../../services/productsApi';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import './Home.css';

function Home() {
  const { data, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return (
      <main className="home">
        <p>Loading products...</p>
      </main>
    );
  }

  if (isError || !data) {
    return (
      <main className="home">
        <p>Unable to load products.</p>
      </main>
    );
  }

  const featuredProducts = data.products.slice(0, 10);

  return (
    <main className="home">
      <section className="featured-products">
        <div className="featured-products__heading">
          <p className="featured-products__eyebrow">
            Featured Products
          </p>

          <h1>Bestseller Products</h1>

          <p>
            Problems trying to resolve the conflict between
            products and design.
          </p>
        </div>

        <ProductGrid products={featuredProducts} />

        <button className="featured-products__load-more">
          Load More Products
        </button>
      </section>
    </main>
  );
}

export default Home;