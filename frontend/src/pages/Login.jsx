import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

 
  const [currentState, setCurrentState] = useState('Giriş Yap');
  const { token,setToken, navigate, backendUrl} = useContext(ShopContext)

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = async (event) =>{
    event.preventDefault();
    try {
    
      if (currentState === 'Kayıt Ol') {
        
        const response = await axios.post(backendUrl + '/api/user/register', {name,email,password})
        if (response.data.succes) {
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        }else{
          toast.error(response.data.message)
        }
        

      }else{

        const response = await axios.post(backendUrl + '/api/user/login', {email,password})
        if (response.data.success) {
          setToken(response.data.token)
           localStorage.setItem('token',response.data.token)
        }else {
          toast.error(response.data.message)
        }

        
      
      }


    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }

  useEffect(()=>{
    if (token) {
      navigate('/')
    }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-500'/>
      </div>
      {currentState === 'Giriş Yap' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-400' placeholder='Adınız' required/>}
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-400' placeholder='Emailiniz' required/>
      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-400' placeholder='Şifre' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Şifremi Uuttum</p>
        {
          currentState === 'Giriş Yap'
          ? <p onClick={()=>setCurrentState('Kayıt Ol')} className='cursor-pointer'>Kayıt Ol</p>
          : <p onClick={()=>setCurrentState('Giriş Yap')} className='cursor-pointer'>Giriş Yap</p>
        }
      </div>
      <button className='bg-gray-400 text-white font-light px-8 py-2 mt-4'>{currentState === 'Giriş Yap' ? 'Giriş Yap' : 'Kayıt Ol'}</button>
    </form>
  )
}

export default Login
