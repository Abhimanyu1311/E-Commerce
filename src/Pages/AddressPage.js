import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';
import Navbar from '../Components/Navbar';
import Btn from '../Components/Btn';
import { useNavigate } from 'react-router';
import { blockInvalidChar } from '../Components/blockInvalidChar';

export default function AddressPage() {
    const navigate = useNavigate()
    const handleInput = (e) => {
        e.target.value = e.target.value.replace(/[0-9]/g, "");
      };
    const validationSchema = Yup.object().shape({
        FullName: Yup.string().required('Full Name is required').matches(/^[^0-9]*$/, "Numeric values are not allowed"),
        MobileNo: Yup.string()
            .matches(/^[0-9]{10}$/, 'Mobile No. must be 10 digits')
            .required('Mobile No. is required'),
        City: Yup.string().required('City is required'),
        country: Yup.string().required('Country is required'),
        PIN: Yup.string()
            .matches(/^[0-9]{6}$/, 'PIN must be 6 digits')
            .required('PIN is required'),
        address1: Yup.string().required('Address Line 1 is required'),
        address2: Yup.string().required('Address Line 1 is required')
    });

    const states = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir",
        "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
        "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands",
        "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"
    ]

    const handleAddress = async (values, { resetForm }) => {
        resetForm();
        navigate("/payments")
    }
    return (
        <>
            <Navbar />
            <div className="w-screen  inline-flex justify-center items-center mt-6">
                <div className="bg-gray-300 flex sm:text-sm items-center  px-12 py-4 shadow-2xl rounded-2xl justify-center border-4 w-[600px]">
                    <Formik
                        initialValues={{
                            FullName: "",
                            MobileNo: "",
                            City: "",
                            State: "",
                            address1: "",
                            address2: "",
                            PIN: "",
                            country: ""
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleAddress}>
                        {({ handleSubmit, handleChange, values, errors }) => (
                            <Form onSubmit={handleSubmit}>
                                {errors.general && (<div className="text-red-500 text-sm mb-2">{errors.general}</div>)}
                                <label className='font-semibold'>Select Country</label>
                                <Field className="mt-2 flex border-2 border-x-gray-400  rounded-2xl items-center p-2 h-10 w-64"
                                    name="country"
                                    type="text"
                                    placeholder="Select Country"
                                    onChange={handleChange}
                                    value={values.country}
                                    onInput={handleInput}
                                />
                                {errors.country && (<span className="text-red-600 flex text-sm">{errors.country}</span>)}
                                <label
                                    htmlFor="dropdown"
                                    className="block  font-semibold mb-2 mt-2"
                                >
                                    Select State
                                </label>
                                <select
                                    id="dropdown"
                                    className="block h-10 w-64 bg-gray-200 cursor-pointer rounded-2xl border-2 border-gray-400 shadow-sm sm:text-sm"
                                >
                                    {states.map((state, index) => (
                                        <option key={index} value={values.State} name='State'>
                                            {state}
                                        </option>
                                    ))}
                                </select>
                                <label className='font-semibold'>Enter your Full Name</label>
                                <Field
                                    className="mt-2 flex border-2 border-x-gray-400  rounded-2xl items-center p-2 h-10 w-64"
                                    name="FullName"
                                    placeholder="Enter your Full Name"
                                    onChange={handleChange}
                                    value={values.FullName}
                                    onInput={handleInput}
                                />
                                {errors.FullName && (<span className="text-red-600 flex text-sm">{errors.FullName}</span>)}
                                <label className='font-semibold'>Enter your Mobile No.</label>
                                <Field
                                    className="mt-2 flex border-2 border-x-gray-400  rounded-2xl items-center p-2 h-10 w-64"
                                    name="MobileNo"
                                    type="number"
                                    placeholder="Enter your Mobile No."
                                    onChange={handleChange}
                                    value={values.MobileNo}
                                    onKeyDown={blockInvalidChar}
                                />
                                {errors.MobileNo && (<span className="text-red-600 flex text-sm">{errors.MobileNo}</span>)}
                                <label className='font-semibold'>Enter your City</label>
                                <Field
                                    className="mt-2 flex border-2 border-x-gray-400  rounded-2xl items-center p-2 h-10 w-64"
                                    name="City"
                                    placeholder="Enter your City"
                                    onChange={handleChange}
                                    value={values.City}
                                    onInput={handleInput}
                                />
                                {errors.City && (<span className="text-red-600 flex text-sm">{errors.City}</span>)}
                                <label className='font-semibold'>Enter your PIN</label>
                                <Field
                                    className="mt-2 flex border-2 border-x-gray-400  rounded-2xl items-center p-2 h-10 w-64"
                                    name="PIN"
                                    type="number"
                                    placeholder="6 Digits [0-9] PIN Code"
                                    onChange={handleChange}
                                    onKeyDown={blockInvalidChar}
                                    value={values.PIN}
                                />
                                {errors.PIN && (<span className="text-red-600 flex text-sm">{errors.PIN}</span>)}
                                <label className='font-semibold'>Flat, House no., Building, Company, Apartment</label>
                                <Field
                                    className="mt-2 flex border-2 border-x-gray-400  rounded-2xl items-center p-2 h-10 w-64"
                                    name="address1"
                                    placeholder="Enter Address Line 1"
                                    onChange={handleChange}
                                    value={values.address1}
                                />
                                {errors.address1 && (<span className="text-red-600 flex text-sm">{errors.address1}</span>)}
                                <label className='font-semibold'>Area, Street, Sector, Village</label>
                                <Field
                                    className="mt-2 flex border-2 border-x-gray-400  rounded-2xl items-center p-2 h-10 w-64"
                                    name="address2"
                                    placeholder="Enter Address Line 2"
                                    onChange={handleChange}
                                    value={values.address2}
                                />
                                {errors.address2 && (<span className="text-red-600 flex text-sm">{errors.address2}</span>)}
                                <Btn buttonName={"Go to Payments ⏩"} />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>;
        </>

    )
}
