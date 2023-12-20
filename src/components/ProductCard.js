import React from "react";
import { toast } from "react-toastify";
import useCartStore from "../stores/CartStore";

const ProductCard = ({ product }) => {
  const { id, title, price, description, category, images } = product;
  const addToCart = useCartStore((state) => state.addToCart);

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
