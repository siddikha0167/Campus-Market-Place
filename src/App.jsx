import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import SearchBar from "./components/Searchbar";
import CategoryFilter from "./components/Categoryfilter";
import SellPage from "./components/SellPage";
import WishlistPage from "./components/WishlistPage";

import productsData from "./data/products";

import "./styles/App.css";

function Home({
  products,
  search,
  setSearch,
  category,
  setCategory
}) {
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

      <div className="hero">
        <h1>🎓 Campus Marketplace</h1>

        <p>
          Buy and Sell Books, Electronics,
          Stationery and Student Essentials
        </p>
      </div>

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

function App() {

  const [products, setProducts] = useState(() => {

    const saved =
      localStorage.getItem("products");

    return saved
      ? JSON.parse(saved)
      : productsData;

  });

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All");

  useEffect(() => {

    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );

  }, [products]);

  const addProduct = (product) => {

    setProducts([
      product,
      ...products
    ]);

  };

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <Home
              products={products}
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
            />
          }
        />

        <Route
          path="/sell"
          element={
            <SellPage
              addProduct={addProduct}
            />
          }
        />

        <Route
          path="/wishlist"
          element={<WishlistPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;