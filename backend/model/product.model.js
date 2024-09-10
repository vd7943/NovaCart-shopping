import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  title: String,
  price: Number,
  home: Boolean,
  category: String,
  image: String,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
