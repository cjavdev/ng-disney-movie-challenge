/*globals App, Backbone, JST */
'use strict';

App.Views.RatingFeedItem = Backbone.View.extend({
  tagName: 'a',
  className: 'list-group-item',
  template: JST['ratings/feed_item'],

  render: function () {
    var content = this.template({
      user: this.model.user(),
      rating: this.model
    });

    this.$el.html(content);
    return this;
  }
});
