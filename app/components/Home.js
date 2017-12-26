/* eslint-disable no-trailing-spaces */
import React from 'react';

import logo from '../resources/logo-300x106.png';

const Home = () =>
    <div id="home">
        <div className="d-flex justify-content-center">
            <img src={logo}/>
        </div>
        <h1 className="text-center">Consejo de Estudiantes de la ETSI Informática</h1>
        <p className="text-justify lead">
            Somos el consejo de estudiantes de la Escuela técnica superior de Informática de la Universidad de Málaga.
            Somos el órgano de máxima representación estudiantil dentro de la Escuela, y nuestra función es ayudar a
            todos los alumnos de la escuela con cualquier posible percance que puedan tener a lo largo de su periodo
            lectivo. Además, organizamos con frecuencia eventos para todos los alumnos como apoyo adicional a la
            formación de todos los alumnos.
        </p>
        <h2 className="text-center">¿Dónde nos encontramos?</h2>
        <p className="text-justify lead">
            Nos encontramos en el despacho 3.2B.1 de la ETSI de Informática de la Universidad de Málaga.
            Entre el módulo 3 y el módulo 2 al fondo de la Escuela.
        </p>
    </div>;

export default Home;
