import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import telegram from '../resources/telegramLogo.png';
import gmail from '../resources/gmailLogo.png';

class Contact extends React.Component {
    componentDidMount() {
        window.FB.XFBML.parse();
    }
    componentDidUpdate() {
        window.FB.XFBML.parse();
    }

    render() {
        return (
            <div id="contact">
                <h1 className="justify-content-center">¡Contacta con nosotros!</h1>
                <p className="justify-content-between">
                    En esta sección encontrarás diferentes vías de contactar con nosotros, ¿a qué esperas¿
                    ¡Si tienes algún problema relacionado con los estudios, contacta con nosotros y te ayudaremos!
                </p>
                <div className="row">
                    <div className="col">
                        <Timeline
                            dataSource={{
                                sourceType: 'profile',
                                screenName: 'ConsejoInfUma'
                            }}
                            options={{
                                username: 'ConsejoInfUma',
                                height: '600',
                            }}
                            onLoad={() => console.log('Timeline is loaded!')}
                        />
                    </div>
                    <div className="">
                        <div className="fb-page" data-href="https://www.facebook.com/ConsejoInfUma"
                             data-tabs="timeline" data-height="600" data-small-header="true"
                             data-adapt-container-width="true" data-hide-cover="false"
                             data-show-facepile="false">
                            <blockquote cite="https://www.facebook.com/ConsejoInfUma"
                                        className="fb-xfbml-parse-ignore">
                                <a href="https://www.facebook.com/ConsejoInfUma">
                                    Consejo de Estudiantes ETSI Informática - UMA
                                </a>
                            </blockquote>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <a href="https://t.me/ConsejoETSII" target="_blank" rel="noopener noreferrer">
                                <div className="square">
                                    <div className="square-content">
                                        <img className="card-img-top" src={telegram} alt="Telegram"/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Telegram</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card">
                            <a href="mailto:consejoinfuma@gmail.com" target="_blank" rel="noopener noreferrer">
                                <div className="square">
                                    <div className="square-content">
                                        <img className="card-img-top" src={gmail} alt="gmail"/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Gmail</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
        /* Telegram taken from https://github.com/Alkesst/alkesst.github.io/tree/gh-pages */
    }
}
export default Contact;
