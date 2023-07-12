import React, { useEffect, useState, Fragment } from "react";
import {Link} from 'react-router-dom';

const AdminDash = ({ setAuth }) => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
//   const [phone, setPhone] = useState("Phone Number");
//   const [addr, setAddr] = useState("Address");


  // const [inputs, setInputs] = useState({
  //   name: "",
  //   addr: "address",
  //   phone: "phone"
  // });

  // const { name, phone, addr } = inputs;

  // const onChange = e =>
  // setInputs({ ...inputs, [e.target.name]: e.target.value });

  const getUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/admindash", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseData = await res.json();

      setUsers(parseData);

    //   console.log(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const onDelete = async (e) => {
    e.preventDefault();
    try {
      const body = { name };
      const response = await fetch(
        "http://localhost:5000/admindash",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      console.log(parseRes)

    //   if (parseRes.token) {
    //     localStorage.setItem("token", parseRes.token);
    //     setAuth(true);
    //     // toast.success("Logged in Successfully");
    //   } else {
    //     setAuth(false);
    //     // toast.error(parseRes);
    //   }
    } catch (err) {
      console.error(err.message);
    }
  };

    //  handleClick = (userId) => {
    //     const req = { method: "DELETE"};
    //     fetch("http://localhost:5000/auth/admindash" + userId, req).then((response) => {
    //         return response.json();
    //     } ).then((result)=>{
            
    //     })
    // }

    // async function onDelete(name) {
    //     try {
    //         const body = { name };
    //         const response = await fetch(
    //           "http://localhost:5000/admindash",
    //           {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 token : localStorage.token
    //               },
    //             body: JSON.stringify(body)

    //           }
    //         );
      
    //         const parseRes = await response.json();
      
    //         console.log(parseRes)
      
    //       } catch (err) {
    //         console.error(err.message);
    //       }
    // }

  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      // toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div align="center">
      <h1 className="mt-5">Dashboard </h1>
      <h2>Welcome Admin</h2>
    
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>

          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr >
              {/* <td>{user.user_id}</td> */}
              <td>{user.user_name}</td>
              <td>{user.user_email}</td>
              <td>{user.phone_no}</td>
              <td>{user.addr}</td>
              <td>
                <button onSubmit={onDelete} >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

            {/* <table>
            //some headers, if needed

                //This will iterate your array of objects
                {data.map((eachData) => (
                <tr> <td>{eachData.id}</td>           
                <td>{eachData.name}</td>
                ....
                </tr>
                )
            <table/> */}

      {/* <Fragment>
      <form onSubmit={onDelete}>
        <input
          type="text"
          name="name"
          value={name}
        //   onChange={(e) => setPhone(e.target.value)}
          className="form-control my-3"
        />

        <button className="btn btn-success btn-block">Delete</button>
      </form>
    </Fragment> */}


      <button onClick={e => logout(e)} className="btn btn-primary">
        Logout
      </button>
    </div>
  );
};

export default AdminDash;
