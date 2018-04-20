import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Polls extends Component {
    render() {
        return (
            <div className="polls">
                { this.props.polls.map((poll) => {
                    return <div key={poll._id}>{poll.question}</div>
                })}
            </div>
        )
    }
}

Polls.propTypes = {
    polls: PropTypes.array.isRequired,
};