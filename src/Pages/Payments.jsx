
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import Btn from "../Components/Btn";

function Payments() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);

    const validationSchema = Yup.object().shape({
        paymentsMethod: Yup.string().required("Atleast One is Required"),
    });

    const handleTotal = async () => {
        try {
            const cart = localStorage.getItem("cart");
            setCartItems(cart ? JSON.parse(cart) : []);
        } catch (error) {
            console.error("Error fetching cart data: ", error);
            setCartItems([]);
        }
    };

    useEffect(() => {
        handleTotal();
    }, []);

    const handlePayments = async ({ resetForm }) => {
        navigate("/payments-success");
        resetForm();
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-wrap justify-center items-start gap-8 mt-6 px-4">
                <div className="w-full lg:w-[40%] bg-gray-300 px-8 py-6 shadow-2xl rounded-2xl border-4">
                    <h2 className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center mb-4 text-xl font-serif">
                        Payment Methods
                    </h2>
                    <Formik
                        initialValues={{
                            paymentsMethod: ""
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handlePayments}
                    >
                        {({ handleSubmit, errors }) => (
                            <Form onSubmit={handleSubmit}>
                                <div className="space-y-4 font-serif text-lg">
                                    <label className="flex items-center border-b-2 py-2">
                                        <Field type="radio" name="paymentsMethod" value="upi" />
                                        <span className="ml-3 flex items-center font-serif">
                                            <svg className="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x="4" y="4" width="6" height="6" rx="1" />
                                                <line x1="7" y1="17" x2="7" y2="17.01" />  <rect x="14" y="4" width="6" height="6" rx="1" />
                                                <line x1="7" y1="7" x2="7" y2="7.01" />  <rect x="4" y="14" width="6" height="6" rx="1" />
                                                <line x1="17" y1="7" x2="17" y2="7.01" />  <line x1="14" y1="14" x2="17" y2="14" />
                                                <line x1="20" y1="14" x2="20" y2="14.01" />  <line x1="14" y1="14" x2="14" y2="17" />
                                                <line x1="14" y1="20" x2="17" y2="20" />  <line x1="17" y1="17" x2="20" y2="17" />
                                                <line x1="20" y1="17" x2="20" y2="20" /></svg>
                                            Pay with UPI</span>
                                    </label>
                                    <label className="flex items-center border-b-2 py-2">
                                        <Field type="radio" name="paymentsMethod" value="creditcard" />
                                        <span className="ml-3">💳 Pay with Credit Card</span>
                                    </label>
                                    <label className="flex items-center border-b-2 py-2">
                                        <Field type="radio" name="paymentsMethod" value="netbanking" />
                                        <span className="ml-3">🏦 Pay with Net Banking</span>
                                    </label>
                                    <label className="flex items-center border-b-2 py-2">
                                        <Field type="radio" name="paymentsMethod" value="wallet" />
                                        <span className="ml-3">🛍 Pay with Wallet</span>
                                    </label>
                                    <label className="flex items-center border-b-2 py-2">
                                        <Field type="radio" name="paymentsMethod" value="cod" />
                                        <span className="ml-3">🚚 Cash on Delivery</span>
                                    </label>
                                </div>
                                {errors.paymentsMethod && (
                                    <div className="text-red-500 mt-2">{errors.paymentsMethod}</div>
                                )}
                                <div className="mt-6">
                                    <Btn buttonName={"Proceed to Buy ⏩"} />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="w-full lg:w-[40%] bg-blue-50 px-8 py-6 shadow-2xl rounded-2xl border-4">
                    <h2 className="text-2xl font-semibold mb-4 bg-blue-600 text-white p-3 rounded-md text-center">
                        Cart Summary
                    </h2>
                    {cartItems.length === 0 ? (
                        <div className="text-center text-lg font-bold text-red-500">
                            Your cart is empty. Add some items to proceed!
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-between p-3 border-b font-semibold">
                                <h1 className="text-xl font-serif font-medium">Total Items:</h1>
                                <p className="text-xl font-sans font-bold">
                                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                                </p>
                            </div>
                            <div className="flex justify-between p-3">
                                <h1 className="text-xl font-serif font-medium">Total Price:</h1>
                                <p className="text-xl font-sans font-bold">
                                    $ {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between p-3 border-b">
                                <h1 className="text-xl font-serif font-medium">Delivery Charge:</h1>
                                <p className="text-xl font-sans font-bold">
                                    $ {(cartItems.reduce((total, item) => total + item.price * item.quantity, 0) / 5).toFixed(2)}</p>
                            </div>

                            <div className="flex justify-between p-3">
                                <h1 className="text-xl font-serif font-medium">Total Amount:</h1>
                                <p className="text-xl font-sans font-bold text-green-500">
                                    $ {parseFloat(cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)) + parseFloat((cartItems.reduce((total, item) => total + item.price * item.quantity, 0) / 5).toFixed(2))}
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Payments;