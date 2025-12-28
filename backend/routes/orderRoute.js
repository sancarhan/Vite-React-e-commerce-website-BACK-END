import express from 'express'
import {placeOrder, placeOrderStripe, placeOrderPaypal, allOrders, userOrders, updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'


const orderRouter = express.Router()

// Yönetici Özellikleri
orderRouter.post('/list', adminAuth ,allOrders)
orderRouter.post('/status', adminAuth ,updateStatus)

// Ödeme Özellikleri
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/paypal',authUser,placeOrderPaypal)

// Kullanıvı Özellikleri
orderRouter.post('/userorders', authUser,userOrders)

export default orderRouter
