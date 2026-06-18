import { useState } from "react";

function AddProduct({ addProduct }) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Books");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState("");

  const generateDescription = () => {

    if (name === "") return;

    setDescription(
      `Well maintained ${name} suitable for college students. Available at an affordable price and in good condition.`
    );

  };

  const handleImageUpload = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      price,
      category,
      description,
      contact,
      image
    };

    addProduct(newProduct);

    setName("");
    setPrice("");
    setCategory("Books");
    setDescription("");
    setContact("");
    setImage("");

    alert("Product Added Successfully!");

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

      <input
        type="text"
        placeholder="Contact Number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
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

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="4"
      />

      <button
        type="button"
        className="ai-btn"
        onClick={generateDescription}
      >
        Generate AI Description
      </button>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />

      <button type="submit">
        Add Product
      </button>

    </form>
  );
}

export default AddProduct;