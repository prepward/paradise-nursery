import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalPlants = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleDelete = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  return (
    <div className="cart-page">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">
          🛒 Cart ({totalPlants})
        </Link>
      </nav>

      <main className="cart-container">
        <h1>Shopping Cart</h1>

        <div className="cart-summary">
          <h2>Total Plants: {totalPlants}</h2>
          <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <Link to="/plants">
              <button>Continue Shopping</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />

                  <div className="cart-item-details">
                    <h2>{item.name}</h2>

                    <p>
                      Unit Price: ${item.price.toFixed(2)}
                    </p>

                    <div className="quantity-controls">
                      <button
                        onClick={() => handleDecrease(item)}
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => handleIncrease(item)}
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>

                    <p>
                      Item Total: $
                      {(item.price * item.quantity).toFixed(2)}
                    </p>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="cart-actions">
              <Link to="/plants">
                <button>Continue Shopping</button>
              </Link>

              <button onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;
