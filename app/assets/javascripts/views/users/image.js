/*globals App, React */
'use strict';

App.Views.UserImage = Backbone.View.extend({
  template: JST['users/image'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
});

// var UserImage = React.createClass({
//   render: function () {
//     var user = this.props.user;
//     return (
//       <img src={user.get('image')} height="60px" />
//     );
//   },
// });
