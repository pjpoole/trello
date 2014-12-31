window.Trello = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Trello.boards = new Trello.Collections.Boards();
    Trello.boards.fetch();

    var view = new Trello.Views.BoardsIndex({
      collection: Trello.boards
    });

    $('nav.sidebar').html(view.render().$el);


    var router = new Trello.Routers.Router({
      $rootEl: $('main.content'),
      boards: Trello.boards
    });
    Backbone.history.start();
  }

};

$(document).ready(function(){
  Trello.initialize();
});
