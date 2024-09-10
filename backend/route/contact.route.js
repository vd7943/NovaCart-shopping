import express from "express";
import { contactUS } from "../controller/contact.controller.js";
const router = express.Router();

router.post("/", contactUS);

export default router;
