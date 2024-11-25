import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Pages/Categories';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)
    const [cartItems, setCartItems] = useState([]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleSearchButton = () => {
        setIsSearchBarOpen(!isSearchBarOpen)
    }

    const handleTotal = () => {
        try {
            const cartItems = JSON.parse(localStorage.getItem('cart')) || []
            setCartItems(cartItems)
        } catch (error) {
            console.error(error);
        }
    };
    const totalAmount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    useEffect(() => {
        handleTotal();
    }, []);

    return (
        <>
            <nav className="w-full h-12 bg-navbarColor flex text-gray-300 justify-between items-center px-6">
                <Link to="/">
                    <div className="flex items-center space-x-4">
                        <img className="h-8" src="logo.png" alt="Logo" />
                        <h1 className="text-lg">E-Commerce</h1>
                    </div>
                </Link>

                <div className="hidden md:flex items-center space-x-6">
                    <Link to="/" className="hover:border px-4 py-2 rounded-lg border-slate-300">Home</Link>
                    <Link to="/about" className="hover:border px-4 py-2 rounded-lg border-slate-300">About</Link>
                    <div className="relative group">
                        <h1 className="cursor-pointer hover:border px-4 py-2 rounded-lg border-slate-300">
                            Categories 🔽
                        </h1>
                        <Categories />
                    </div>
                    <Link to="/cart" className="flex hover:border px-4 py-2 rounded-lg border-slate-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <p>{totalAmount}</p>
                    </Link>
                    <Link to="/profile" className="hover:border px-4 py-2 rounded-lg border-slate-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </Link>
                </div>

                <div className="md:hidden flex items-center px-4 py-2 hover:border border-slate-300 rounded-lg">
                    <button onClick={toggleSearchButton} className="focus:outline-none">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M18.9999 19L14.6499 14.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>

                <div className="md:hidden flex items-center px-4 py-2 hover:border border-slate-300 rounded-lg">
                    <button onClick={toggleMobileMenu} className="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-navbarColor flex flex-col text-gray-300 space-y-4 p-4">
                    <Link to="/" className="hover:border px-4 py-2 rounded-lg border-slate-300">Home</Link>
                    <Link to="/about" className="hover:border px-4 py-2 rounded-lg border-slate-300">About</Link>
                    <div className="relative group">
                        <h1 className="cursor-pointer hover:border px-4 py-2 rounded-lg border-slate-300">
                            Categories 🔽
                        </h1>
                        <Categories />
                    </div>
                    <Link to="/cart" className="hover:border px-4 py-2 rounded-lg border-slate-300">
                        Cart({cartItems.reduce((total, item) => total + item.quantity, 0)})
                    </Link>
                    <Link to="/profile" className="hover:border px-4 py-2 rounded-lg border-slate-300">Profile</Link>
                </div>
            )}
        </>
    );
}

export default Navbar;
