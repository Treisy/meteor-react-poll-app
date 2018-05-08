import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';


export default class Poll extends Component {
    render() {
        return (
            <div className="poll">
                <div className="question">
                    <h3>{this.props.poll.question}</h3>
                </div>
                <div className="panel-body">
                    <Option options={this.props.poll.options} key={this.props.poll.options.index}/>
                    <div className="poll-footer">
                        Created by {this.props.poll.author} <span className="badge badge-info pull-right">{this.props.poll.totalVotes}</span>
                    </div>
                </div>
            </div>
        )
    }
}

Poll.propTypes = {
    poll: PropTypes.object.isRequired,
};