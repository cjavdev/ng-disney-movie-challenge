/*globals App, Backbone, JST */
'use strict';

App.Views.Stats = Backbone.View.extend({
  template: JST['users/stats'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
