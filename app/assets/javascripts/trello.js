window.Trello = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Trello.boards = new Trello.Collections.Boards();
    Trello.boards.fetch();

    var view = new Trello.Views.BoardsIndex({
      collection: Trello.boards
    });

    $('nav.sidebar').html(view.render().$el);


    var router = new Trello.Routers.Router({
      $rootEl: $('main.content'),
      boards: Trello.boards
    });
    Backbone.history.start();
  }

};

Backbone.CompositeView = Backbone.View.extend({
  addSubview: function (selector, subview) {
    // So, what we're doing is: every time we add a new subview, we choose its
    // selector, and then shove the subview into the selector. So, imagine, new
    // comments go in .comments, etc.
    this.subviews(selector).push(subview);
    this.attachSubview(selector, subview);
  },

  attachSubview: function (selector, subview) {
    // This is useful for additions of elements, especially.
    this.$(selector).append(subview.$el);
    subview.delegateEvents();
  },

  attachSubviews: function () {
    // We're not actually going to attach each subview in this function; we're
    // delegating that to the singular helper method. This is called in those
    // cases when we're rendering the whole page fresh. Notice the parallels
    // between the structure of this and the overridden remove: method
    var view = this;
    _(this.subviews()).forEach(function (subviews, selector) {
      view.$(selector).empty();
      subviews.forEach(function (subview) {
        view.attachSubview(selector, subview);
      });
    });
  },

  remove: function () {
    // Overriding the default remove call, and then recursively removing each of
    // the subviews of the subviews of the current view. We still use the
    // prototype remove call to remove `this`, but the default remove doesn't
    // catch the children. Each element of subviews() can possibly be an array
    // of objects, so we have to iterate through these separately.
    Backbone.View.prototype.remove.call(this);
    _(this.subviews()).each(function (subviews) {
      _(subviews).each(function (subview) { subview.remove(); });
    });
  },

  removeSubview: function (selector, subview) {
    // remove the subview and all of its children.
    subview.remove();

    var subviews = this.subviews(selector);
    subviews.splice(subviews.indexOf(subview), 1);
  },

  subviews: function (selector) {
    // for finding the subviews that live inside the given selector. If the
    // selector doesn't contain any subviews, return an empty array.
    this._subviews = this._subviews || {};

    if (!selector) {
      return this._subviews;
    } else {
      this._subviews[selector] = this._subviews[selector] || [];
      return this._subviews[selector];
    }
  }
});

$(document).ready(function(){
  Trello.initialize();
});
