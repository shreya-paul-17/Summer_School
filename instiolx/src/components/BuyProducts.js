import React, { useState, useEffect } from "react";

const BuyProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the database (this would be connected to your API)
    const fetchedProducts = [
      { id: 1, name: "Product 1", description: "Description 1", price: 100 },
      { id: 2, name: "Product 2", description: "Description 2", price: 200 },
    ];
    setProducts(fetchedProducts);
  }, []);

  return (
    <div>
      <h2>Buy Products</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyProducts;
