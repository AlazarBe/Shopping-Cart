import { Link, useParams } from "react-router-dom";

function ProductDetails({ products, handleAddToCart }) {
  const { productId } = useParams();
  const product = products.find((item) => item.id === Number(productId));

  if (!product) {
    return (
      <section className="product-details">
        <h1>Product not found</h1>
        <Link to="/">Back to products</Link>
      </section>
    );
  }

  return (
    <div className="product-details">
      <Link to="/" className="product-details__back">
        Back to products
      </Link>
      <article className="product-card product-details__card">
        <div className="product-card__image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-card__content">
          <span className="product-card__category">{product.category}</span>
          <h1 className="product-card__title">{product.name}</h1>
          <p className="product-details__about">{product.about}</p>
          <p className="product-card__price">{product.price} birr</p>
          <button
            className="product-card__button"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </article>
    </div>
  );
}

export default ProductDetails;
