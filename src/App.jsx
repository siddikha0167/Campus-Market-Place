import { useState } from "react";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import SearchBar from "./components/Searchbar";
import CategoryFilter from "./components/Categoryfilter";
import AddProduct from "./components/Addproduct";

import productsData from "./data/products";

import "./styles/App.css";

function App() {

  const [products, setProducts] = useState(productsData);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const addProduct = (product) => {
    setProducts([product, ...products]);
  };

  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;

  });

  return (
    <>
      <Navbar />

      <AddProduct
        addProduct={addProduct}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CategoryFilter
        category={category}
        setCategory={setCategory}
      />

      <ProductList
        products={filteredProducts}
      />

      <Footer />
    </>
  );
}

export default App;