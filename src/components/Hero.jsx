function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <span className="hero__badge">New season</span>
        <h1>Smart shopping starts here.</h1>
        <p>
          Discover premium essentials, fresh arrivals, and everyday favorites
          designed to make your life easier and more stylish.
        </p>

        <div className="hero__actions">
          <button className="primary-btn">Shop Now</button>
          <button className="secondary-btn">Explore Deals</button>
        </div>
      </div>

      <div className="hero__visual" aria-label="Shopping promotion">
        <div className="hero__card">
          <span>Live savings</span>
          <strong>Up to 50%</strong>
        </div>
      </div>
    </section>
  );
}
export default Hero;
