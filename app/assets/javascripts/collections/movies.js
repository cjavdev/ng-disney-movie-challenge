/*globals App, Backbone */
'use strict';

App.Collections.Movies = Backbone.Collection.extend({
  url: 'api/movies',
  model: App.Models.Movie
});
