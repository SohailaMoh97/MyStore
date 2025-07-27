import React, {  useEffect, useState } from 'react'
import jk from '../../../assets/JK.jpg'
import axios from 'axios'
import Loading from '../Loading/Loading'
import { useParams } from 'react-router-dom'


export default function ProductsDetails() {
  const [productDetails, setProductDetails] = useState(null)
  let {id} = useParams()

  async function getProductDetails(){
    try {
      const options = {
      url: `https://fakestoreapi.com/products/${id}`,
      method: "GET",
    }
    const {data} = await axios.request(options)
    console.log(data)
    setProductDetails(data)
    }
    
    catch(error) {
      console.log(error)
    }
  }

useEffect(() =>{
  getProductDetails()
}, []
)
  return (
    <>
     {productDetails ? <section className="grid gap-12 grid-cols-1 md:grid-cols-12 pt-20 m-6 px-3">
  <div className="md:col-span-3">
    <img src={productDetails.image} className="w-full" alt="" />
  </div>

  <div className="md:col-span-9 space-y-4">
    <div>
      <h2 className="text-2xl font-semibold dark:text-white text-gray-600">
        {productDetails.title}
      </h2>
      <h3 className="text-green-400 dark:text-amber-300 font-bold text-lg">
        {productDetails.category}
      </h3>
    </div>

    <p className="text-gray-500 dark:text-white-400">
      {productDetails.description}
    </p>

    <div className="flex justify-between items-center">
      <span>{productDetails.price} L.E</span>
      <div>
        <i className="fa-solid fa-star mr-2 text-yellow-500"></i>
        <span>{productDetails.rating.rate}</span>
      </div>
    </div>
    <button className="bg-green-700 w-full font-semibold hover:bg-green-800 text-white py-2 px-3 rounded-md duration-200">
      Add to cart
    </button>
  </div>
</section>
 : <Loading/>}
    </>
  )
}
