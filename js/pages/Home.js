import React, { Component } from 'react';


class Home extends Component {
    componentDidMount() {
        console.log('Home', this.props);
    }

    render() {
        return <div>
            <h1>Dupa blada</h1>
        </div>;
    }
}

export default Home;
