Template.errors.helpers({
  errors: function() {
  	return Errors.find();
  }
});
Template.error.rendered = function() {
	//This call back happens after the template is rendered or complete.
	var error = this.data;
	Meteor.defer(function() {
		Errors.update(error._id, {$set: {seen: true}});
	});
};