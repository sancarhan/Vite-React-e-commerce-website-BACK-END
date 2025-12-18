import React, { useState } from 'react'

const Login = () => {

 
  const [currentState, setCurrentState] = useState('Giriş Yap');

  const onSubmitHandler = async (event) =>{
    event.preventDeafault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-500'/>
      </div>
      {currentState === 'Giriş Yap' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-400' placeholder='Adınız' required/>}
      <input type="email" className='w-full px-3 py-2 border border-gray-400' placeholder='Emailiniz' required/>
      <input type="password" className='w-full px-3 py-2 border border-gray-400' placeholder='Şifre' required/>
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
