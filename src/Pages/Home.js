import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'

function Home() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const products = await response.data;
      setProducts(products)
    }
    catch (error) {
      console.log("Error", error)
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <Navbar />
      <div className='h-24 mt-2 justify-center  items-center bg-headlineColor text-3xl py-4 font-sans'>
        <h1 className='text-headlineTextColor text-center  font-semibold '>
          Welcome to an E-Commerce website
        </h1>
      </div>
      <div className=' text-orange-500 bg-blue-300 mt-4 justify-center text-center h-20 items-center py-2 font-sans' >
        <p className='text-3xl font-bold'>
          Welcome to our store</p>
        <p className='text-xl font-semibold '>
          Find the best products here
        </p>
      </div>
      <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-4 '>
        {products.map((product) => (
          <div key={product.id} className=' bg-white p-4 shadow-xl '>
            <img src={product.image} alt={product.title} className='h-80 w-full border-2 mb-4' />
            <h2 className='text-xl font-semibold'>{product.title}</h2>
            <p className='text-gray-700'>{product.description.substring(0, 100)}...</p>
            <p className='text-lg font-bold text-blue-400'>${product.price}</p>
            <button className=' border-2 w-40 border-gray-500 bg-yellow-300 rounded-xl p-2 '>🛒 Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  )
}
export default Home