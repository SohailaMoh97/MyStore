import React from 'react'

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white p-5 mt-10 flex flex-col md:flex-row justify-around items-center md:items-start gap-8 text-center md:text-left w-full">
  
  {/* First section */}
  <div className="space-y-2">
    <h3 className="text-xl font-bold">MyStore</h3>
    <div className="text-gray-400">
      <p className="m-0">Your one-stop shop for the best products online.</p>
      <p>Fast delivery, secure payments, and great deals daily!</p>
    </div>
  </div>

  {/* Second section */}
  <div>
    <h3 className="text-xl font-bold mb-2">Customer Service</h3>
    <ul className="text-gray-400 cursor-pointer space-y-1">
      <li className="transition-transform duration-300 hover:translate-x-2 hover:font-semibold">FAQ</li>
      <li className="transition-transform duration-300 hover:translate-x-2 hover:font-semibold">Shipping & Returns</li>
      <li className="transition-transform duration-300 hover:translate-x-2 hover:font-semibold">Privacy Policy</li>
      <li className="transition-transform duration-300 hover:translate-x-2 hover:font-semibold">Terms & Conditions</li>
    </ul>
  </div>

  {/* Third section */}
  <div>
    <h3 className="text-xl font-bold mb-2">Follow Us</h3>
    <ul className="flex justify-center md:justify-start gap-4 text-xl text-gray-500">
      <li><i className="fa-brands fa-facebook transition-transform duration-300 hover:-translate-y-1 hover:text-white"></i></li>
      <li><i className="fa-brands fa-twitter transition-transform duration-300 hover:-translate-y-1 hover:text-white"></i></li>
      <li><i className="fa-brands fa-instagram transition-transform duration-300 hover:-translate-y-1 hover:text-white"></i></li>
      <li><i className="fa-brands fa-linkedin transition-transform duration-300 hover:-translate-y-1 hover:text-white"></i></li>
    </ul>
  </div>
</div>

  )
}

// import React from 'react'

// export default function Footer() {
//   return (
//     <div className='bg-gray-800 text-white py-10 px-5 mt-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left'>
      
//       {/* Logo & Description */}
//       <div className='space-y-2 max-w-sm'>
//         <h3 className='text-xl font-bold'>MyStore</h3>
//         <div className='text-gray-400'>
//           <p>Your one-stop shop for the best products online.</p>
//           <p>Fast delivery, secure payments, and great deals daily!</p>
//         </div>
//       </div>

//       {/* Customer Service */}
//       <div>
//         <h3 className='text-xl font-bold mb-2'>Customer Service</h3>
//         <ul className='text-gray-400 space-y-1 cursor-pointer'>
//           <li className='transition-transform duration-300 hover:translate-x-2 hover:font-semibold'>FAQ</li>
//           <li className='transition-transform duration-300 hover:translate-x-2 hover:font-semibold'>Shipping & Returns</li>
//           <li className='transition-transform duration-300 hover:translate-x-2 hover:font-semibold'>Privacy Policy</li>
//           <li className='transition-transform duration-300 hover:translate-x-2 hover:font-semibold'>Terms & Conditions</li>
//         </ul>
//       </div>

//       {/* Social Media */}
//       <div>
//         <h3 className='text-xl font-bold mb-2'>Follow Us</h3>
//         <ul className='flex justify-center md:justify-start gap-4 text-xl text-gray-500'>
//           <li><i className="fa-brands fa-facebook hover:text-white hover:-translate-y-1 duration-300"></i></li>
//           <li><i className="fa-brands fa-twitter hover:text-white hover:-translate-y-1 duration-300"></i></li>
//           <li><i className="fa-brands fa-instagram hover:text-white hover:-translate-y-1 duration-300"></i></li>
//           <li><i className="fa-brands fa-linkedin hover:text-white hover:-translate-y-1 duration-300"></i></li>
//         </ul>
//       </div>
      
//     </div>
//   )
// }
