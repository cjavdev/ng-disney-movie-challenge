/** @jsx React.DOM */
/*globals App, Backbone */

App.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    '_=_': 'index',
    'feed': 'feed'
  },

  index: function () {
    App.movies = new App.Collections.Movies();

    App.movies.fetch().then(function () {
      React.renderComponent(
        <MovieList movies={App.movies}/>,
        document.getElementById('main')
      );
    });

    React.renderComponent(<StatList />, document.getElementById('stat-list'));
  },

  feed: function () {
    App.ratings = new App.Collections.Ratings();
    App.ratings.fetch().then(function () {
      React.renderComponent(
        <RatingFeed ratings={App.ratings}/>,
        document.getElementById('main')
      );
    });
  },
});
