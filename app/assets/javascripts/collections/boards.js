Trello.Collections.Boards = Backbone.Collection.extend({
  model: Trello.Models.Board,
  url: 'api/boards',

  getOrFetch: function (id) {
    var boards = this;

    var board = boards.get(id);
    if (!board) {
      board = new Trello.Models.Board({id: id}, {
        collection: boards
      });

      board.fetch({
        success: function () {
          boards.add(board);
        }
      });
    }

    return board;
  }

});
