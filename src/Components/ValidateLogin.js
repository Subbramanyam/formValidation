import React from  "react";
import { Formik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';

const ValidateLogin = () =>(

    <Formik
        initialValues={{email:"", password:""}}
        onSubmit = {(values, {setSubmiting})=>{
            setTimeout(() => {
                console.log("Logging in", values)
            }, 500);
        }}

        //here is validation 
        validationSchema = {Yup.object().shape({
            email:Yup.string()
                .email()
                .required("Required"),
            password:Yup.string()
                .required("No password provided")
                .min(8, "password is too short- should be eight charcters login")
                .matches(/(?=.*[0-9])/, "password should contain a number")

        })}


    >
      {props =>{
          const {
              values,
              touched,
              errors,
              isSubmiting,
              handleChange,
              handleBlur,
              handleSubmit
          }= props;
          return(
              <form autoComplete="off" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label> 
                <input type="text" 
                    values={values.email} 
                    name="email" 
                    onChange={handleChange}
                    onBlur = {handleBlur}
                    placeholder="Enter your Email"
                    className={errors.email && touched.email && "error"}
                />
                {errors.email && touched.email &&(
                    <div className= "input-feedback">{errors.email}</div>

                )}
                <label htmlFor="password">Password</label>
                <input type="password" 
                    value={values.password} 
                    name="password"
                    onChange={handleChange}
                    onBlur = {handleBlur} 
                    placeholder="Enter your password" 
                    className={errors.password && touched.password && "error"}
                 />
                  {errors.password && touched.password &&(
                      <div className ="input-feedback">{errors.password}</div>
                  )}      
                
                <button type="submit" disabled={isSubmiting}>Login</button>
                
                </form>)
      }}  
    </Formik>
    );



export default ValidateLogin;