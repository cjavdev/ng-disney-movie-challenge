/*globals App, Backbone, JST */
'use strict';

App.Views.MovieListItem = Backbone.View.extend({
  className: 'list-group-item',
  tagName: 'a',
  template: JST['movies/list_item'],

  events: {
    'click': 'openMovie'
  },

  openMovie: function (event) {
    event.preventDefault();
    this.model.collection.trigger('pickMovie', this.model.id);
  },

  render: function () {
    var content = this.template({
      movie: this.model
    });
    this.$el.html(content);

    var view = new App.Views.MickeyRating({
      model: this.model.rating()
    });
    this.$('.mcrating').html(view.render().$el);
    return this;
  }
});
