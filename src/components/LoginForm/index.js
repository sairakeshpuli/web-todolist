import React from "react";

import { useFormik } from 'formik';

import './index.css';

import { Link } from "react-router-dom";

import * as Yup from 'yup'

const LoginForm = () => {


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Email address is required"),
            password: Yup.string().required("Password is required")
        }),

        onSubmit: (values) => {
            console.log('form submit', values)
        }
    })
    console.log('form values', formik.values)
    return (
        <div className="login-container1">
            <div className="Login-container">
                <h1> Sign In </h1>
                <form autoComplete="off" onSubmit={formik.handleSubmit}>

                    <label>E-mail</label>
                    <input type="email" name="email" id="email"
                        value={formik.values.email} onChange={formik.handleChange} />


                    {formik.touched.email && formik.errors.email ? (
                        <div className="err-msg">{formik.errors.email}</div>
                    ) : null}


                    <label>Password</label>
                    <input type="password" name="password" id="password"
                        value={formik.values.password} onChange={formik.handleChange} />

                    {formik.touched.password && formik.errors.password ? (
                        <div className="err-msg">{formik.errors.password}</div>
                    ) : null}

                    <Link to="/home" ><button type="submit" className="log-button">Login</button></Link>
                    <p> No account? <Link to="/register" > <span style={{ color: "blue" }}>sign Up!</span></Link></p>
                </form>

            </div></div>
    )
};

export default LoginForm;