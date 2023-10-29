import express from "express";
import {
  getAllProductsController,
  getSingleProductController,
} from "../controllers/productController.js";

const router = express.Router();

//rroutes
// GET ALL PRODUCTS
router.get("/get-all", getAllProductsController);

// GET SINGLE PRODUCTS
router.get("/:id", getSingleProductController);

export default router;
