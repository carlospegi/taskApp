import React from 'react'
import { User } from '../../models/user.class'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ROLES } from '../../models/roles.enum'

const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'username too short')
                .max(12, 'username too long')
                .required('username is required'),
            email: Yup.string()
                .email('invalid email format')
                .required('password is required'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'you must select a Role : User / Admin')
                .required('Role is required'),
            password: Yup.string()
                .min(8, 'password too short')
                .required('password is required'),
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")], // es igual>
                        "passwords must matches"  // => mensaje error
                    )
                }).required('You must confirm the password')

        }
    )


    const submit = (values) => {
        alert('Register User')
    }

    return (
        <div>
            <h4>Register formik</h4>

            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2))

                }}
            >

           
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor="uername">Username</label>
                        <Field id="username" type="text" name="username" placeholder="your username" />
                        {  // email errors
                            errors.username && touched.username &&
                            (

                                <ErrorMessage name="username" component='div' />

                            )
                        }
                        <label htmlFor="email">Email</label>
                        <Field id="email" type="text" name="email" placeholder="example@email.com" />


                        {  // email errors
                            errors.email && touched.email &&
                            (

                                <ErrorMessage name="email" component='div' />

                            )
                        }
                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />
                        {  // password errors
                            errors.password && touched.password &&
                            (


                                <ErrorMessage name="password" component='div' />

                            )
                        }
                        <label htmlFor="confirm">Confirm</label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="confirm password"
                            type="password"
                        />
                        {  // password errors
                            errors.confirm && touched.confirm &&
                            (


                                <ErrorMessage name="confirm" component='div' />

                            )
                        }
                        <button type="submit">Register Account</button>

                        {
                            isSubmitting ? (<p>Sending your credentials</p>) : null
                        }

                    </Form>
                )
                }
            </Formik>
        </div>
    )
}

export default RegisterFormik
