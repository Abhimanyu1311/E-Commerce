
import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup';
import Btn from '../Components/Btn';
import axios from 'axios';

export default function Login() {
    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Required'),
        password: Yup.string().required("Required")
    });

    const handleLogin = async (values, { resetForm }) => {
        try {
            const response = await axios.post('https://reqres.in/api/login', {
                email: values.email,
                password: values.password
            });
            const data = response.data;
            console.log(data);
            if (data.token) {
                localStorage.setItem('token', data.token);
            }
            resetForm();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="bg-green-300 px-12 py-4 shadow-2xl rounded-2xl justify-center border-4 max-w-[1000px]">
                    <div className='font-bold text-3xl mt-2 mb-4'>
                        
                        Login
                    </div>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={validationSchema}
                        onSubmit={handleLogin}>
                        {({ handleSubmit, handleChange, values, errors }) => (
                            <Form onSubmit={handleSubmit}>
                                <label>E-mail</label>
                                <Field
                                    className="mt-2 flex border-2 border-x-gray-400 text-red-700 rounded-2xl items-center p-2 h-10 w-60"
                                    name="email"
                                    value={values.email}
                                    placeholder="Enter E-mail"
                                    onChange={handleChange} />
                                {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}

                                <label className='mt-2 flex' >Password</label>
                                <Field
                                    className="mt-4  flex border-2 border-x-gray-400 rounded-2xl items-center p-2 h-10 w-60"
                                    name="password"
                                    value={values.password}
                                    placeholder="Enter password"
                                    type="password"
                                    onChange={handleChange} />
                                {errors.password && <span className="text-red-600 text-sm">{errors.password}</span>}

                                <div>
                                    <Btn buttonName={"Login"} />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}
