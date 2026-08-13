import "./CategoryShowcase.css";

const categories = [
  {
    id: 1,
    title: "Furniture",
    items: 5,
    image: "/images/coconut-plate.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "Furniture",
    items: 5,
    image: "/images/flowerpot.jpg",
    size: "wide",
  },
  {
    id: 3,
    title: "Furniture",
    items: 5,
    image: "/images/lamp.jpg",
    size: "small",
  },
  {
    id: 4,
    title: "Furniture",
    items: 5,
    image: "/images/vases.jpg",
    size: "small",
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

            {category.size === "large" ? (
              <h2>{category.title}</h2>
            ) : (
              <h3>{category.title}</h3>
            )}

            <a href="/shop">Read More</a>
          </div>
        </article>
      ))}
    </section>
  );
}

export default CategoryShowcase;
