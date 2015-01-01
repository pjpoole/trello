Trello.Views.BoardsIndex = Backbone.View.extend({
  tagName: 'ul',
  template: JST['boards/index_list_item'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    this.$el.empty();
    this.$el.addClass('boards');

    this.collection.forEach(function (board) {
      this.$el.append(this.template({ board: board }));
    }.bind(this))

    var $newLink = $('<a class="new-board" href="#/boards/new">Create board</a>')

    this.$el.append($('<br>'),$newLink);

    return this;
  }
})
