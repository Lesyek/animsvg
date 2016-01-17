import React, { Component } from 'react';
import Container from '../components/Container';

class Home extends Component {
    render() {
        return <div className="jumbotron">
                <div className="page-header text-center">
                    <h1>PostCSS rules <small>Poczekajcie to sami się przekonacie</small></h1>
                </div>

                <div className="container">
                    <h1>Font Magician!</h1>

                    <div className="alert alert-success" role="alert">Mnóstwo pluginów na stronie postCSS</div>
                    <div className="alert alert-info" role="alert">PostCSS to parser JavaScript dla CSS</div>
                    <div className="alert alert-warning" role="alert">Ilość pluginów zwiększa czas przeładowania webpacka</div>
                    <div className="alert alert-danger" role="alert">Wszystko się tak szybko rozwija, że po updacie pluginów może cos przestać działać</div>

                    <div className="panel panel-default">
                        <div className="panel-body text-center">Poniżej trochę więcej magii</div>
                    </div>

                    <div className="container text-center" style={{ backgroundColor: 'transparent' }}>
                        <h1>postcss-svg</h1>
                        <Container />
                    </div>

                    <div className="container text-center">
                        <h1>postcss-write-svg</h1>
                        {/*
                            <h2>ItLamb</h2>
                            */}
                        <div className="it-lamb"></div>
                    </div>

                </div>
        </div>;
    }
}

export default Home;
