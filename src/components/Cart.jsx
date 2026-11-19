function Cart({ carts, handleRemoveFromCart, handleDecrease, handleIncrease }) {
  return (
    <div className="product-list">
      {carts.map((cart) => (
        <article key={cart.id} className="product-card">
          <div className="product-card__image">
            <img src={cart.image} alt={cart.name} />
          </div>

          <div className="product-card__content">
            <span className="product-card__category">{cart.category}</span>
            <h2 className="product-card__title">{cart.name}</h2>
            <h3>Qty: {cart.quantity}</h3>
            <p className="product-card__price">
              {cart.price * cart.quantity} birr
            </p>

            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                className="product-card__button"
                onClick={() => handleDecrease(cart.id)}
              >
                -
              </button>
              <button
                className="product-card__button"
                onClick={() => handleIncrease(cart.id)}
              >
                +
              </button>
            </div>

            <button
              className="product-card__button"
              onClick={() => handleRemoveFromCart(cart.id)}
              style={{ marginTop: "0.75rem" }}
            >
              Remove from Cart
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Cart;
