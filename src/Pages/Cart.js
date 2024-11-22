
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

function Cart() {
  const [cartItems, setCartItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const increaseQuantity = async (id) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
      cartItem.quantity += 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }

  const decreaseQuantity = async (id) => {
    const cart = await JSON.parse(localStorage.getItem('cart'));
    const cartItemIndex = await cart.findIndex(item => item.id === id);
    if (cartItemIndex !== -1) {
      const cartItem = cart[cartItemIndex];
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else {
        cart.splice(cartItemIndex, 1);
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      displayCart();
    }
  };

  const displayCart = async () => {
    try {
      setIsLoading(true)
      const cartItems = await JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(cartItems)
    } catch (error) {
      console.log(error, "Error");
    }
    finally {
      setIsLoading(false)
    }
  }

  const clearCart = () => {
    localStorage.removeItem('cart')
    displayCart();
  }
  
  useEffect(() => {
    displayCart();
  }, [])

  return (
    <>
      <Navbar />
      <div className='text-center text-2xl font-semibold bg-blue-500 text-white mt-2 h-10'>
        Your Cart
      </div>

      {isLoading ? (
        <div role="status" className="fixed inset-0 flex justify-center items-center">
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
      ) : (
        <div className="flex flex-wrap justify-center p-4">
          <div className="w-full lg:w-2/3 px-4 lg:px-8 py-4">
            {cartItems.length > 0 ? (
              cartItems.map((cartItem) => (
                <div key={cartItem.id} className="flex items-center border mb-4 p-4 rounded-lg shadow-sm">
                  <img
                    src={cartItem.image}
                    alt={cartItem.name}
                    className="h-20 w-20 border rounded-lg object-cover"
                  />
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h1 className="text-lg font-semibold">{cartItem.name}</h1>
                      <div className="flex items-center rounded-full bg-gray-200 px-2">
                        <button
                          className="px-3 py-1 text-lg font-bold text-gray-700 hover:text-blue-500"
                          onClick={() => decreaseQuantity(cartItem.id)}
                        >
                          -
                        </button>
                        <p className="px-3 py-1 text-lg font-semibold">{cartItem.quantity}</p>
                        <button
                          className="px-3 py-1 text-lg font-bold text-gray-700 hover:text-blue-500"
                          onClick={() => increaseQuantity(cartItem.id, cartItem.price)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <p className="text-lg font-bold text-blue-500">$ {cartItem.price.toFixed(2)}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            )}
          </div>
          <div className="w-full lg:w-1/3 px-4 py-4 bg-blue-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 bg-blue-600 text-white p-3 rounded-md text-center">
              Cart Summary
            </h2>
            <div className="flex justify-between p-3 border-b">
              <h1 className="text-xl font-serif font-medium">Total Items:</h1>
              <p className="text-xl font-sans font-bold">{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
            </div>
            <div className="flex justify-between p-3 border-b">
              <h1 className="text-xl font-serif font-medium">Delivery Charge</h1>
              <p className="text-xl font-sans font-bold">$ {(cartItems.reduce((total, item) => total + item.price * item.quantity, 0)/5).toFixed(2)}</p>
            </div>

            <div className="flex justify-between p-3">
              <h1 className="text-xl font-serif font-medium">Total Price:</h1>
              <p className="text-xl font-sans font-bold ">$ {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
            </div>
            <div className="flex justify-between p-3">
              <h1 className="text-xl font-serif font-medium">Total Amount:</h1>
              <p className="text-xl font-sans font-bold text-green-500">
                $ {(parseFloat(cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2))+parseFloat((cartItems.reduce((total, item) => total + item.price * item.quantity, 0)/5).toFixed(2))).toFixed(2)}</p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <Link to="/address" className="bg-blue-600 border-2 text-white px-6 py-2 rounded-lg hover:bg-blue-700" >
                Checkout ▶▶▶ </Link>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-red-600"
                onClick={clearCart}
              >
                Clear
                <svg
                  className="h-6 w-6 ml-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      )}
    </>
  )
}
export default Cart
