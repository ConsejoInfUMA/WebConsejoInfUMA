/* eslint-disable no-trailing-spaces */
import React from 'react';
import mapStyle from '../styles/_map.scss';

import logo from '../resources/logo-300x106.png';

class Home extends React.Component  {
    render() {
        return (
        <div id="home">
            <div className="d-flex justify-content-center">
                <img src={logo}/>
            </div>
            <h1 className="text-center">Consejo de Estudiantes de la ETSI Informática</h1>
            <p className="text-justify lead">
                Somos el consejo de estudiantes de la Escuela Técnica Superior de Ingeniería Informática de la Universidad de Málaga.
                Somos el órgano de máxima representación estudiantil dentro de la Escuela, y nuestra función es ayudar a
                todos los alumnos de la escuela con cualquier posible percance que puedan tener a lo largo de su periodo
                lectivo. Además, organizamos con frecuencia eventos para todos los alumnos como apoyo adicional a la
                formación de todos los alumnos.
            </p>
            <h2 className="text-center">¿Dónde nos encontramos?</h2>
            <p className="text-justify lead">
                Nos encontramos en el despacho 3.2B.1 de la ETSI de Informática de la Universidad de Málaga.
                El despacho está al fondo del módulo 3 de la Escuela.
            </p>
            <h3 className="text-center">Localización de la Escuela</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.7393243208935!2d-4.4797959363527315!3d36.71505861507122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9fa32cc2e6b0bbf9!2sEscuela+T%C3%A9cnica+Superior+de+Ingenier%C3%ADa+Inform%C3%A1tica+(Universidad+de+M%C3%A1laga)!5e0!3m2!1sen!2ses!4v1514485059804"
                    frameBorder="0" style={mapStyle} allowFullScreen id="map"/>
        </div>);
    }
}

export default Home;
