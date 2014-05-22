/*globals App, Backbone, JST */
'use strict';

App.Views.RatingFeed = Backbone.View.extend({
  template: JST['ratings/feed'],

  initialize: function () {
    this._subviews = [];
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.renderRatings();
    return this;
  },

  renderRatings: function () {
    this.removeSubviews();
    this.collection.each(function (rating) {
      var view = new App.Views.RatingFeedItem({
        model: rating
      });

      this._subviews.push(view);
      this.$('#rating-list').append(view.render().$el);
    }, this);
  },

  removeSubviews: function () {
    this._subviews.forEach(function (view) {
      view.remove();
    });
  },

  remove: function () {
    this.removeSubviews();
    Backbone.View.prototype.remove.call(this);
  }
});
