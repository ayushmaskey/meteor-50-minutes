Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  Template.tasks.helpers({
    tasks: function() {
      return Tasks.find({}, {sort: {createAt: -1 } });
    }
  });
}

if (Meteor.isServer) {

}