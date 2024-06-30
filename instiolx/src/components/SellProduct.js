import React, { useState } from "react";

const SellProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the product to the database (this would be connected to your API)
    console.log("Product added:", product);
  };

  return (
    <div>
      <h2>Sell a Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Product Description"
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Product Price"
        />
        <button type="submit">Sell Product</button>
      </form>
    </div>
  );
};

export default SellProduct;
