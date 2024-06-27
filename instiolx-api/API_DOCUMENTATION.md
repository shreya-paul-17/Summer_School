# InstiOlx API Documentation

## Endpoints

### Create Product

- **URL:** `/api/products`
- **Method:** `POST`
- **Description:** Adds a new product to the catalog.
- **Request Body:**
  ```json
  {
    "name": "Product Name",
    "description": "Product Description",
    "price": 19.99,
    "category": "Category",
    "images": ["image1.jpg", "image2.jpg"]
  }
  ```
- **Response:**
  ```json
  {
    "_id": "product_id",
    "name": "Product Name",
    "description": "Product Description",
    "price": 19.99,
    "category": "Category",
    "images": ["image1.jpg", "image2.jpg"],
    "createdAt": "2024-06-20T00:00:00.000Z",
    "updatedAt": "2024-06-20T00:00:00.000Z"
  }
  ```

### Get All Products

- **URL:** `/api/products`
- **Method:** `GET`
- **Description:** Retrieves a list of all products.
- **Response:**
  ```json
  [
      {
          "_id": "product_id",
          "name": "Product Name",
          "description": "Product Description",
          "price": 19.99,
          "category": "Category",
          "images": ["image1.jpg", "image2.jpg"],
          "createdAt": "2024-06-20T00:00:00.000Z",
          "updatedAt": "2024-06-20T00:00:00.000Z"
      },
      ...
  ]
  ```

### Get Product by ID

- **URL:** `/api/products/{id}`
- **Method:** `GET`
- **Description:** Retrieves a product by its ID.
- **Response:**
  ```json
  {
    "_id": "product_id",
    "name": "Product Name",
    "description": "Product Description",
    "price": 19.99,
    "category": "Category",
    "images": ["image1.jpg", "image2.jpg"],
    "createdAt": "2024-06-20T00:00:00.000Z",
    "updatedAt": "2024-06-20T00:00:00.000Z"
  }
  ```

### Update Product

- **URL:** `/api/products/{id}`
- **Method:** `PUT`
- **Description:** Updates a product by its ID.
- **Request Body:**
  ```json
  {
    "name": "Updated Product Name",
    "description": "Updated Product Description",
    "price": 29.99,
    "category": "Updated Category",
    "images": ["updated_image1.jpg", "updated_image2.jpg"]
  }
  ```
- **Response:**
  ```json
  {
    "_id": "product_id",
    "name": "Updated Product Name",
    "description": "Updated Product Description",
    "price": 29.99,
    "category": "Updated Category",
    "images": ["updated_image1.jpg", "updated_image2.jpg"],
    "createdAt": "2024-06-20T00:00:00.000Z",
    "updatedAt": "2024-06-20T00:00:00.000Z"
  }
  ```

### Delete Product

- **URL:** `/api/products/{id}`
- **Method:** `DELETE`
- **Description:** Deletes a product by its ID.
- **Response:**
  ```json
  {
    "message": "Product deleted successfully"
  }
  ```

## Error Responses

### 400 Bad Request

- **Description:** Invalid request data.
- **Response:**
  ```json
  {
    "error": "Invalid request data"
  }
  ```

### 404 Not Found

- **Description:** Product not found.
- **Response:**
  ```json
  {
    "error": "Product not found"
  }
  ```

### 500 Internal Server Error

- **Description:** Server encountered an error.
- **Response:**
  ```json
  {
    "error": "Internal server error"
  }
  ```

---

You can save this documentation in a file like `API_DOCUMENTATION.md` and include it in your project repository. This ensures that anyone working with the API can easily understand the available endpoints and their functionalities.
