import "./FeaturedPosts.css";

const posts = [
  {
    id: 1,
    image: "/images/fine-bedroom.jpg",
    category: "Google",
    title: "Loudest à la Madison #1",
    description:
      "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
  },
  {
    id: 2,
    image: "/images/fine-kitchen.jpg",
    category: "Trending",
    title: "Loudest à la Madison #2",
    description:
      "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
  },
  {
    id: 3,
    image: "/images/fine-leaf-bedroom.jpg",
    category: "New",
    title: "Loudest à la Madison #3",
    description:
      "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
  },
];

function FeaturedPosts() {
  return (
    <section className="featured-posts">
      <div className="featured-posts__heading">
        <p>Practice Advice</p>

        <h2>Featured Posts</h2>
      </div>

      <div className="featured-posts__grid">
        {posts.map((post) => (
          <article className="post-card" key={post.id}>
            <div className="post-card__image-wrapper">
              <img src={post.image} alt="" className="post-card__image" />

              <span className="post-card__badge">NEW</span>
            </div>

            <div className="post-card__content">
              <h3>{post.title}</h3>

              <div className="post-card__categories">
                <span>Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>

              <p>{post.description}</p>

              <div className="post-card__meta">
                <span className="post-card__date">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#23a6f0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  22 April 2022
                </span>
                <span className="post-card__comments">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#238560"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                  10 comments
                </span>
              </div>

              <a href="/blog">Learn More</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturedPosts;
