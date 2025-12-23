import validator from "validator";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js";


const createToken = (id) => {
 return jwt.sign({id},process.env.JWT_SECRET)
}

// Kullanıcı girişi için yolu

const loginUser = async (req, res) => {
 try {
  
  const {email,password} = req.body;

  const user = await userModel.findOne({email});

  if (!user) {
    return res.json({success:false, message:"Kullanıcı mevcut değil"})
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (isMatch) {
    const token = createToken(user._id)
    res.json({success:true,token})
  }
  else{
    res.json({success:false, message: "Geçersiz kimlik bilgileri"})
  }

 } catch (error) {
  console.log(error);
   res.json({success:false,message:error.message})
 }
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

const adminLogin = async (req, res) => {
  try {
    

    const {email,password} = req.body

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign(email+password,process.env.JWT_SECRET);
      res.json({success:true,token})
    }else{
      res.json({success:false,message:"Geçersiz Kimlik"})
    }



  } catch (error) {
   console.log(error);
   res.json({success:false,message:error.message}) 
  }
};

export { loginUser, registerUser, adminLogin };
