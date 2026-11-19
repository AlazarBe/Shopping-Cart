import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

function App() {
  const [carts, setCarts] = useState([]);

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 45000,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
      about:
        "A versatile laptop for everyday work, study, browsing, and entertainment. Its portable design makes it easy to carry between home, school, and the office, while its full computer capabilities support common productivity tasks.",
    },
    {
      id: 2,
      name: "Headphones",
      price: 1500,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      about:
        "Comfortable headphones for listening to music, watching videos, and joining calls. They provide a personal listening experience at home or on the go and are easy to pair with compatible audio devices.",
    },
    {
      id: 3,
      name: "Keyboard",
      price: 2000,
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      about:
        "A practical keyboard for typing documents, messaging, and using a computer every day. Its familiar layout supports comfortable, efficient input for work, study, and general desktop use.",
    },
    {
      id: 4,
      name: "Mouse",
      price: 800,
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
      about:
        "A simple computer mouse for precise pointer control and comfortable navigation. It is suitable for everyday browsing, office tasks, and interacting with applications on a compatible computer.",
    },
    {
      id: 5,
      name: "Backpack",
      price: 2500,
      category: "Bags",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      about:
        "A handy backpack for carrying daily essentials to school, work, or while traveling. Its reusable carry-all design helps keep personal items together and makes them easier to transport throughout the day.",
    },
    {
      id: 6,
      name: "T-Shirt",
      price: 1000,
      category: "Clothing",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      about:
        "A casual T-shirt suited to relaxed everyday wear. It can be worn on its own or layered with other clothing, making it a versatile choice for errands, social outings, and comfortable time at home.",
    },
    {
      id: 7,
      name: "Sneakers",
      price: 3500,
      category: "Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      about:
        "Versatile sneakers designed for comfortable everyday movement. Their casual style pairs easily with a range of outfits and makes them suitable for walking, running errands, and informal occasions.",
    },
    {
      id: 8,
      name: "Water Bottle",
      price: 500,
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
      about:
        "A reusable water bottle for keeping a drink close at hand during the day. Bring it to work, school, or outings as a convenient alternative to single-use drink containers.",
    },
  ];

  function handleAddToCart(product) {
    setCarts((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function handleRemoveFromCart(id) {
    setCarts((prev) => prev.filter((cart) => cart.id !== id));
  }

  function handleDecrease(id) {
    setCarts((prev) =>
      prev.flatMap((cart) => {
        if (cart.id !== id) return [cart];
        if (cart.quantity <= 1) return [];
        return [{ ...cart, quantity: cart.quantity - 1 }];
      }),
    );
  }

  function handleIncrease(id) {
    setCarts((prev) =>
      prev.map((cart) =>
        cart.id === id ? { ...cart, quantity: cart.quantity + 1 } : cart,
      ),
    );
  }

  return (
    <BrowserRouter>
      <Header carts={carts} />
      <div className="app-shell">
        <main className="main-content">
          <Hero />
          <Routes>
            <Route
              path="/"
              element={
                <Product
                  products={products}
                  handleAddToCart={handleAddToCart}
                />
              }
            />
            <Route
              path="/product/:productId"
              element={
                <ProductDetails
                  products={products}
                  handleAddToCart={handleAddToCart}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  carts={carts}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleDecrease={handleDecrease}
                  handleIncrease={handleIncrease}
                />
              }
            />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer__inner">
            <div className="footer__text">
              © 2026 ShopCart. All rights reserved.
            </div>
            <div className="footer__links">
              <a href="#">Privacy</a>
              <a href="#">Support</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
