import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

import Poll from './Poll';

const masonryOptions = {
    transitionDuration: 0
}

export default class Polls extends Component {
    render() {
        const childElements = this.props.polls.map((poll) => {
            return <Poll poll={poll} key={poll._id}/>
        })

        return (
            <div className="polls">
                <Masonry className="gallery" options={masonryOptions} disableImagesLoaded={false}>
                    {childElements}
                </Masonry>
            </div>
        )
    }
}

Polls.propTypes = {
    polls: PropTypes.array.isRequired,
};