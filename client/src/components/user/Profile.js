import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
    return (
<div>
  <nav className="navbar bg-primary navbar-dark fixed-top">
    <span className="navbar-brand h1 mb-0">Profile</span>
    <Link to="Profile.html" className="text-light">
      <i className="fas fa-check text-light" />
    </Link>
  </nav>
  <div className="container">
    <form>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" className="form-control" placeholder="Enter username here..." id="username" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" placeholder="Enter your email address here..." id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input type="text" className="form-control" placeholder="Enter your first name here..." id="firstName" />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" className="form-control" placeholder="Enter your last name here..." id="lastName" />
      </div>
    </form>
    <Link to="/user/:uid/website" className="btn btn-primary btn-block">Websites</Link>
    <Link to="/login" className="btn btn-danger btn-block">Logout</Link>
  </div>
  <nav className="navbar bg-primary fixed-bottom">
    <span />
    <Link to="/user/:uid" className="text-light">
      <i className="fas fa-user" />
    </Link>
  </nav>
</div>
    )
};
