/*globals App, Backbone, JST, $ */
'use strict';

App.Views.Navbar = Backbone.View.extend({
  template: JST['shared/navbar'],

  initialize: function (options) {
    this.$el = $('#nav');
    this.router = options.router;
    this.listenTo(this.router, 'route', this.render);
  },

  render: function (route) {
    this.$('li').removeClass('active');
    this.$('li[data-route="' + route + '"]').addClass('active');
    return this;
  }
});
