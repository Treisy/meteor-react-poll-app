import PollsData from '/imports/api/polls';

Meteor.publish('polls', function() {
    return PollsData.find();
});