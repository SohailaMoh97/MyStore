import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import Loading from '../Loading/Loading'
export default function Products() {
 
const [products, setProducts] = useState(null)
const [searchTerm, setSearchTerm] = useState('')
const [sortOption, setSortOption] = useState('')

async function getProducts() {
    try{
      const options = {
      url: 'https://fakestoreapi.com/products',
      method: 'GET',
    }

    let {data} =await axios.request(options)
    setProducts(data)
    console.log(data);
    }
    catch(error){
      console.log(error)
    }

  }
useEffect(() => {
    getProducts()
}, [])

 let filteredProducts = products?.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (sortOption === 'priceLowHigh') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  } else if (sortOption === 'priceHighLow') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
  } else if (sortOption === 'az') {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      a.title.localeCompare(b.title)
    )
  }


  return (
    <>
    <div className='flex  mt-20 items-center justify-center gap-3  w-full p-10 '>
      <input type="text" 
      className=' py-2 px-3 border rounded-md w-full  border-gray-500 ' 
      name='search' placeholder='search products'
      onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
    className="py-2 px-3 border rounded-md w-full border-gray-500"
    value={sortOption}
    onChange={(e) => setSortOption(e.target.value)} >

    <option value="">Sort by</option>
    <option value="priceLowHigh">Price: Low to High</option>
    <option value="priceHighLow">Price: High to Low</option>
    <option value="az">Name: A to Z</option>
  </select>
    </div>
   {!products ? (
        <Loading />
      ) : (
        <div className="grid xl:grid-cols-6 md:grid-cols-2 py-2 px-10 lg:grid-cols-4 grid-cols-1 gap-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Card productInfo={product} key={product.id} />
            ))
          ) : (
            <p className="text-center col-span-full dark:text-white text-gray-600 font-medium text-lg">
              No products found.
            </p>
          )}
        </div>
      )}
    </>
  )
}
