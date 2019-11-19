import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Profile(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const params = useParams();

  useEffect(() => {
    for (let user of props.users) {
      if (user._id === params.uid) {
        setUsername(user.username);
        setEmail(user.email);
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setPassword(user.password);
        return;
      }
    }
  }, [params.uid, props.users]);

  const update = () => {
    const newUser = {
      _id: params.uid,
      username: username,
      password: password,
      email: email,
      firstName: firstName,
      lastName: lastName
    };

    // update user in users
    props.updateUser(newUser);

    alert("user info is updated!");
  };

  return (
    <div>
      <nav className="navbar bg-primary navbar-dark fixed-top">
        <span className="navbar-brand h1 mb-0">Profile</span>
        <span className="click" onClick={update}>
          <i className="fas fa-check text-light" />
        </span>
        {/* <Link to="Profile.html" className="text-light"></Link> */}
      </nav>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username here..."
              id="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email address here..."
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your first name here..."
              id="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your last name here..."
              id="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
        </form>
        <Link
          to={`/user/${params.uid}/website`}
          className="btn btn-primary btn-block"
        >
          Websites
        </Link>
        <Link to="/login" className="btn btn-danger btn-block">
          Logout
        </Link>
      </div>
      <nav className="navbar bg-primary fixed-bottom">
        <span />
        <Link to="/user/:uid" className="text-light">
          <i className="fas fa-user" />
        </Link>
      </nav>
    </div>
  );
}
