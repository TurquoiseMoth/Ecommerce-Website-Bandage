import './CategoryShowcase.css';

const categories = [
  {
    id: 1,
    title: 'Furniture',
    items: 5,
    image:
      'https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp',
    size: 'large',
  },
  {
    id: 2,
    title: 'Furniture',
    items: 5,
    image:
      'https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp',
    size: 'wide',
  },
  {
    id: 3,
    title: 'Furniture',
    items: 5,
    image:
      'https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp',
    size: 'small',
  },
  {
    id: 4,
    title: 'Furniture',
    items: 5,
    image:
      'https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp',
    size: 'small',
  },
];

function CategoryShowcase() {
  return (
    <section className="category-showcase">
      {categories.map((category) => (
        <article
          key={category.id}
          className={`category-card category-card--${category.size}`}
        >
          <img
            src={category.image}
            alt={category.title}
            className="category-card__image"
          />

          <div className="category-card__content">
            <p>{category.items} Items</p>

            <h2>{category.title}</h2>

            <a href="/shop">Read More</a>
          </div>
        </article>
      ))}
    </section>
  );
}

export default CategoryShowcase;