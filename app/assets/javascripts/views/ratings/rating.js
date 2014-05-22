/*globals App, Backbone, JST */
'use strict';

App.Views.MickeyRating = Backbone.View.extend({
  className: 'mcrating pull-right',
  template: JST['ratings/rating'],

  initialize: function () {
    this.rating = this.model.get('rating');
    this.listenTo(this.model, 'change:rating', this.render);
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
    this.model.set('rating', this.rating);
    this.model.save();
  },

  starEnter: function (event) {
    var $hoveredStar = $(event.target);
    this.model.set('rating', $hoveredStar.data('value'));
  },

  starExit: function (event) {
    this.model.set('rating', this.rating);
  }
});
