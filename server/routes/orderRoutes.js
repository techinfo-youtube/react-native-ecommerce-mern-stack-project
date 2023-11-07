import express from "express";
import { isAuth } from "./../middlewares/authMiddleware.js";
import {
  createOrderController,
  getMyOrdersCotroller,
  singleOrderDetrailsController,
} from "../controllers/orderController.js";

const router = express.Router();

//rroutes
// ============== ORDERS ROUTES ==================

// CREATE ORDERS
router.post("/create", isAuth, createOrderController);

//  GET ALL ORDERS
router.get("/my-orders", isAuth, getMyOrdersCotroller);

//  GET SINGLE ORDER DETAILS
router.get("/my-orders/:id", isAuth, singleOrderDetrailsController);

// ====================================================================

export default router;
