import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Poll extends Component {
    render() {
        options = this.props.poll.options.map( function (option) {
            return <div key={option.index}>{option.option}
                        <span> {option.votes}</span>
                    </div>
        });

        return (
            <div className="poll">
                <div className="question">
                    <h3>{this.props.poll.question}</h3>
                </div>
                <div className="panel-body">
                    {options}
                    <div className="poll-footer">
                        Created by {this.props.poll.author} <span className="badge badge-info pull-right">{this.props.poll.totalVotes}</span>
                    </div>
                </div>
            </div>
        )
    }
}

Poll.propTypes = {
    polls: PropTypes.object.isRequired,
};