import { useFormik } from 'formik';
import React from 'react';
import "./index.css";


const RegisterForm = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: (values) => {

            if (values.password === values.confirmPassword) {
                alert("Registration Successfull")
            }
            else {
                alert("password not matching")
            }

        },
        validate: (values) => {
            let errors = {};
            if (!values.firstName) {
                errors.firstName = "Rquired"
            }
            if (!values.lastName) {
                errors.lastName = "Rquired"
            }
            if (!values.email) {
                errors.email = "Rquired"
            }
            if (!values.password) {
                errors.password = "Rquired"
            }
            if (!values.confirmPassword) {
                errors.confirmPassword = "Rquired"
            }
            return errors;
        }
    })
    console.log('form values', formik.values)
    return (
        <div className='reg-container1'>
            <div className="reg-container">
                <h1> Sign Up</h1>
                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <label>firstName</label>
                    <input type="text" name="firstName" id="firstName" placeholder='Firstname'
                        value={formik.values.firstName} onChange={formik.handleChange} />
                    {formik.errors.firstName ? <div className="errors">{formik.errors.firstName}</div> : null}

                    <label>lastName</label>
                    <input type="text" name="lastName" id="lastName" placeholder='Lastname'
                        value={formik.values.lastName} onChange={formik.handleChange} />
                    {formik.errors.lastName ? <div className="errors">{formik.errors.lastName}</div> : null}


                    <label>E-mail</label>
                    <input type="email" name="email" id="email" placeholder='Enter email'
                        value={formik.values.email} onChange={formik.handleChange} />
                    {formik.errors.email ? <div className="errors">{formik.errors.email}</div> : null}

                    <label>Password</label>
                    <input type="password" name="password" id="password" placeholder='Enter password'
                        value={formik.values.password} onChange={formik.handleChange} />
                    {formik.errors.password ? <div className="errors">{formik.errors.password}</div> : null}


                    <label>confirmPassword</label>
                    <input type="password" name="confirmPassword" id="confirmPassword"
                        value={formik.values.confirmPassword} onChange={formik.handleChange} />
                    {formik.errors.confirmPassword ? <div className="errors">{formik.errors.confirmPassword}</div> : null}

                    <button type="submit" className='reg-button'>Register </button>


                </form>

            </div></div >
    )
};

export default RegisterForm;
