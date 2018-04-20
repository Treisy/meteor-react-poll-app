import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Polls from './Polls';

export default class App extends Component {
    render() {

        return(
            <div className="main-layout">
                <header>
                    <h1>Polls</h1>
                </header>
                <Polls polls={this.props.polls}/>
            </div>
        );
    }
}


App.propType = {
    polls: PropTypes.array.isRequired,
};