import React, {useContext,useState} from 'react'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title'
import CartTotal from '../components/CartTotal';
import { ShopContext } from '../context/ShopContext'



const PlaceOrder = () => {

  const [method,setMethod] = useState('cod');

  const {navigate} = useContext(ShopContext);




  console.log("PlaceOrder render oldu");
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
{/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'Teslimat'} text2={'Bilgileri'} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full'  type="text" placeholder='Adınız'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full'  type="text" placeholder='Soyadınız'/>
        </div>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full'  type="email" placeholder='E-mail Adresiniz'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full'  type="text" placeholder='Teslimat Adresi'/>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full'  type="text" placeholder='İl'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full'  type="text" placeholder='İlçe'/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full'  type="text" placeholder='Mahalle'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full'  type="number" placeholder='Postakodu'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full'  type="number" placeholder='Telefon Numarası'/>
      </div>

      {/* Right Side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'Ödeme'} text2={'Seçenekleri'} />
          {/* Ödeme Seçenekleri */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex  border-gray-400/60 items-center gap-3 border p-2 mt-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-400/60 rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.stripe_logo} alt="#" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex  border-gray-400/60 items-center gap-3 border p-2 mt-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-400/60 rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.razorpay_logo} alt="#" />
            </div>
            <div onClick={()=>setMethod('cod')} className='flex  border-gray-400/60 items-center gap-3 border p-2 mt-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-400/60 rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>Kapıda Ödeme</p>
            </div>
          </div>

          <div className='w-full text-end mt-8 '>
            <button onClick={()=>navigate('/orders')} className='bg-gray-500 text-white px-16 py-3 text-sm cursor-pointer'>Sipariş Ver</button>

          </div>


        </div>
      </div> 
    </div>

    
  )
}

export default PlaceOrder
