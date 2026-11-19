import { Link } from "react-router-dom";

function Product({ products, handleAddToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <article key={product.id} className="product-card">
          <Link to={`/product/${product.id}`} className="product-card__link">
            <div className="product-card__image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-card__content">
              <span className="product-card__category">
                {product.category}
              </span>
              <h2 className="product-card__title">{product.name}</h2>
              <p className="product-card__price">{product.price} birr</p>
            </div>
          </Link>
          <button
            className="product-card__button"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </article>
      ))}
    </div>
  );
}

export default Product;
