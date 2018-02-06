import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Routes from '../routes';

class App extends Component {
    componentDidMount() {
        this.props.loadFromStorage('gs://webconsejoinfuma.appspot.com/extra_resources/logo-fondo_oscuro-papel.png', 'logo_navbar');
    }

    render() {
        const {location, navBarLogo} = this.props;
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container">
                        <a href="#" className="navbar-brand">
                            <img src={navBarLogo} width="30" height="30" className="d-inline-block align-top" alt=""/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHiddable" aria-controls="navbarHiddable" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarHiddable">
                            <ul className="navbar-nav mr-auto">
                                <li className={location.pathname === '/' ? 'nav-item active' : 'nav-item'}>
                                    <Link className="nav-link" to="/">Inicio</Link>
                                </li>
                                <li className={location.pathname === '/about' ? 'nav-item active' : 'nav-item'}>
                                    <Link className="nav-link" to="/about">Acerca</Link>
                                </li>
                                <li className={location.pathname === '/contact' ? 'nav-item actitve' : 'nav-item'}>
                                    <Link className="nav-link" to="/contact">Contacto</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    { Routes }
                </div>
            </div>
        );
    }
}

App.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    navBarLogo: PropTypes.string,
    loadFromStorage: PropTypes.func.isRequired
};

export default withRouter(App);
