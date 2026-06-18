function ProductCard({ product }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>{product.category}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductCard;