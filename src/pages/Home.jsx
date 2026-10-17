import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError("Unable to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">WELCOME TO SHOPEASE</p>

          <h1>
            Find products
            <br />
            <span>you'll love.</span>
          </h1>

          <p className="hero-description">
            Discover quality products at great prices. Browse our
            collection and add your favorites to your cart.
          </p>

          <a href="#products" className="hero-button">
            Explore Products ↓
          </a>
        </div>

        <div className="hero-decoration">
          <div className="hero-circle">
            🛍️
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="products-section" id="products">
        <div className="section-header">
          <div>
            <p className="section-label">OUR COLLECTION</p>
            <h2>Featured Products</h2>
          </div>

          {!loading && !error && (
            <span className="product-count">
              {products.length} products
            </span>
          )}
        </div>

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading products...</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;