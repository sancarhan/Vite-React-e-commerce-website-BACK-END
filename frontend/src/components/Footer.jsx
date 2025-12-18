import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-14 mt-40 text-sm'>

       <div>
        <img src={assets.logo} className='mb-5 w-32' alt="#" />
        <p className='w-full md:w-2/3 text-gray-600'>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad laudantium, cum eos perspiciatis totam deserunt culpa at nemo doloribus tenetur nostrum natus quia sed. Magnam consectetur modi, veniam veritatis ut iure, fugiat corporis, incidunt possimus accusantium odio doloremque consequuntur earum?
        </p>
       </div>

       <div>
           <p className='text-xl font-medium mb-5'>ŞİRKET</p>
           <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Anasayfa</li>
            <li>Hakkımızda</li>
            <li>Teslimat</li>
            <li>Gizlilik Politikası</li>

           </ul>
       </div>
    

         <div>
          <p className='text-xl font-medium mb-5'>İLETİŞİME GEÇİN</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
               <li>+90-555-555-5555</li>
               <li>birisi@foreveryou.com</li>
          </ul>
         </div>

      </div>

      <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2026@ forever.com - Tüm Hakları Saklıdır</p>
      </div>

    </div>
  )
}

export default Footer
