/*globals App, React */
'use strict';

App.Views.Stats = Backbone.View.extend({
  template: JST['users/stats'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
});

// var StatList = React.createClass({
//   getInitialState: function () {
//     var data = JSON.parse($('#user-stats').html());
//     var complete = 100 * data.rating_count / data.movie_count;
//     return {
//       complete: complete,
//       ratings: data.rating_count,
//       movies: data.movie_count
//     };
//   },
//
//   render: function () {
//     console.log(this.state);
//     return (
//       <div>
//         <h2>Progress</h2>
//         <div className="progress progress-striped active">
//           <div className="progress-bar" role="progressbar" aria-valuenow={this.state.complete} aria-valuemin="0" aria-valuemax="100" style={{ width: this.state.complete + '%' }}>
//             <span className="sr-only">{this.state.complete + '% Complete'}</span>
//           </div>
//         </div>
//         You've watched {this.state.ratings} out of {this.state.movies} Disney Movies!
//       </div>
//     );
//   }
// });
