import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className="container">
        <h1>Register</h1>
        <form>
            <div className="form-group">
                <label for="username">Username</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    id="username"
                    />
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input 
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                    />
            </div>
            <div className="form-group">
                <label for="verify password">Verify Password</label>
                <input
                     type="password"
                     className="form-control"
                     placeholder="Enter password here..."
                     id="verify password"
                     />
            </div>
            <Link to="/user/:uid" className="btn btn-primary btn-block">Register</Link>
            <Link to="/login" className="btn btn-danger btn-block">Cancel</Link>
        </form>
    </div>
    );
}
