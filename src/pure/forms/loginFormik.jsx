import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'


const loginSchema = Yup.object().shape(

    // en caso de errores 
    {
        email: Yup.string()
            .email('invalid email format')
            .required('password is required'),
        password: Yup.string()
            .required('password is required')
    }
)




const LoginFormik = () => {


    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <Formik
                // Initial values that the form will take
                initialValues={initialCredentials}

                // Yup validation schema
                validationSchema={loginSchema}


                //onsubmit event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    // we save the data in localstorage
                    localStorage.setItem('credentials', values)
                }}
            >

                {/* we obtein props from formik */}
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                                <label htmlFor="email">Email</label>
                                <Field id="email" name="email" placeholder="example@email.com" />


                                {  // email errors
                                    errors.email && touched.email &&
                                    (
                                       
                                            <ErrorMessage name="email" component='div'/>
                             
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
                                  
                                 
                                            <ErrorMessage name="password" component='div'  />
                                      
                                    )
                                }
                                <button type="submit">Submit</button>

                                {
                                    isSubmitting ? (<p>Login your credentials</p>) : null
                                }

                            </Form>
)
                }
              

            </Formik>
        </div>
    )
}

export default LoginFormik
