import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export function FormDemo1() {
  
  const formik = useFormik({
    initialValues:{
      UserName:'',
      Mobile:'',
      City:''
    },
    validationSchema: yup.object({
      UserName: yup.string().required('User Name Required').min(4,'Name too short'),
      Mobile: yup.string().required('Mobile Number Required').matches(/\+91\d{10}/),
      City: yup.string().required('City is required').notOneOf(['','-1',null],'Please select valid City')
    }),
    onSubmit:(user) =>
    {
      console.log(user);
    }
  })

  return(
    <div className="conatiner-fluid p-5 w-75">
      <h2>Register User</h2>
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>User Name</dt>
          {/* {...formik.getFieldProps("UserName")} Get all properties and binding with element*/} 
          <dd><input type="text" className="form-control" {...formik.getFieldProps("UserName")}  name="UserName" /></dd>
          <dd className="text-danger">{formik.errors.UserName}</dd>
          <dt>Mobile</dt>
          <dd><input type="text" className="form-control" onChange={formik.handleChange} name="Mobile" /></dd>
          <dd className="text-danger">{formik.errors.Mobile}</dd>
          <dt>City</dt>
          <dd>
            <select name="City" className="form-select" onChange={formik.handleChange}>
              <option value="-1">Select City</option>
              <option>Delhi</option>
              <option>Hyderabad</option>
            </select>
          </dd>
          <dd className="text-danger">{formik.errors.City}</dd>
        </dl>
        <div className="d-flex justify-content-between gap-2">
          <button disabled = {(formik.isValid)?false:true} type="submit" className="btn btn-danger w-50">Register</button>
          <button type="submit" className={`btn btn-primary w-50 ${(formik.dirty)?'d-inline':'d-none'}`}>Save</button>
        </div>
      </form>
    </div>
  );

}