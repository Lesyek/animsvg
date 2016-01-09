import React, { Component } from 'react';
import Container from '../components/Container';

class Home extends Component {
    componentDidMount() {
        console.log('Home', this.props);
    }

    render() {
        return <div>
            <div className="jumbotron">
                <div className="container"><h1>Taki test czcionki</h1></div>
            </div>
            <div className="jumbotron">
                <div className="container" style={{ backgroundColor: 'transparent' }}>
                    <Container />
                </div>
            </div>
        </div>;
    }
}

export default Home;
