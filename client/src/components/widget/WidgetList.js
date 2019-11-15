import React from 'react';
import { Link } from 'react-router-dom';

export default function WidgetList() {
    return (
        <div>
  <nav className="navbar navbar-light bg-light fixed-top">
    <div>
      <Link to="/user/:uid/website/:wid/page" className="text-dark">
        <i className="fas fa-chevron-left" />
      </Link>
      <span className="navbar-brand h1 mb-0 ml-4">Widgets</span>
    </div>
    <Link to="/user/:uid/website/:wid/page/:pid/widget/new" className="text-dark">
      <i className="fas fa-plus" />
    </Link>
  </nav>
  <main className="container-fluid">
    <section>
      {/* Icons */}
      <div className="position-absolute absolute-right p-1 bg-light rounded-left">
        <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
          <i className="fas fa-cog" />
        </Link>
        <i className="fas fa-bars" />
      </div>
      <h1>Roxbury News</h1>
    </section>
    <section>
      {/* Icons */}
      <div className="position-absolute absolute-right p-1 bg-light rounded-left">
        <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
          <i className="fas fa-cog" />
        </Link>
        <i className="fas fa-bars" />
      </div>
      <h3>Volunteers In Roxbury Help Hundreds Of Immigrants Apply For Citizenship.</h3>
    </section>
    <section>
      <div className="position-absolute absolute-right p-1 bg-light rounded-left">
        <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
          <i className="fas fa-cog" />
        </Link>
        <i className="fas fa-bars" />
      </div>
      <img src="https://i.iheart.com/v3/re/new_assets/03c05165-07ad-4512-af23-4d325d2ff34c?ops=max(650,0),quality(80)" alt="volunteers" width="100%" />
    </section>
    <section>
      {/* Icons */}
      <div className="position-absolute absolute-right p-1 bg-light rounded-left">
        <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
          <i className="fas fa-cog" />
        </Link>
        <i className="fas fa-bars" />
      </div>
      <p>BOSTON <a href="https://wbznewsradio.iheart.com/">(WBZ NewsRadio)</a> — Saturday was Citizenship Day in Boston. Volunteers helped more than 400 immigrants apply to become citizens in Roxbury.</p>          
    </section>
    <section>
      <div className="position-absolute absolute-right p-1 bg-light rounded-left">
        <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
          <i className="fas fa-cog" />
        </Link>
        <i className="fas fa-bars" />
      </div>
      <h3>Tour of Roxbury</h3>
    </section>
    <section>
      {/* Icons */}
      <div className="position-absolute absolute-right p-1 bg-light rounded-left front">
        <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
          <i className="fas fa-cog" />
        </Link>
        <i className="fas fa-bars" />
      </div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe 
          width={560} 
          height={315} 
          src="https://www.youtube.com/embed/OaFgaMzL4Qk"
          title="video"
          frameBorder={0} 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </section>
    <section>
      <div className="position-absolute absolute-right p-1 bg-light rounded-left">
        <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
          <i className="fas fa-cog" />
        </Link>
        <i className="fas fa-bars" />
      </div>
      <p>
        In touring the neighborhood, Bob introduces the nine-unit Roxbury affordable housing project.
      </p>
    </section>
  </main>
  <nav className="navbar navbar-light bg-light fixed-bottom">
    <div>
      <i className="fas fa-play" />
      <i className="fas fa-eye ml-2" />
    </div>
    <Link to="/user/:uid" className="text-dark">
      <i className="fas fa-user" />
    </Link>
  </nav>
</div>
  );
}
