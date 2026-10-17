import { Link } from "react-router-dom";

function Cart({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>

          <h1>Your cart is empty</h1>

          <p>
            Looks like you haven't added anything to your
            cart yet.
          </p>

          <Link to="/" className="continue-button">
            Start Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-header">
        <div>
          <p className="section-label">YOUR SELECTION</p>
          <h1>Shopping Cart</h1>
        </div>

        <span className="cart-items-count">
          {totalItems} {totalItems === 1 ? "item" : "items"}
        </span>
      </div>

      <div className="cart-layout">
        {/* Cart Items */}
        <section className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="cart-item-details">
                <span>{item.category}</span>

                <h3>{item.title}</h3>

                <p className="cart-item-price">
                  ${item.price.toFixed(2)}
                </p>

                <div className="quantity-controls">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="cart-item-right">
                <strong>
                  ${(item.price * item.quantity).toFixed(2)}
                </strong>

                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Order Summary */}
        <aside className="order-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span className="free">FREE</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span>Total</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>

          <button className="checkout-button">
            Proceed to Checkout
          </button>

          <Link to="/" className="continue-shopping">
            ← Continue Shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}

export default Cart;