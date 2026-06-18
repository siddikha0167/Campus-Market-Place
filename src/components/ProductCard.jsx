function ProductCard({ product, wishlist, cart, addWishlist, addCart }) {
  const inWishlist = wishlist.some((item) => item.id === product.id);
  const inCart = cart.some((item) => item.id === product.id);

  return (
    <div className="card">

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

        <p className="category">
          {product.category}
        </p>

        <p>{product.description}</p>

        <p className="contact">
          📞 {product.contact}
        </p>

        <div className="card-buttons">

          <button
            className={`wishlist-btn ${inWishlist ? 'active' : ''}`}
            onClick={() => addWishlist(product)}
          >
            {inWishlist ? '❤️ Wishlist' : '🤍 Wishlist'}
          </button>

          <button
            className={`cart-btn ${inCart ? 'in-cart' : ''}`}
            onClick={() => addCart(product)}
          >
            {inCart ? '✔ In Cart' : '🛒 Add to Cart'}
          </button>

          <button className="contact-btn">
            Contact Seller
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;