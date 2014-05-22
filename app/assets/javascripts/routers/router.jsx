/** @jsx React.DOM */
/*globals App, Backbone */

App.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    '_=_': 'index',
    'feed': 'feed',
    ':id': 'show'
  },

  show: function (id) {
    App.movies = new App.Collections.Movies();

    App.movies.fetch().then(function () {
      React.renderComponent(
        <MovieList movies={App.movies}/>,
        document.getElementById('main')
      );
      var movie = App.movies.get(id);
      React.renderComponent(
        <MovieDetail movie={movie} />,
        document.getElementById('movie-detail')
      );
    });

    React.renderComponent(<StatList />, document.getElementById('stat-list'));
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
