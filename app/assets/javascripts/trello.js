window.Trello = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Trello.boards = new Trello.Collections.Boards();
    Trello.boards.fetch();

    var router = new Trello.Routers.Router({
      $rootEl: $('main.content')
    });

    Backbone.history.start();
  }

};

$(document).ready(function(){
  Trello.initialize();
});
