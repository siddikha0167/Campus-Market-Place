import { useState } from "react";
import Navbar from "./Navbar";

function CartPage({ cart, setCart }) {
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleSelect = (id) => {
    setSelectedIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const handleOrder = () => {
    if (selectedIds.length === 0) {
      alert("Please select at least one product to place your order.");
      return;
    }

    const orderedItems = cart.filter((product) =>
      selectedIds.includes(product.id)
    );

    const contactLines = orderedItems
      .map((product) => `${product.name}: ${product.contact}`)
      .join("\n");

    alert(
      `Order placed successfully!\n\nPlease contact the seller to collect your products:\n${contactLines}`
    );

    setCart((currentCart) =>
      currentCart.filter((product) => !selectedIds.includes(product.id))
    );
    setSelectedIds([]);
  };

  return (
    <>
      <Navbar cartCount={cart.length} />

      <div className="cart-page">
        <h1>🛒 My Cart</h1>

        {cart.length === 0 ? (
          <h3>Your cart is empty.</h3>
        ) : (
          <>
            <div className="cart-grid">
              {cart.map((product) => (
                <div className="card" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />

                  <div className="card-content">
                    <h3>{product.name}</h3>
                    <p className="price">₹{product.price}</p>
                    <p>{product.description}</p>
                    <p className="contact">📞 {product.contact}</p>

                    <label className="cart-select" htmlFor={`select-${product.id}`}>
                      <input
                        id={`select-${product.id}`}
                        type="checkbox"
                        checked={selectedIds.includes(product.id)}
                        onChange={() => toggleSelect(product.id)}
                      />
                      Select to order
                    </label>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-actions">
              <button className="place-order-btn" onClick={handleOrder}>
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CartPage;
