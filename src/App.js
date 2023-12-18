import React from "react";
import "./App.css";
import { Bganimation } from "./components/Bganimation";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Blackbar } from "./components/Blackbar";

import { CartProvider } from "./components/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductsPage from "./components/ProductsPage";
import { Note } from "./components/Note";
import { Project } from "./components/Project";
import { Footer } from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <div className="App relative bg-black py-2">
        <div className="relative rounded-3xl bg-white z-1">
          <Navbar />
          <Main />
          <Bganimation />
        </div>
        <div className="absolute w-full z-0">
          <Blackbar />
          <Note />
          <ProductsPage />
          <Project />
          <Footer />
        </div>
      </div>
      <ToastContainer />
    </CartProvider>
  );
}

export default App;
