import type { Product } from '../../types/product';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

interface ProductGridProps {
  products: Product[];
}

function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </section>
  );
}

export default ProductGrid;