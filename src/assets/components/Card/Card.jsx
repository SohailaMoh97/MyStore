import React from 'react'
import jk from '../../../assets/JK.jpg'
import { Link } from 'react-router-dom'
export default function Card({productInfo}) {
  const {title , category , price , image , rating , id} = productInfo
  const {rate}= rating
    return (
    <>
       
        <Link to={`/productsDetails/${id}`} className='shadow-md rounded-md dark:bg-gray-800 overflow-hidden hover:shadow-2xl hover:shadow-slate-400 transition-all duration-300'>
            <img className='w-full h-[190px]' src={image} alt="" />

            <div className='p-3  dark:text-white dark:w-full'>
                <h3 className='text-slate-600 text-lg dark:text-amber-500  font-bold'>{category}</h3>
                <h2 className='text-lg font-semibold line-clamp-2 '>{title}</h2>
                <div className='flex justify-between items-center mt-2 '>
                    <span>{price}L.E</span>
                    <div className='flex gap-1 items-center '>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                        <span>{rating.rate}</span>
                    </div>
                </div>
            </div>
        </Link>
       
    </>
  )
}
