Trello.Views.BoardShow = Backbone.View.extend({
  tagName: 'section',
  template: JST['boards/show'],

  events: {
    'click a.new-list': 'addList',
    'click button.delete-board': 'deleteBoard'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function () {
    this.$el.html(this.template({ board: this.model }));

    if (this.model.lists) {
      var boardUl = this;

      this.model.lists.forEach(function (list) {
        var view = new Trello.Views.ListShow({ model: list });

        board.$el.append(view.render().$el);
      });
    }

    return this;
  },

  addList: function () {

  },

  deleteBoard: function () {

  }
});
