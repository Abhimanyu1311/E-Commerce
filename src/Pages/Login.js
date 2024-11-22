import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import Btn from '../Components/Btn';

export default function Login() {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Required'),
        password: Yup.string().required("Required")
    });
    const handleLogin = async (values, { resetForm }) => {
        try {
            setIsLoading(true)
            setIsSubmitting(true)
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: values.username,
                    password: values.password,
                }),
            });
            const data = await response.json();
            if (data.accessToken) {
                localStorage.setItem("accessToken", data.accessToken);
                resetForm();
                navigate("/");
            } else {
                console.log("Errororrrrrrrr")
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsLoading(false)
            setIsSubmitting(false)
        }
    };

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken) {
            navigate("/")
        }
    }, [navigate])

    return (
        <>
            {isSubmitting ?
                <div className="w-screen h-screen flex justify-center items-center">
                    <div className="bg-green-300 px-12 py-4 shadow-2xl rounded-2xl justify-center border-4 max-w-[1000px]">
                        <div className='font-bold text-3xl mt-2 mb-4'>Login</div>
                        <Formik
                            initialValues={{ username: "", password: "" }}
                            validationSchema={validationSchema}
                            onSubmit={handleLogin}
                        >
                            {({ handleSubmit, handleChange, values, errors }) => (
                                <Form onSubmit={handleSubmit}>
                                    {errors.general && (
                                        <div className="text-red-600 text-sm mb-2">{errors.general}</div>
                                    )}
                                    <label>Username</label>
                                    <Field
                                        className="mt-2 flex border-2 border-x-gray-400 text-red-700 rounded-2xl items-center p-2 h-10 w-60"
                                        name="username"
                                        placeholder="Enter Username"
                                        onChange={handleChange}
                                        value={values.username}
                                    />
                                    {errors.username && (
                                        <span className="text-red-600 text-sm">{errors.username}</span>
                                    )}
                                    <label className="mt-2 flex">Password</label>
                                    <Field
                                        className="mt-4 flex border-2 border-x-gray-400 rounded-2xl items-center p-2 h-10 w-60"
                                        name="password"
                                        placeholder="Enter password"
                                        type="password"
                                        onChange={handleChange}
                                        value={values.password}
                                    />
                                    {errors.password && (
                                        <span className="text-red-600 text-sm">{errors.password}</span>
                                    )}
                                    <div>
                                        <Btn buttonName={isLoading ?
                                            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                                                role="status">
                                                <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                                    Loading...
                                                </span>
                                            </div>
                                            : "Login"} />
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
                :
                <div>HIIIIIIII</div>
            }
        </>
    );
}
