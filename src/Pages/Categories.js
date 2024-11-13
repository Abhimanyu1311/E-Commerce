import React from 'react'
import { Link } from 'react-router-dom'

function Categories() {
    return (
        <div className="absolute hidden group-hover:block bg-gray-200 divide-y  divide-gray-100 rounded-sm shadow w-44 dark:bg-gray-700">
            <>
                <ul className='py-2 text-lg text-gray-700 dark:text-gray-200 '>
                    <li className='border-2 py-2 hover:font-medium hover:bg-red-400 hover:text-gray-100 px-2 flex'>
                        <Link to="/electronics" className='flex justify-center text-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                            </svg>

                            Electronics
                        </Link>
                    </li>
                    <li className='border-2 py-2 hover:font-medium hover:bg-red-400 hover:text-gray-100 px-2'>
                        <Link to="/jewellery" >

                        Jewellery
                        </Link>
                    </li>
                    <li className='border-2 py-2 hover:font-medium hover:bg-red-400 hover:text-gray-100 px-2'>
                        <Link to="/men'sclothing" className='flex justify-center items-center text-center'>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M5.833 5a5 5 0 0 1 3-1h6.334a5 5 0 0 1 3 1L21.1 7.2a1 1 0 0 1 .268 1.296l-2 3.5a1 1 0 0 1-1.382.361l-.986-.59V19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-7.234l-.985.591a1 1 0 0 1-1.383-.36l-2-3.5A1 1 0 0 1 2.9 7.2L5.833 5ZM14 5h-4c0 .425.223.933.645 1.355.422.423.93.645 1.355.645.425 0 .933-.222 1.355-.645.423-.422.645-.93.645-1.355Z" clip-rule="evenodd"/>
</svg>
Men's Clothing</Link>
                    </li>
                    <li className='border-2 py-2 hover:font-medium hover:bg-red-400 hover:text-gray-100 px-2'>
                        <Link to="/women'sclothing">Women's Clothing</Link>
                    </li>

                </ul>
            </>
        </div>
    )
}

export default Categories