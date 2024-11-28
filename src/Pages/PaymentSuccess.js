import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router'
import '../Images/7efs.gif'

export default function PaymentSuccess() {
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
        },3000)
        localStorage.removeItem('cart')
    },[navigate])

    return (
        <>
            <Navbar />
            <div className="w-screen h-screen flex justify-center items-center ">
                <img src='../Images/7efs.gif' alt={<div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                    role="status">
                    <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                    </span>
                </div>} />
            </div>
        </>
    )
}
