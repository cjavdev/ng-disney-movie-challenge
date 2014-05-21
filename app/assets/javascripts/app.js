/** @jsx React.DOM */
/*globals window, app, $ */
"use strict";

window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    var router = new App.Routers.Router()
    Backbone.history.start();
  }
};

$(function () {
  window.App.initialize();
});
