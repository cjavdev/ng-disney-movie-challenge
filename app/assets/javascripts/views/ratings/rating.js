/*globals App, Backbone, JST, $ */
'use strict';

App.Views.MickeyRating = Backbone.View.extend({
  className: 'mcrating pull-right',
  template: JST['ratings/rating'],

  initialize: function () {
    this.rating = this.model.get('rating');
    this.listenTo(this.model, 'change:rating sync', this.render);
  },

  events: {
    'mouseover .rating-input > span': 'starEnter',
    'mouseleave .rating-input': 'starExit',
    'click .rating-input > span': 'starChange'
  },

  render: function () {
    var content = this.template({
      rating: this.model.get('rating')
    });

    this.$el.html(content);
    return this;
  },

  starChange: function (event) {
    event.preventDefault();
    this.rating = $(event.target).data('value');
    this.model.save({ 'rating': this.rating }, {
      success: function () {
        App.movies.get(this.model.get('movie_id')).fetch();
        App.stats.fetch();
      }.bind(this)
    });
  },

  starEnter: function (event) {
    var $hoveredStar = $(event.target);
    this.model.set('rating', $hoveredStar.data('value'));
  },

  starExit: function () {
    this.model.set('rating', this.rating);
  }
});
