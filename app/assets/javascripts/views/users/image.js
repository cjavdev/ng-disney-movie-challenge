/*globals App, Backbone, JST */
'use strict';

App.Views.UserImage = Backbone.View.extend({
  template: JST['users/image'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
