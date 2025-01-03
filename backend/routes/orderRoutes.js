import express from 'express';
import { createOrder, getOrders, getMyOrders, updateOrderStatus } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', protect, createOrder);
router.get('/', protect, getOrders);
router.get('/myorders', protect, getMyOrders);
router.put('/:id/status', protect, updateOrderStatus);

export default router;