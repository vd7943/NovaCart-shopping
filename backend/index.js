import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/product.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongodb atlas
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(URI);
  console.log("database connected");
}

// middleware
app.use(cors());
app.use(express.json()); //jo bhi data body se ja rha h usko json m parse krega yeh middleware

// defining routes

app.use("/product", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
