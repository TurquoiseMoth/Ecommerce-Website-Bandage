import './FeaturedPosts.css';

const posts = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80',
    category: 'Google',
    title: 'Loudest à la Madison #1',
    description:
      'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    category: 'Trending',
    title: 'Loudest à la Madison #2',
    description:
      'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
    category: 'Trending',
    title: 'Loudest à la Madison #3',
    description:
      'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
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
              <img
                src={post.image}
                alt=""
                className="post-card__image"
              />

              <span className="post-card__badge">NEW</span>
            </div>

            <div className="post-card__content">
              <div className="post-card__categories">
                <span>{post.category}</span>
                <span>Trending</span>
              </div>

              <h3>{post.title}</h3>

              <p>{post.description}</p>

              <a href="/blog">Learn More →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturedPosts;