/*globals App, Backbone, JST */
'use strict';

App.Views.UserStats = Backbone.View.extend({
  template: JST['users/stats'],

  initialize: function () {
    this.listenTo(App.stats, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      stats: this.model
    });

    this.$el.html(content);
    return this;
  }
});
