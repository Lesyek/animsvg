import React, { Component } from 'react';

import styles from '../css/main.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            horizontal: props.children.props.route.horizontal || false,
            title: props.children.props.route.title || '',
        };
    }

    render() {
        return <div>
            {this.props.children}
        </div>;
    }
}

export default App;
