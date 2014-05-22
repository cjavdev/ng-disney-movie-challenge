/** @jsx React.DOM */
/*globals App, React */
"use strict";

var UserImage = React.createClass({
  render: function () {
    var user = this.props.user;
    return (
      <img src={user.get('image')} height="60px" />
    );
  },
});
