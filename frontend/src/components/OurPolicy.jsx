import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      <div>
       <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="#" />
       <p className=' font-semibold'>Kolay Değişim Politikası</p>
       <p className='text-gray-400'>Sorunsuz değişim politikası sunuyoruz</p>
      </div>
      <div>
       <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="#" />
       <p className=' font-semibold'>7 günlük iade politikası</p>
       <p className='text-gray-400'>7 gün ücretsiz iade politikası sunuyoruz</p>
      </div>
      <div>
       <img src={assets.support_img} className='w-12 m-auto mb-5' alt="#" />
       <p className=' font-semibold'>En iyi müşteri desteği</p>
       <p className='text-gray-400'>7/24 müşteri desteği sağlıyoruz.</p>
      </div>

    </div>
  )
}

export default OurPolicy
