import express from "express";
import {
  placrOrder,
  placrOrderStripe,
  placrOrderRazorpay,
  allOrders,
  updateStatus,
  userOrders,
  verifyStripe,
  verifyRazorpay,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

//admin features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// payment features
orderRouter.post("/place", authUser, placrOrder);
orderRouter.post("/stripe", authUser, placrOrderStripe);
orderRouter.post("/razorpay", authUser, placrOrderRazorpay);

//User Features 
orderRouter.post("/userorders" , authUser , userOrders)

//verify payment
orderRouter.post("/verifyStripe" , authUser, verifyStripe)
orderRouter.post("/verifyRazorpay" , authUser, verifyRazorpay)

export default orderRouter
