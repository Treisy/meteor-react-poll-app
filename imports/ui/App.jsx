import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Polls from './Polls';
import PollsData from '/imports/api/polls';

export default class App extends TrackerReact(Component) {
    constructor() {
        super();
        this.state = {
            subscription: {
                pollsData: Meteor.subscribe('polls')
            }
        }
    }

    componentWithUnmount() {
        this.state.subscription.pollsData.stop();
    }

    pollsData() {
        return PollsData.find().fetch();
    }
    render() {

        return(
            <div className="main-layout">
                <header>
                    <h1>Polls</h1>
                </header>
                <Polls polls={this.pollsData()}/>
            </div>
        );
    }
}


App.propType = {
    polls: PropTypes.array.isRequired,
};