import validator from "validator";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js";

const createToken = (id) => {
 return jwt.sign({id},process.env.JWT_SECRET)
}

// Kullanıcı girişi için yolu


const loginUser = async (req, res) => {
 
};

// Kullanıcı kaydı için yol

const registerUser = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    // Kullanıcının zaten var olup olmadığını kontrol etme
    const exists = await userModel.findOne({email});
    if (exists){
     return res.json({success:false, message:"Kullanıcı zaten mevcut"})
    }

    // E-posta formatını ve güçlü şifreyi doğrulama
    if (!validator.isEmail(email)) {
     return res.json({success:false, message:"Lütfen geçerli bir e-posta adresi girin."})
    }
    if (password.length < 8) {
     return res.json({success:false, message:"Lütfen güçlü bir şifre girin."})
    }

    // Kullanıcı şifresinin karma işlemi
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new userModel({
     name,
     email,
     password:hashedPassword
    })

    const user = await newUser.save()

    const token = createToken(user._id)

    res.json({success:true,token})

  } catch (error) {
   console.log(error);
   res.json({success:false,message:error.message})
   
  }
};

// admin giriş için

const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
