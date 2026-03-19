import React, { useMemo, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Storefront from "./pages/Storefront";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import History from "./pages/History";
import Profile from "./pages/Profile";

import "./App.css";

const productsData = [
  {
    id: 1,
    name: "Coconut Coir Fiber",
    price: 60,
    image: "/images/coconut.jpg",
    description: "Natural coir fiber for gardening and eco-friendly applications.",
    category: "Recommended",
  },
  {
    id: 2,
    name: "Coir Mat",
    price: 180,
    image: "/images/mat.jpg",
    description: "Durable coconut coir mat for home and commercial use.",
    category: "Recommended",
  },
  {
    id: 3,
    name: "Coir Rope",
    price: 120,
    image: "/images/rope.jpg",
    description: "Strong, biodegradable rope made from coconut fibers.",
    category: "Recommended",
  },
  {
    id: 4,
    name: "Coir Pot",
    price: 85,
    image: "/images/coconut.jpg",
    description: "Biodegradable planting pot made with coconut coir.",
    category: "Featured",
  },
  {
    id: 5,
    name: "Coir Liner",
    price: 95,
    image: "/images/mat.jpg",
    description: "Natural liner for baskets and planters.",
    category: "Featured",
  },
  {
    id: 6,
    name: "Coir Net",
    price: 250,
    image: "/images/rope.jpg",
    description: "Useful for landscaping and erosion control.",
    category: "Featured",
  },
];

const starterTransactions = [
  {
    id: "NS-1001",
    date: "2026-03-01",
    total: 265,
    payment: "GCash",
    receive: "Delivery",
    status: "Delivered",
  },
  {
    id: "NS-1002",
    date: "2026-03-05",
    total: 180,
    payment: "Cash",
    receive: "Pickup",
    status: "Completed",
  },
];

function App() {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([
    { productId: 1, quantity: 1 },
    { productId: 2, quantity: 1 },
  ]);
  const [transactions, setTransactions] = useState(starterTransactions);
  const [user, setUser] = useState({
    email: "guest@niyosupply.com",
    fullName: "Guest Account",
    address: "Davao City, Philippines",
    mobile: "09123456789",
    signedIn: false,
  });

  const cartItems = useMemo(() => {
    return cart.map((item) => {
      const product = products.find((p) => p.id === item.productId);
      return { ...item, product };
    });
  }, [cart, products]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  function addToCart(productId) {
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === productId);
      if (existing) {
        return prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { productId, quantity: 1 }];
    });
  }

  function increaseQty(productId) {
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQty(productId) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function signIn(email, password) {
    setUser((prev) => ({
      ...prev,
      email: email || prev.email,
      signedIn: true,
      fullName: "NiyoSupply Customer",
    }));
  }

  function register(newUser) {
    setUser({
      ...newUser,
      signedIn: true,
    });
  }

  function placeOrder(details) {
    if (cart.length === 0) return;

    const newTransaction = {
      id: `NS-${Date.now()}`,
      date: new Date().toISOString().slice(0, 10),
      total: cartTotal,
      payment: details.payment,
      receive: details.receive,
      status: "Pending",
    };

    setTransactions((prev) => [newTransaction, ...prev]);
    setCart([]);
  }

  return (
    <HashRouter>
      <div className="app-shell">
        <Navbar user={user} cartCount={cartCount} />

        <main className="page-wrap">
          <Routes>
            <Route
              path="/"
              element={<Home products={products} addToCart={addToCart} />}
            />
            <Route path="/login" element={<Login signIn={signIn} />} />
            <Route path="/register" element={<Register register={register} />} />
            <Route
              path="/store"
              element={<Storefront products={products} addToCart={addToCart} />}
            />
            <Route
              path="/products"
              element={<Products products={products} addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  increaseQty={increaseQty}
                  decreaseQty={decreaseQty}
                  cartTotal={cartTotal}
                />
              }
            />
            <Route
              path="/checkout"
              element={
                <Checkout cartItems={cartItems} cartTotal={cartTotal} placeOrder={placeOrder} />
              }
            />
            <Route path="/history" element={<History transactions={transactions} />} />
            <Route path="/profile" element={<Profile user={user} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;