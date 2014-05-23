/*globals App, Backbone, JST */
'use strict';

App.Views.MovieDetail = Backbone.View.extend({
  template: JST['movies/detail'],

  initialize: function () {
    this.listenTo(this.model, 'change:avg_rating', this.render);
  },

  render: function () {
    if(!this.model) {
      return this;
    }

    var content = this.template({
      movie: this.model
    });

    this.$el.html(content);
    return this;
  }
});
