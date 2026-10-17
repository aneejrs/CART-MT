import { useState } from "react";

function ProductCard({ product, addToCart }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1200);
  };

  return (
    <article className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3 className="product-title">
          {product.title}
        </h3>

        <div className="product-rating">
          <span>★</span>
          <strong>{product.rating?.rate || "N/A"}</strong>
          <small>
            ({product.rating?.count || 0} reviews)
          </small>
        </div>

        <div className="product-bottom">
          <span className="product-price">
            ${product.price.toFixed(2)}
          </span>

          <button
            className={`add-button ${added ? "added" : ""}`}
            onClick={handleAddToCart}
          >
            {added ? "✓ Added" : "+ Add"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;