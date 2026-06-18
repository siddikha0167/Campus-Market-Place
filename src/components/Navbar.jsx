import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>🎓 Campus Marketplace</h2>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/sell">
          Sell Product
        </Link>

        <Link to="/wishlist">
          ❤️ Wishlist
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;