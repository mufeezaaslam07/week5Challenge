import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./ProductsPage.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="product-container">
      <h1 className="font-extrabold text-2xl my-6 flex justify-center">
        Shopping
      </h1>
      <div className="cards-container">
        {currentItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {!loading && products.length > itemsPerPage && (
        <div className="pagination-container">
          {Array.from(
            { length: Math.ceil(products.length / itemsPerPage) },
            (_, index) => (
              <button key={index + 1} onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
