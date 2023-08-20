import { useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import * as Yup from 'yup';
import useUserContext from "../UserContext";

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password : Yup.string().required('Password is Required')
});

const Login = () => {

  const { setLoggedIn } = useUserContext();

  // initializing formik
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password : ''
    },

    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);
      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Login Success!!'
        });

        const data = await res.json();
        sessionStorage.setItem('user', JSON.stringify(data));
        setLoggedIn(true);

      }else if(res.status === 401){
        Swal.fire({
          icon : 'error',
          title : 'Login Failed!!',
          text: 'Email or Password is incorrect'
        })
      }else{
        Swal.fire({
          icon : 'error',
          title : 'Something went wrong!!'
        })
      }

      // submit values to the backend
    },

    validationSchema: loginSchema
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card-p w-25 shadow-lg rounded-5">
        <div className="card-body-p p-5">
          <i className="fa-solid fa-lock fa-3x d-block text-center" />
          <h2 className="text-center my-5">Login Form</h2>
          <form onSubmit={loginForm.handleSubmit}>
            <label htmlFor="">Email</label>
            <p className="error-label">{loginForm.touched.email ? loginForm.errors.email : '' }</p>
            
            <input className="form-control mb-4 rounded-5" name="email" onChange={loginForm.handleChange} value={loginForm.values.email} />
            <label htmlFor="">Password</label>
            <p className="error-label">{loginForm.touched.password ? loginForm.errors.password : ''  }</p>
            <input className="form-control mb-4 rounded-5" type="password" name="password" onChange={loginForm.handleChange} value={loginForm.values.password} />
            <button type="submit" className="btn btn-danger w-100 mt-4 rounded-5">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;