import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t border-gray-400/60'>
         <Title text1={'İLETİŞİME'} text2={'GEÇ'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="#"/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Mağazamız</p>
          <p className='text-gray-500'>742 Silverleaf Avenue Apartment 9B <br /> North Willow District Eastridge, Verdanis 58421, USA</p>
          <p className='text-gray-500'> Tel: (+90) 555-555-5555 <br /> Email: birisi@forever.com</p>
          <p className='font-semibold text-xl text-gray-600'>Forever'da Kariyer Olanakları</p>
          <p className='text-gray-500'>Ekiplerimiz ve iş ilanlarımız hakkında daha fazla bilgi edinin.</p>
          <button className='border border-gray-400/60 px-8 py-4 text-sm hover:bg-gray-400 transition-all duration-500 cursor-pointer'>İşleri Keşfedin</button>
        </div>
      </div>

      <NewsletterBox/>
  
    </div>
  )
}

export default Contact
