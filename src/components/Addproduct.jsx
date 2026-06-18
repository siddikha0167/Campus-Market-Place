import { useState } from "react";

function AddProduct({ addProduct }) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Books");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      price,
      category,
      description
    };

    addProduct(newProduct);

    setName("");
    setPrice("");
    setCategory("Books");
    setDescription("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>

      <h2>Sell Your Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Books</option>
        <option>Electronics</option>
        <option>Stationery</option>
      </select>

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button type="submit">
        Add Product
      </button>

    </form>
  );
}

export default AddProduct;