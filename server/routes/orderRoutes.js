import express from "express";
import { isAuth } from "./../middlewares/authMiddleware.js";
import { createOrderController } from "../controllers/orderController.js";

const router = express.Router();

//rroutes
// ============== ORDERS ROUTES ==================

// CREATE ORDERS
router.post("/create", isAuth, createOrderController);

// ====================================================================

export default router;
