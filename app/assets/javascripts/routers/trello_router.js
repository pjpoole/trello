Trello.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl
  },

  routes: {
    "": "boardsIndex"
  },

  boardsIndex: function () {
    var view = new Trello.Views.BoardsIndex({
      collection: Trello.boards
    });

    this.$rootEl.html(view.render().$el);
  }
})
