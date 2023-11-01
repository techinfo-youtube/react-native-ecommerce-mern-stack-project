import express from "express";
import { isAuth } from "./../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  deleteProductImageController,
  getAllProductsController,
  getSingleProductController,
  updateProductController,
  updateProductImageController,
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

// UPDATE PRODUCT
router.put("/:id", isAuth, updateProductController);

// UPDATE PRODUCT IMAGE
router.put("/image/:id", isAuth, singleUpload, updateProductImageController);

// delete product image
router.delete("/delete-image/:id", isAuth, deleteProductImageController);

// delete product
router.delete("/delete/:id", isAuth, deleteProductController);

export default router;
