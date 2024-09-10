import express from "express";
import { getProduct } from "../controller/product.controller.js";
const router = express.Router();

router.get("/", getProduct);

export default router;
