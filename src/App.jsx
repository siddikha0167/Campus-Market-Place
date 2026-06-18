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
import CartPage from "./components/CartPage";

import productsData from "./data/products";

import "./styles/App.css";

function Home({
  products,
  search,
  setSearch,
  category,
  setCategory,
  addWishlist,
  addCart,
  wishlist,
  cart
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
      <Navbar cartCount={cart.length} />

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
        wishlist={wishlist}
        cart={cart}
        addWishlist={addWishlist}
        addCart={addCart}
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
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const addWishlist = (product) => {
    const exists = wishlist.find(
      item => item.id === product.id
    );

    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([
        ...wishlist,
        product
      ]);
    }
  };

  const addCart = (product) => {
    const exists = cart.find(
      item => item.id === product.id
    );

    if (!exists) {
      setCart([
        ...cart,
        product
      ]);
    }
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
              addWishlist={addWishlist}
              addCart={addCart}
              wishlist={wishlist}
              cart={cart}
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
          element={
            <WishlistPage
              wishlist={wishlist}
              cart={cart}
              addCart={addCart}
              cartCount={cart.length}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              setCart={setCart}
              cartCount={cart.length}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;