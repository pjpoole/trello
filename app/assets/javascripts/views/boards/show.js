Trello.Views.BoardShow = Backbone.View.extend({
  tagName: 'section',
  template: JST['boards/show'],

  render: function () {
    this.$el.html(this.template({ board: this.model }));
    return this;
  }
});
