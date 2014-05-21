/*globals App, Backbone */
'use strict';

App.Models.Rating = Backbone.Model.extend({
  urlRoot: '/api/ratings',

  toJSON: function () {
    return { movie_rating: Backbone.Model.prototype.toJSON.call(this) };
  }
});
