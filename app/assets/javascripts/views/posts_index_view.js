JA.Views.PostsIndexView = Backbone.View.extend({

  initialize: function() {
    var that = this;

    var renderCallback = that.render.bind(that);
    that.listenTo(that.collection, 'remove', renderCallback);
    that.listenTo(that.collection, 'change:title', renderCallback);
    that.listenTo(that.collection, 'reset', renderCallback);
    that.listenTo(that.collection, 'add', renderCallback);
  },

  events: {
    'click .delete': 'remove'
  },

  render: function () {
    var that = this;
    var $el = this.$el

    $el.empty();
    var renderedContent = JST["posts/index"]({
      posts: that.collection.models
    });

    that.$el.html(renderedContent);
    return that;
  },

  remove: function (event) {
    var that = this;
    var buttonID = $(event.currentTarget).attr("data-id");

    var posts = that.collection;
    var post = posts.get(buttonID);
    post.destroy();
  }

})