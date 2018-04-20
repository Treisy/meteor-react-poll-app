import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Poll from './Poll';

export default class Polls extends Component {
    render() {
        return (
            <div className="polls">
                { this.props.polls.map((poll) => {
                    return <Poll poll={poll} key={poll._id}/>
                })}
            </div>
        )
    }
}

Polls.propTypes = {
    polls: PropTypes.array.isRequired,
};