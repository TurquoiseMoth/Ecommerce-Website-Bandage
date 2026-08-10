import { useGetProductsQuery } from './services/productsApi';

function App() {
  const { data, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (isError) {
    return <p>Failed to load products.</p>;
  }

  return (
    <main>
      <h1>Products</h1>

      {data?.products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </main>
  );
}

export default App;