import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const AdminLogin = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    name: "admin",
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/auth/adminlogin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
      } else {
        setAuth(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
     <ul> <h1 className="mt-5 text-center">Admin Login</h1>
     </ul>
      <ul>
      <form onSubmit={onSubmitForm}>
        <ul>
        <input
        type="text"
        name="name"
        value={"admin"}
        />
        </ul>
        <ul>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          className="form-control my-3"
        />
        </ul>
        <ul>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          className="form-control my-3"
        />
        </ul>
        <ul>
        <button className="btn btn-success btn-block">Submit</button>
        </ul>
      </form>
      </ul>
      <ul>
        Login as <Link to="/login">User</Link>
      </ul>

    </Fragment>
  );
};

export default AdminLogin;
