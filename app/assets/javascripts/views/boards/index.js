Trello.Views.BoardsIndex = Backbone.View.extend({
  tagName: 'ul',
  template: JST['boards/index_list_item'],

  initialize: function () {
    this.listenTo(this.collection, 'sync add remove', this.render);
  },

  render: function () {
    this.$el.empty();
    this.$el.addClass('boards');

    this.collection.forEach(function (board) {
      this.$el.append(this.template({ board: board }));
    }.bind(this))

    var $newLink = $('<a href="#/boards/new">Create Board</a>')

    this.$el.append($newLink);

    return this;
  }
})
