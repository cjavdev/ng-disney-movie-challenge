/*globals App, Backbone */
'use strict';

App.Models.Movie = Backbone.Model.extend({
  urlRoot: '/api/movies',

  rating: function () {
    if(!this._rating) {
      this._rating = new App.Models.Rating();
    }
    return this._rating;
  },

  parse: function (data) {
    if(data.rating) {
      this.rating().set(data.rating);
      delete data.rating;
    }

    return data;
  },
});
