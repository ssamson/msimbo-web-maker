import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div class="container">
        <h1>Login</h1>  
        <form>
            {/* <!--child of form - using bootstrap class  --> */}
            <div className="form-group">
                <label for="username">Username</label>
                <input 
                    type="text"
                    id="username"
                    placeholder="Username"
                    className="form-control"
                    />  
            </div> 
            <div className="form-group">
                <label for="password">Password</label>
                <input 
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="form-control"
                    />
            </div>
            {/* <!-- Buttons and links that look like buttons, must use bootstrap classes btn and btn-block classes to render them as buttons where appropriate. --> */}
            <Link to="/user/:uid" className="btn btn-primary btn-block">Login</Link>
            <Link to="/Register" className="btn btn-success btn-block">Register</Link>
        </form>
    </div>
    )
};
