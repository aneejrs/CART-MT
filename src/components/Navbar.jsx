import { Link } from "react-router-dom";

function Navbar({ cart }) {
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          Shop<span>Ease</span>
        </Link>

        <nav>
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/cart" className="cart-link">
            🛒 Cart
            <span className="cart-badge">{cartCount}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;