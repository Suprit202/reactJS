import React from "react";
import axios from "axios";
import { Field, Form, Formik } from "formik";

export class FormicLogin extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="container-fluid p-4">
        <h3>Register</h3>
        <Formik initialValues={{ UserName: '', Mobile: '' }} onSubmit={(user) => console.log(user)}>
          <Form>
            <dl>
              <dt>User Name</dt>
              <dd><Field type='text' name='UserName'></Field></dd>
              <dt>Mobile</dt>
              <dd><Field type='text' name='Mobile'></Field></dd>
            </dl>
            <button type="submit">Register</button>
          </Form>
        </Formik>
      </div>
    )
  }
}

