const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 4000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017", { dbName: "productdb" })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const Product = mongoose.model("Product", productSchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/DB.html");
});

app.post("/add", async (req, res) => {
  try {
    const { name, price } = req.body;
    const newUser = await Product.create({ name, price });
    res.send(`<h1>Product added successfully</h1>
       <p> Product name:  ${newUser.name} </p>
       <p>$${newUser.price}</p>
       <a href="/">Go Back</a>
        `);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/read", async (req, res) => {
  try {
    const products = await Product.find({});
    // build a well-formed table: header, tbody, rows, then close
    let productList = `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width:900px; margin:24px auto; padding:16px;">
      <h2 style="margin:0 0 12px 0">Product List</h2>
      <table style="width:100%; border-collapse:collapse;" border="1" cellpadding="10" cellspacing="0">
        <thead style="background:#f6f6f6;">
          <tr>
            <th style="text-align:left; padding:8px">Product Name</th>
            <th style="text-align:right; padding:8px">Price (Rs)</th>
            <th style="text-align:left; padding:8px">ID</th>
          </tr>
        </thead>
        <tbody>
`;

    products.forEach((product) => {
      productList += `
          <tr>
            <td style="padding:8px;">${product.name}</td>
            <td style="padding:8px; text-align:right;">Rs ${product.price.toFixed(
              2
            )}</td>
            <td style="padding:8px;">${product._id}</td>
          </tr>
        `;
    });

    productList += `
        </tbody>
      </table>
      <div style="margin-top:12px"><a href="/">Go Back</a></div>
    </div>`;
    res.send(productList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/update", async (req, res) => {
  try {
    const { id, newName, newPrice } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: { name: newName, price: newPrice } },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).send(`
        <div style="font-family: Arial, Helvetica, sans-serif; max-width:600px; margin:48px auto; padding:24px; text-align:center;">
          <h1 style="color:#ff6b56">Product Not Found</h1>
          <p>No product found with ID: ${id}</p>
          <a href="/" style="color:#ff6b56; text-decoration:none;">Go Back</a>
        </div>
      `);
    }

    res.send(`
      <div style="font-family: Arial, Helvetica, sans-serif; max-width:600px; margin:48px auto; padding:24px;">
        <h1 style="color:#28a745">Product Updated Successfully</h1>
        <p><strong>Product Name:</strong> ${updatedProduct.name}</p>
        <p><strong>Price:</strong> Rs ${updatedProduct.price.toFixed(2)}</p>
        <p><strong>ID:</strong> ${updatedProduct._id}</p>
        <div style="margin-top:20px"><a href="/" style="color:#ff6b56; text-decoration:none;">Go Back</a></div>
      </div>
    `);
  } catch (err) {
    console.error(err);
    res.status(500).send(`
      <div style="font-family: Arial, Helvetica, sans-serif; max-width:600px; margin:48px auto; padding:24px; text-align:center;">
        <h1 style="color:#dc3545">Server Error</h1>
        <p>Failed to update product. Please check the ID and try again.</p>
        <a href="/" style="color:#ff6b56; text-decoration:none;">Go Back</a>
      </div>
    `);
  }
});

app.post("/delete", async (req, res) => {
  try {
    const { id } = req.body;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.send(`<h1>Product deleted successfully</h1>
       <p> Deleted Product name:  ${deletedProduct.name} </p>
       <p>$${deletedProduct.price}</p>
       <a href="/">Go Back</a>
        `);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
