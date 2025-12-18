import React from 'react'
import Title  from '../components/Title';
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t border-gray-400/60'>
      <Title text1={'HAKKIMIZDA'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="#" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4'>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quaerat nulla similique eum eaque porro magni non et temporibus laborum repellat voluptatibus necessitatibus harum, sapiente soluta facilis sequi quis? Cumque!</p>
        <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quasi, recusandae aspernatur itaque pariatur nemo sunt fugiat culpa rem similique rerum, dolorem fugit aliquid accusantium omnis qui expedita delectus voluptatibus.</p>
        <b className='text-gray-800'>Misyonumuz</b>
        <p  className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi facere harum libero, facilis quaerat delectus tempora modi. Dignissimos, praesentium consequatur odio nihil adipisci cupiditate maxime magnam quam aspernatur doloribus dolor.</p>
        </div>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={'NEDEN BİZİ '} text2={'SEÇMELİSİNİZ'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-400/60 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-xl'>Kalite Güvencesi</b>
          <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptas qui! Accusamus maxime laudantium cupiditate eaque sunt asperiores a nam, recusandae ullam eligendi explicabo aspernatur accusantium placeat, corrupti, neque id.</p>
        </div>
        <div className='border border-gray-400/60 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-xl'>Kolaylık</b>
          <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptas qui! Accusamus maxime laudantium cupiditate eaque sunt asperiores a nam, recusandae ullam eligendi explicabo aspernatur accusantium placeat, corrupti, neque id.</p>
        </div>
        <div className='border border-gray-400/60 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-xl'>Olağanüstü Müşteri Hizmeti</b>
          <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptas qui! Accusamus maxime laudantium cupiditate eaque sunt asperiores a nam, recusandae ullam eligendi explicabo aspernatur accusantium placeat, corrupti, neque id.</p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About
