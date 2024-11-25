
import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
    return (
        <div className="absolute hidden group-hover:block bg-gray-200 text-slate-600 divide-y divide-gray-300 rounded-md shadow-md w-64 z-10">
            <ul className="py-2 text-lg">
                <li className="border-b hover:bg-red-500 hover:text-white transition-all duration-300">
                    <Link to="/electronics" className="flex items-center px-4 py-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 mr-2 text-blue-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                            />
                        </svg>
                        Electronics
                    </Link>
                </li>
                <li className="border-b hover:bg-red-500 hover:text-white transition-all duration-300">
                    <Link to="/jewellery" className="flex items-center px-4 py-3">
                        <svg
                            className="w-6 h-6 mr-2 text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                            fill="currentColor"
                        >
                            <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path d="M32 4L38 12L32 20L26 12L32 4z" fill="currentColor" />
                        </svg>
                        Jewellery
                    </Link>
                </li>
                <li className="border-b hover:bg-red-500 hover:text-white transition-all duration-300">
                    <Link to="/men'sclothing" className="flex items-center px-4 py-3">
                        <svg
                            className="w-6 h-6 mr-2 text-gray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.833 5a5 5 0 0 1 3-1h6.334a5 5 0 0 1 3 1L21.1 7.2a1 1 0 0 1 .268 1.296l-2 3.5a1 1 0 0 1-1.382.361l-.986-.59V19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-7.234l-.985.591a1 1 0 0 1-1.383-.36l-2-3.5A1 1 0 0 1 2.9 7.2L5.833 5ZM14 5h-4c0 .425.223.933.645 1.355.422.423.93.645 1.355.645.425 0 .933-.222 1.355-.645.423-.422.645-.93.645-1.355Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Men's Clothing
                    </Link>
                </li>
                <li className="hover:bg-red-500 hover:text-white transition-all duration-300">
                    <Link to="/women'sclothing" className="flex items-center px-4 py-3">
                        <svg
                            className="w-6 h-6 mr-2 text-pink-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 2C10 2 8 4 8 4v8h8V4s-2-2-4-2zm2 18h-4l-2-2h8l-2 2z" />
                        </svg>
                        Women's Clothing
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Categories;
