import { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart!`);
  };

  const handleBuyNow = (product) => {
    alert(`Proceeding to checkout for: ${product.title}`);
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <p>
              <strong>{p.title}</strong>
            </p>
            <img src={p.image} alt={p.title} />
            <p>
              <strong>Price:</strong> ${p.price}
            </p>
            <p>
              <strong>Category:</strong> {p.category}
            </p>
            <p>
              <strong>Rating:</strong> {p.rating.rate} ({p.rating.count} reviews)
            </p>
            <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
              {p.description.substring(0, 80)}...
            </p>
            <button onClick={() => handleAddToCart(p)}>Add to Cart</button>
            <button onClick={() => handleBuyNow(p)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
