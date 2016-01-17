import React, { Component } from 'react';
import Container from '../components/Container';

class Home extends Component {
    componentDidMount() {
        console.log('Home', this.props);
    }

    render() {
        return <div className="jumbotron">
                <div className="page-header text-center">
                    <h1>PostCSS rules <small>Poczekajcie to sami sie przekonacie</small></h1>
                </div>

                <div className="container">
                    <h1>Font Magician!</h1>

                    <div className="alert alert-success" role="alert">Mnostwo pluginow na stornie postCSS</div>
                    <div className="alert alert-info" role="alert">PostCSS to parser JavaScript dla CSSow</div>
                    <div className="alert alert-warning" role="alert">Ilosc pluginow zwieksza czas oczekiwania na przeladowanie webpacka</div>
                    <div className="alert alert-danger" role="alert">Wszystko sie tak szybko rozwija, ze po updacie pluginu moze cos przestac dzialac</div>

                    <div className="panel panel-default">
                        <div className="panel-body text-center">Ponizej troche wiecej magii</div>
                    </div>

                    <div className="container text-center" style={{ backgroundColor: 'transparent' }}>
                        <h1>postcss-svg</h1>
                        <Container />
                    </div>

                    <div className="container text-center">
                        <h1>postcss-write-svg</h1>
                        <h2>ItLamb</h2>
                        <div className="it-lamb"></div>
                    </div>

                </div>
        </div>;
    }
}

export default Home;
