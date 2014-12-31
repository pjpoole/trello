Trello.Views.BoardNew = Backbone.View.extend({
  tagName: 'form',
  template: JST['boards/new'],
  events: {
    'click .add-board': 'addBoard'
  },

  addBoard: function (event) {
    event.preventDefault();

    var newName = this.$el.serializeJSON();

    // debugger
    this.collection.create(newName, {
      success: function () {
        this.$el.find('input').val("");
      }.bind(this)
    });

  },

  render: function () {
    this.$el.html(this.template);

    return this;
  }

})
