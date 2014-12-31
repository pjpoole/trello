Trello.Collections.Lists = Backbone.Collection.extend({
  model: Trello.Models.List,
  url: "api/lists",

  comparator: "ord"
});
