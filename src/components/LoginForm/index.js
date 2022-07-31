import React from "react";

import { useFormik } from 'formik';

import './index.css';

import * as Yup from 'yup'

const LoginForm = () => {


    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        },

        validationSchema: Yup.object({
            firstname: Yup.string().required("firstname is required"),
            lastname: Yup.string().required("lastname is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email address is required"),
            password: Yup.string().required("Password is required")
        }),

        onSubmit: (values) => {
            console.log('form submit', values)
        }
    })

    return (
        <div className="login-container1">
            <div className="Login-container">
                <h1> Sign In </h1>
                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <label>firstName</label>
                    <input type="text" name="firstname" id="firstname" value={formik.values.firstname} onChange={formik.handleChange} />

                    {formik.touched.firstname && formik.errors.firstname ? (<div className="err-msg">{formik.errors.firstname}</div>) : null}

                    <label>lastName</label>
                    <input type="text" name="lastname" id="lastname" value={formik.values.lastname} onChange={formik.handleChange} />

                    {formik.touched.lastname && formik.errors.lastname ? (<div className="err-msg">{formik.errors.lastname}</div>) : null}

                    <label>E-mail</label>
                    <input type="email" name="email" id="email"
                        value={formik.values.email} onChange={formik.handleChange} />

                    {formik.touched.email && formik.errors.email ? (<div className="err-msg">{formik.errors.email}</div>) : null}


                    <label>Password</label>
                    <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} />

                    {formik.touched.password && formik.errors.password ? (<div className="err-msg">{formik.errors.password}</div>) : null}

                    <button type="submit" className="log-button">Login</button>
                    <p> No account?<span style={{ color: "blue" }}>sign Up!</span></p>
                </form>

            </div></div>
    )
};

export default LoginForm;