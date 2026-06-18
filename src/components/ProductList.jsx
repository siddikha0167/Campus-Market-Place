import ProductCard from "./ProductCard";

function ProductList({ products }) {

  if (products.length === 0) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "30px"
        }}
      >
        No Products Found
      </h2>
    );
  }

  return (
    <div className="product-grid">

      {products.map((product) => (

        <ProductCard
          key={product.id}
          product={product}
        />

      ))}

    </div>
  );
}

export default ProductList;