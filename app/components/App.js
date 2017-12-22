import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
// import { footer } from '../styles/footer.scss';
import Routes from '../routes';

const App = withRouter(({location}) =>
    <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
                <a href="#" className="navbar-brand">ConsejoInfUma</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHiddable" aria-controls="navbarHiddable" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarHiddable">
                    <ul className="navbar-nav mr-auto">
                        <li className={location.pathname === '/' ? 'nav-item active' : 'nav-item'}>
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className={location.pathname === '/about' ? 'nav-item active' : 'nav-item'}>
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container">
            { Routes }
        </div>
    </div>);

App.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default App;
