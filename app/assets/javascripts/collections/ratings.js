/*globals App, Backbone */
'use strict';

App.Collections.Ratings = Backbone.Collection.extend({
  url: 'api/ratings',
  model: App.Models.Rating
});
