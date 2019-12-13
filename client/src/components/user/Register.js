import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Register(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const history = useHistory();

  const register = async e => {
    e.preventDefault();
    // Check if passwords are match
    if (password !== password2) {
      alert("The passwords you entered don't match, please try it again");
      return;
    }
    // Check if username is taken
    const res = await axios.get(`/api/user?username=${username}`);
    if (res.data) {
      alert("Username is taken, please try another one");
      return;
    }
    // for (let user of props.users) {
    //   if (user.username === username) {
    //     alert("Username is taken, please try another one");
    //     return;
    //   }
    // }
    // Add new users into users
    const newUser = {
      // _id: uuid.v4(),
      username: username,
      password: password,
      firstName: "",
      lastName: "",
      email: ""
    };
    const res2 = await axios.post("/api/user", newUser);
    console.log(newUser);
    // Navigate user into this profile
    history.push(`/user/${res2.data._id}`);
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={register}>
        <div className="form-group">
          {/* <label for="username">Username</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            // id="username"
            value={username}
            onChange={e => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          {/* <label for="password">Password</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            // id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          {/* <label for="verify password">Verify Password</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Enter password here..."
            // id="verify password"
            value={password2}
            onChange={e => setPassword2(e.target.value)}
          />
        </div>
        <button className="btn btn-primary btn-block">Register</button>
        <Link to="/login" className="btn btn-danger btn-block">
          Cancel
        </Link>
      </form>
    </div>
  );
}
