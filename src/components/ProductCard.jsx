import { useState } from "react";

function ProductCard({ product }) {

  const [liked, setLiked] = useState(false);

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

        <p>
          {product.description}
        </p>

        <p className="contact">
          📞 {product.contact}
        </p>

        <div className="card-buttons">

          <button
            className="wishlist-btn"
            onClick={() =>
              setLiked(!liked)
            }
          >
            {liked ? "❤️ Saved" : "🤍 Wishlist"}
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