/*globals App, Backbone, JST */
'use strict';

App.Views.MovieList = Backbone.View.extend({
  template: JST['movies/list'],

  initialize: function (options) {
    this._subviews = [];
    this.currentMovieId = options.currentMovieId;
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'pickMovie', this.pickMovie);
  },

  pickMovie: function (movieId) {
    this.currentMovieId = movieId;
    this.renderCurrentMovie();
  },

  render: function () {
    this.removeSubviews();
    var content = this.template();
    this.$el.html(content);
    this.renderSubviews();
    this.renderCurrentMovie();
    return this;
  },

  renderCurrentMovie: function () {
    if(!this.currentMovieId) {
      return;
    }

    var view = new App.Views.MovieDetail({
      model: this.collection.get(this.currentMovieId)
    });

    this._subviews.push(view);
    this.$('#movie-detail').html(view.render().$el);
  },

  renderSubviews: function () {
    this.collection.each(function (movie) {
      var view = new App.Views.MovieListItem({
        model: movie
      });
      this._subviews.push(view);
      this.$('#movies').append(view.render().$el);
    }, this);
  },

  removeSubviews: function () {
    this._subviews.forEach(function (subview) {
      subview.remove();
    });
  },

  remove: function () {
    this.removeSubviews();
    Backbone.View.prototype.remove.call(this);
  }
});
