import express from "express";
import { isAdmin, isAuth } from "./../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  deleteProductImageController,
  getAllProductsController,
  getSingleProductController,
  getTopProductsController,
  productReviewController,
  updateProductController,
  updateProductImageController,
} from "../controllers/productController.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

//rroutes
// ============== PRODUCT ROUTES ==================

// GET ALL PRODUCTS
router.get("/get-all", getAllProductsController);

// GET TOP PRODUCTS
router.get("/top", getTopProductsController);

// GET SINGLE PRODUCTS
router.get("/:id", getSingleProductController);

// CREATE PRODUCT
router.post("/create", isAuth, isAdmin, singleUpload, createProductController);

// UPDATE PRODUCT
router.put("/:id", isAuth, isAdmin, updateProductController);

// UPDATE PRODUCT IMAGE
router.put(
  "/image/:id",
  isAuth,
  isAdmin,
  singleUpload,
  updateProductImageController
);

// delete product image
router.delete(
  "/delete-image/:id",
  isAuth,
  isAdmin,
  deleteProductImageController
);

// delete product
router.delete("/delete/:id", isAuth, isAdmin, deleteProductController);

// REVIEW PRODUCT
router.put("/:id/review", isAuth, productReviewController);

// ====================================================================

export default router;
