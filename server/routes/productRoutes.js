import express from "express";
import { isAuth } from "./../middlewares/authMiddleware.js";
import {
  createProductController,
  getAllProductsController,
  getSingleProductController,
} from "../controllers/productController.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

//rroutes
// GET ALL PRODUCTS
router.get("/get-all", getAllProductsController);

// GET SINGLE PRODUCTS
router.get("/:id", getSingleProductController);

// CREATE PRODUCT
router.post("/create", isAuth, singleUpload, createProductController);

export default router;
