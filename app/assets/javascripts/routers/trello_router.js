Trello.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl,
    this.boards = options.boards
  },

  routes: {
    "": "boardsIndex",
    "boards/new": "boardNew",
    "boards/:id": "boardShow"
  },

  boardsIndex: function () {
    // // This functionality subsumed into ../trello.js
    // var view = new Trello.Views.BoardsIndex({
    //   collection: Trello.boards
    // });
    //
    // this.$rootEl.html(view.render().$el);
  },

  boardShow: function (id) {
    var view = new Trello.Views.BoardShow({ model: this.boards.get(id) });

    // TODO: swapview/CompositeView
    this.$rootEl.html(view.render().$el);
  },

  boardNew: function () {
    var view = new Trello.Views.BoardNew({ collection: this.boards });

    this.$rootEl.html(view.render().$el);
  }
})
