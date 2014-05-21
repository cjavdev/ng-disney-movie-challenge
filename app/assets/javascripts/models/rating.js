/*globals App, Backbone */
'use strict';

App.Models.Rating = Backbone.Model.extend({
  urlRoot: '/api/ratings',

  user: function () {
    if(!this._user) {
      this._user = new App.Models.User();
    }
    return this._user;
  },

  toJSON: function () {
    return { movie_rating: Backbone.Model.prototype.toJSON.call(this) };
  },

  parse: function (data) {
    if(data.user) {
      this.user().set(data.user, { parse: true });
      delete data.user;
    }

    return data;
  },
});
