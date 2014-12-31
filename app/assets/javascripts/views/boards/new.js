Trello.Views.BoardNew = Backbone.View.extend({
  tagName: 'form',
  template: JST['boards/new'],
  events: {
    'click .add-board': 'addBoard'
  },

  addBoard: function (event) {
    event.preventDefault();

    var newName = this.$el.serializeJSON();

    this.collection.create(newName, {
      success: function (model) {
        this.$el.find('input').val("");
        Backbone.history.navigate("#/boards/" + model.id);
      }.bind(this)
    });


  },

  render: function () {
    this.$el.html(this.template);

    return this;
  }

})
