import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const { id } = useParams();

  const [userData, setUserData] = useState({});

  const fetchUserData = async () => {
    const res = await fetch("http://localhost:5000/user/getbyid/" + id);
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setUserData(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },

    onSubmit: async (values) => {
      console.log(values);

      // sending request to backend
      const res = await fetch('http://localhost:5000/user/update/'+id, {
        method: 'PUT',
        body : JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Update Success!!',
          text: 'User Updated successfully'
        });
        
      }else{
        Swal.fire({
          icon : 'error',
          title : 'Oops!!',
          text: 'Some Error Occured'
        });
      }
    }
  })

  return (
    <div>
      <h1 className="text-center">Update User Data</h1>
      <h2>{id}</h2>
      <div className="card w-25 shadow-lg rounded-5">
        <div className="card-body p-5">
          <i className="fa-solid fa-lock fa-3x d-block text-center" />
          <h2 className="text-center my-5">Update Form</h2>
          <form onSubmit={signupForm.handleSubmit}>
            <label htmlFor="">Name</label>
            <input className="form-control mb-4 rounded-5" type="text" name="name" onChange={signupForm.handleChange} value={signupForm.values.name} />
            <label htmlFor="">Email</label>
            <input className="form-control mb-4 rounded-5" type="email" name="email" onChange={signupForm.handleChange} value={signupForm.values.email} />
            <label htmlFor="">Password</label>
            <input className="form-control mb-4 rounded-5" type="password" name="password" onChange={signupForm.handleChange}  value={signupForm.values.password} />

            <button className="btn btn-danger w-100 mt-4 rounded-5">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;