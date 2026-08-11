import './Services.css';

const services = [
  {
    id: 1,
    icon: '📖',
    title: 'Easy Wins',
    description: 'Get your best looking smile now!',
  },
  {
    id: 2,
    icon: '▣',
    title: 'Concrete',
    description: 'Delicate is most focused in helping you discover your most beautiful smile.',
  },
  {
    id: 3,
    icon: '↗',
    title: 'Hack Growth',
    description: 'Overcome any hurdle or any other problem.',
  },
];

function Services() {
  return (
    <section className="services">
      <div className="services__heading">
        <p>Featured Products</p>

        <h2>The Best Services</h2>

        <span>
          Problems trying to resolve the conflict between
        </span>
      </div>

      <div className="services__grid">
        {services.map((service) => (
          <article className="service-card" key={service.id}>
            <div className="service-card__icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;