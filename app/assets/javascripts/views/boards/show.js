Trello.Views.BoardShow = Backbone.CompositeView.extend({
  tagName: 'section',
  template: JST['boards/show'],

  events: {
    'click a.new-list': 'addList',
    'click button.delete-board': 'deleteBoard'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render),
    this.listenTo(
      this.model.lists(), 'add', this.addList
    ),
    this.listenTo(
      this.model.lists(), 'remove', this.removeList
    )

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

  addList: function (list) {
    var listShow =
      new Trello.Views.ListShow({ model: list });
    this.addSubview('.lists', listShow);
  },

  removeList: function (list) {
    var subview = _.find(
      this.subviews('.lists'),
      function (subview) {
        return subview.model === list;
      }
    );

    this.removeSubview('.lists'. subview);
  },

  deleteBoard: function () {

  }
});
