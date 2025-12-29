import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Kapıda Ödeme Yöntemiyle Sipariş Verme

const placeOrder = async (req,res) => {

 try {
  
  const { userId, items, amount, address } = req.body;

  const orederData = {
   userId,
   items,
   address,
   amount,
   paymentMethod: "Kapıda Ödeme",
   payment:false,
   date: Date.now()
  }

  const newOrder = new orderModel(orederData)
  await newOrder.save()

  await userModel.findByIdAndUpdate(userId,{cardData:{}})

  res.json({success:true,message:"Sipariş Verildi"})


 } catch (error) {
  console.log(error);
  res.json({success:false,message:error.message})
  
 }

}

// Banka kartı ile ödeme 

const placeOrderStripe = async (req,res) => {
 
}

// Paypal kartı ile ödeme 

const placeOrderPaypal = async (req,res) => {
 
}

// Yönetici Paneli için Tüm Sipariş Verileri

const allOrders = async (req,res) => {
 
 try {

  const orders = await orderModel.find({})
  res.json({success:true,orders})

 } catch (error) {

  console.log(error);
  res.json({success:false,message:error.message})
  
 }

}

// Ön uç için tüm sipariş verileri

const userOrders = async (req,res) => {
 try {
  
  const { userId } = req.body

  const orders = await orderModel.find({ userId })
  res.json({success:true,orders})

 } catch (error) {
  console.log(error);
  res.json({success:false,message:error.message})
 }
}


// Sipariş durumunu Yönetici Panelinden güncelleme

const updateStatus = async (req,res) => {
 
}

export {placeOrder, placeOrderStripe, placeOrderPaypal, allOrders, userOrders, updateStatus}