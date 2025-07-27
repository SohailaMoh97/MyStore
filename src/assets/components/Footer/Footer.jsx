import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gray-800 text-white p-5  mt-10 flex justify-around relative bottom-0 w-full'>
        <div className='space-y-2 '>
            <h3 className='text-xl font-bold'>MyStore</h3>
            <div className='text-gray-400 '>
                <p className='m-0'>Your one-stop shop for the best products online.</p>
                <p>Fast delivery, secure payments, and great deals daily!</p>
            </div>
        </div>
        <div >
            <h3 className='text-xl font-bold mb-2'>Customer Service</h3>
            <ul className='text-gray-400 cursor-pointer '>
                <li className='transition-transform duration-400 hover:translate-x-2 hover:font-semibold'>FAQ</li>
                <li className='transition-transform duration-400 hover:translate-x-2 hover:font-semibold'>Shipping & Returns</li>
                <li className='transition-transform duration-400 hover:translate-x-2 hover:font-semibold'>Privacy Policy</li>
                <li className='transition-transform duration-400 hover:translate-x-2 hover:font-semibold' >Terms & Conditions</li>
            </ul>
        </div>
        <div>
            <h3 className='text-xl font-bold mb-2' >Follow Us</h3>
            <ul className='flex gap-3 text-xl text-gray-500'>
                <li><i className="fa-brands fa-facebook transition-transform duration-400 hover:-translate-y-2 hover:font-semibold"></i></li>
                <li><i className="fa-brands fa-twitter transition-transform duration-400 hover:-translate-y-2 hover:font-semibold"></i></li>
                <li><i className="fa-brands fa-instagram transition-transform duration-400 hover:-translate-y-2 hover:font-semibold"></i></li>
                <li><i className="fa-brands fa-linkedin transition-transform duration-400 hover:-translate-y-2 hover:font-semibold"></i></li>
            </ul>
        </div>
        <div>

        </div>
    </div>
  )
}
