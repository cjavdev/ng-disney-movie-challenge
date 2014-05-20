/*globals App, Backbone */
App.Collections.Movies = Backbone.Collection.extend({
  url: 'api/movies',
  model: App.Models.Movie
});
