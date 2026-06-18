import { Link } from "react-router-dom";
import AddProduct from "./Addproduct";

function SellPage({ addProduct }) {
  return (
    <div>

      <div
        style={{
          textAlign: "center",
          marginTop: "20px"
        }}
      >
        <Link to="/">
          <button>
            ← Back To Home
          </button>
        </Link>
      </div>

      <AddProduct addProduct={addProduct} />

    </div>
  );
}

export default SellPage;