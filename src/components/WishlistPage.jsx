import Navbar from "./Navbar";

function WishlistPage({ wishlist, cart, addCart }) {

  return (
    <>
      <Navbar cartCount={cart.length} />

      <div className="wishlist-page">

        <h1>❤️ My Wishlist</h1>

        {wishlist.length === 0 ? (
          <h3>No products added yet</h3>
        ) : (

          <div className="product-grid">

            {wishlist.map((product) => (

              <div
                className="card"
                key={product.id}
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />

                <div className="card-content">

                  <h3>{product.name}</h3>

                  <p className="price">
                    ₹{product.price}
                  </p>

                  <p>{product.description}</p>

                  <p className="contact">
                    📞 {product.contact}
                  </p>

                  <div className="card-buttons">
                    <button
                      className="cart-btn"
                      onClick={() => addCart(product)}
                    >
                      🛒 Add to Cart
                    </button>
                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
    </>
  );
}

export default WishlistPage;