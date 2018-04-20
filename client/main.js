import React from 'react';
import  { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx'

let polls = [
    {
        _id:1,
        question: 'What color do you like?',
        options: [
            {
                index: 1,
                option: 'black',
                votes: 5
            },
            {
                index: 2,
                option: 'white',
                votes: 7
            }
        ],
        totalVotes: 12,
        author: 'Trey',
        createdAt: new Date()
    },
    {
        _id:2,
        question: 'Where do you live?',
        options: [
            {
                index: 1,
                option: 'Boston',
                votes: 5
            },
            {
                index: 2,
                option: 'New York',
                votes: 10
            }
        ],
        totalVotes: 15,
        author: 'Astrid',
        createdAt: new Date()
    }
];

Meteor.startup(() => {
   render(<App polls={polls}/>, document.getElementById('render-target'));
});
