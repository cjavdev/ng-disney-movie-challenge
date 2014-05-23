/*globals App, Backbone */
App.Models.Stats = Backbone.Model.extend({
  url: 'api/stats',

  complete: function () {
    return (100 * (this.get('rating_count') / this.get('movie_count')));
  }
});
