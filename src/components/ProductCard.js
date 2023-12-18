import React from "react";
import { toast } from "react-toastify";
import { useCart } from "./CartContext";

const ProductCard = ({ product }) => {
  const { id, title, price, description, category, images } = product;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`Added to the cart!`);
  };

  return (
    <div className="product-card">
      <div className="card-image">
        <img src={images[0]} alt={title} />
      </div>

      <div className="card-footer">
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
