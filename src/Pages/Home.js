import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { debounce } from 'lodash';
import addToCart from "../Components/addToCart";

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [catName, setCatName] = useState("");

  const applySorting = (order) => {
    try {
      setIsLoading(true)
      const sorted = [...products].sort((a, b) => {
        return order === 'lowToHigh' ? a.price - b.price : b.price - a.price;
      });
      setProducts(sorted);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false)
    }
  };

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = debounce((e) => {
    setSearch(e.target.value);
  }, 1000);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (catName) {
      const renderByCategories = async () => {
        try {
          setIsLoading(true)
          const res = await axios.get(`https://fakestoreapi.com/products/category/${catName}`);
          setProducts(res.data);
        } catch (error) {
          console.error(error);
        }
        finally {
          setIsLoading(false)
        }
      };
      renderByCategories();
    }
  }, [catName]);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="w-full relative flex flex-wrap justify-between  items-center my-4 h-auto gap-4">
        <input
          className="input h-10 text-black sm:w-1/3 lg:w-1/3 md:1/3 ms-10 xl:w-1/3  justify-center  border-2 rounded-xl px-2"
          onChange={handleSearch}
          type="text"
          placeholder="Search Here..."
        />
        <div className="grid grid-cols-2 justify-center gap-4 mx-10">
          <button
            className="border-2 rounded-xl px-4 py-2 hover:bg-slate-300 shadow-xl"
            onClick={() => applySorting('lowToHigh')}
          >
            Price : Low to High
          </button>
          <button
            className="border-2 rounded-xl px-4 py-2 hover:bg-slate-300 shadow-xl"
            onClick={() => applySorting('highToLow')}
          >
            Price : High to Low
          </button>
        </div>
        <div className='grid mx-4 lg:grid-cols-4 gap-4 sm:grid-cols-2'>
          <img onClick={()=>setCatName('electronics')}  className='h-60 rounded-2xl shadow-xl  cursor-pointer w-100' 
          src='./Electronics.jpeg' alt='Electronics' />
          <img onClick={()=>setCatName('jewelery')} className='rounded-2xl shadow-xl h-60 cursor-pointer w-100' src="https://cdn0.weddingwire.in/vendor/9497/3_2/960/png/bridal-jewellery-suvarnakala-jewellers-necklace-earrings-2_15_319497-159369268555056.jpeg" alt='jewelery' />
          <img onClick={()=>setCatName("men's clothing")} className='rounded-2xl shadow-xl h-60 w-100 cursor-pointer' src='https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?s=612x612&w=0&k=20&c=wJ6yYbRrDfdmoViuQkX39s2z_0lCiNQYgEtLU--0EbY=' alt="Men's Clothes" />
          <img onClick={()=>setCatName("women's clothing")} className='rounded-2xl shadow-xl h-60 w-80 cursor-pointer' src="./Women's Clothings.jpeg" alt="Women's Clothes" />
        </div>
      </div>
      <div className='text-white bg-blue-600 mt-4 justify-center text-center h-20 items-center py-2 font-sans'>
        <p className='text-3xl font-bold'>
          Welcome to our store
        </p>

        <p className='text-xl font-semibold'>
          Find the best products here
        </p>
      </div>

      <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5  gap-4 p-4'>
        {isLoading ?
          <div role="status" className=" inset-0 flex justify-center items-center">
            <svg
              aria-hidden="true"
              className="w-28 h-28 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          :
          <>
            {filteredProducts.map((product) => (
              <div key={product.id} className='bg-white p-4 rounded-3xl border-2 shadow-xl'>
                <img src={product.image} alt={product.title} className='rounded-xl p-4 border-gray-300 2xl: h-80 w-full cursor-pointer border-2 mb-4' />
                <h2 className='text-lg cursor-pointer  line-clamp-1 font-semibold'>{product.title}...</h2>
                <p className='text-gray-700 text-sm line-clamp-2'>{product.description}...</p>
                <p className='mt-2 text-lg font-bold text-blue-400 justify-between flex'>
                  ${product.price}
                  <button onClick={() => addToCart(product.id, product.image, product.title, product.price)}
                    className='font-mono border-2 text-white font-medium bg-blue-400 hover:bg-opacity-40 rounded-lg hover:text-white px-2 p-1 h-10'>
                    Add to Cart
                  </button>
                </p>
              </div>
            ))}
          </>
        }
      </div>

    </>
  )
}

export default Home
