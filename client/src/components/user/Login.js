import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  async function onSubmit(e) {
    e.preventDefault();
    const res = await axios.get(
      `/api/user?username=${username}&password=${password}`
    );
    const user = res.data;

    if (user) {
      history.push(`/user/${user._id}`);
    } else {
      // for (let user of props.users) {
      //   // We found the user
      //   if (user.username === username && user.password === password) {
      //     // /user/:uid
      //     history.push(`/user/${user._id}`);
      //     return;
      //   }
      // }
      // we can't find user
      alert("Invalid credential, please try again.");
    }
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        {/* <!--child of form - using bootstrap class  --> */}
        <div className="form-group">
          {/* <label for="username">Username</label> */}
          <input
            type="text"
            // id="username"
            placeholder="Username"
            className="form-control"
            value={username}
            onChange={e => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          {/* <label for="password">Password</label> */}
          <input
            type="password"
            // id="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {/* <!-- Buttons and links that look like buttons, must use bootstrap classes btn and btn-block classes to render them as buttons where appropriate. --> */}

        <button className="btn btn-primary btn-block">Login</button>
        <Link to="/Register" className="btn btn-success btn-block">
          Register
        </Link>
      </form>
    </div>
  );
}
