import React from 'react';
import { Link } from 'react-router-dom';

export default function WidgetYouTube() {
    return (
        <div>
  <nav className="navbar navbar-light bg-light fixed-top">
    <div>
      <Link to="/user/:uid/website/:wid/page/:pid/widget" className="text-dark">
        <i className="fas fa-chevron-left" />
      </Link>
      <span className="navbar-brand h1 mb-0 ml-4">Edit Widget</span>
    </div>
    <Link to="/user/:uid/website/:wid/page/:pid/widget" className="text-dark">
      <i className="fas fa-check" />
    </Link>
  </nav>
  <main className="container">
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter widget name..." className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="text">Text</label>
        <input type="text" id="text" placeholder="Enter widget text..." className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="url">URL</label>
        <input type="text" id="url" placeholder="Enter YouTube Address..." className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="width">Width</label>
        <input type="range" min={1} max={100} className="form-control" id="width" />
      </div>
      <Link to="/user/:uid/website/:wid/page/:pid/widget" className="btn btn-danger btn-block">Delete</Link>
    </form>
  </main>
  <footer className="navbar navbar-light fixed-bottom">
    <span />
    <Link to="/user/:uid" className="text-dark">
      <i className="fas fa-user" />
    </Link>
  </footer>
</div>
   );
}
