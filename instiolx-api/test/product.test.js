const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app"); // Exporting the app in app.js
const Product = require("../models/product");

chai.use(chaiHttp);
const { expect } = chai;

describe("Products API", () => {
  // Cleanup the database before each test
  beforeEach(async () => {
    await Product.deleteMany({});
  });

  // Test for creating a product
  it("should create a product", (done) => {
    const product = {
      name: "Sample Product",
      description: "Sample Description",
      price: 10.5,
      category: "Sample Category",
      images: ["img1.jpg", "img2.jpg"],
    };

    chai
      .request(app)
      .post("/api/products")
      .send(product)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("_id");
        expect(res.body).to.have.property("name", product.name);
        expect(res.body).to.have.property("description", product.description);
        expect(res.body).to.have.property("price", product.price);
        expect(res.body).to.have.property("category", product.category);
        expect(res.body)
          .to.have.property("images")
          .that.is.an("array")
          .that.includes("img1.jpg", "img2.jpg");
        done();
      });
  });

  // Test for reading all products
  it("should get all products", (done) => {
    const products = [
      {
        name: "Sample Product 1",
        description: "Sample Description 1",
        price: 10.5,
        category: "Sample Category 1",
        images: ["img1.jpg"],
      },
      {
        name: "Sample Product 2",
        description: "Sample Description 2",
        price: 20.5,
        category: "Sample Category 2",
        images: ["img2.jpg"],
      },
    ];

    Product.insertMany(products).then(() => {
      chai
        .request(app)
        .get("/api/products")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          expect(res.body.length).to.equal(2);
          done();
        });
    });
  });

  // Test for reading a single product by ID
  it("should get a product by ID", (done) => {
    const product = new Product({
      name: "Sample Product",
      description: "Sample Description",
      price: 10.5,
      category: "Sample Category",
      images: ["img1.jpg", "img2.jpg"],
    });

    product.save().then((savedProduct) => {
      chai
        .request(app)
        .get(`/api/products/${savedProduct._id}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("_id", savedProduct._id.toString());
          done();
        });
    });
  });

  // Test for updating a product by ID
  it("should update a product by ID", (done) => {
    const product = new Product({
      name: "Sample Product",
      description: "Sample Description",
      price: 10.5,
      category: "Sample Category",
      images: ["img1.jpg", "img2.jpg"],
    });

    product.save().then((savedProduct) => {
      const updatedProduct = {
        name: "Updated Product",
        description: "Updated Description",
        price: 15.5,
        category: "Updated Category",
        images: ["img3.jpg"],
      };

      chai
        .request(app)
        .put(`/api/products/${savedProduct._id}`)
        .send(updatedProduct)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("name", updatedProduct.name);
          expect(res.body).to.have.property(
            "description",
            updatedProduct.description
          );
          expect(res.body).to.have.property("price", updatedProduct.price);
          expect(res.body).to.have.property(
            "category",
            updatedProduct.category
          );
          expect(res.body)
            .to.have.property("images")
            .that.is.an("array")
            .that.includes("img3.jpg");
          done();
        });
    });
  });

  // Test for deleting a product by ID
  it("should delete a product by ID", (done) => {
    const product = new Product({
      name: "Sample Product",
      description: "Sample Description",
      price: 10.5,
      category: "Sample Category",
      images: ["img1.jpg", "img2.jpg"],
    });

    product.save().then((savedProduct) => {
      chai
        .request(app)
        .delete(`/api/products/${savedProduct._id}`)
        .end((err, res) => {
          expect(res).to.have.status(204);
          done();
        });
    });
  });
});
