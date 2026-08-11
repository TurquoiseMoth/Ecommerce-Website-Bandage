import type { Product } from '../../types/product';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

interface ProductGridProps {
  products: Product[];
  columns?: number;
}

function ProductGrid({
  products,
  columns = 4,
}: ProductGridProps) {
  return (
    <section
      className="product-grid"
      style={{
        '--product-grid-columns': columns,
      } as React.CSSProperties}
    >
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