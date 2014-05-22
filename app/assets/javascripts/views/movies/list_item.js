/*globals App, React */
'use strict';

App.Views.MovieListItem = Backbone.View.extend({
  template: JST['movies/list_item'],
  tagName: 'a',
  className: 'list-group-item',

  render: function () {
    var content = this.template({
      movie: this.model
    });
    this.$el.html(content);

    var view = new App.Views.MickeyRating({
      model: this.model.rating()
    });
    this.$('.mcrating').html(view.render().$el);
    return this;
  },
});

// var MovieListItem = App.Views.MovieListItem = React.createClass({
//   handleClick: function () {
//     React.renderComponent(
//       <MovieDetail movie={this.props.movie} />,
//       document.getElementById('movie-detail')
//     );
//   },
//
//   render: function () {
//     var movie = this.props.movie;
//
//     return (
//       <a onClick={this.handleClick} className="list-group-item">
//         <h4 className="list-group-item-heading">
//           {movie.get('name')}
//         </h4>
//         <div className="pull-right">
//           <Rating rating={movie.rating()} movie={movie} />
//         </div>
//         <p className="list-group-item-text">
//           {moment(movie.get('released_at')).year()}
//         </p>
//       </a>
//     );
//   }
// });
