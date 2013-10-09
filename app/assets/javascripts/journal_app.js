window.JA = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($sidebar, $content, postsData) {
    var posts = new JA.Collections.Posts(postsData);

    this._installSidebar($sidebar, posts);

    new JA.Routers.PostsRouter($content, posts);
    Backbone.history.start();

  },

  _installSidebar: function ($sidebar, posts) {
    var that = this;

    var postsIndexView = new JA.Views.PostsIndexView({
      collection: posts
    });

    $sidebar.html(postsIndexView.render().$el);
  }
};

