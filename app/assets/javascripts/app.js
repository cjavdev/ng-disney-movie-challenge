/*globals window, App, $, Backbone */
'use strict';

window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    App.stats = new App.Models.Stats(JSON.parse($('#user-stats').html()));

    var router = new App.Routers.Router({
      $rootEl: $('#main')
    });
    var navbar = new App.Views.Navbar({
      router: router
    });
    Backbone.history.start();
  }
};
