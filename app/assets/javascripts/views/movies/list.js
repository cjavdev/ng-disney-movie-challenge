/*globals App, Backbone, JST */
'use strict';

App.Views.MovieList = Backbone.View.extend({
  template: JST['movies/list'],

  initialize: function () {
    this._subviews = [];
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    this.removeSubviews();
    var content = this.template();
    this.$el.html(content);
    this.renderSubviews();
    return this;
  },

  renderSubviews: function () {
    this.collection.each(function (movie) {
      var view = new App.Views.MovieListItem({
        model: movie
      });
      this._subviews.push(view);
      this.$('#movies').append(view.render().$el);
    }, this);
  },

  removeSubviews: function () {
    this._subviews.forEach(function (subview) {
      subview.remove();
    });
  },

  remove: function () {
    this.removeSubviews();
    Backbone.View.prototype.remove.call(this);
  },
});

// var MovieList = React.createClass({
//   componentDidMount: function () {
//     $('.rating').rating();
//     $('.list-group').on('change', '.rating', function (event) {
//       var newRating = event.currentTarget.value,
//         movieId = $(event.currentTarget).data('movie-id');
//
//       var movie = App.movies.get(movieId);
//       movie.rating().save({ rating: newRating });
//     });
//   },
//
//   render: function () {
//     var movies = this.props.movies;
//     return (
//       <div className="movie-list">
//         <h1>Movies</h1>
//         <div className="list-group">
//           {movies.map(function (movie) {
//             return <MovieListItem movie={movie} />;
//           })}
//         </div>
//       </div>
//     );
//   }
// });
