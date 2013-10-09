JA.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function ($rootEl, posts){
    var that = this;
    this.$rootEl = $rootEl;
    this.posts = posts;
  },

  routes: {
    "": "index",
    "posts/create": "create",
    "posts/:id": "show",
    "posts/:id/edit": "edit"
  },

  index: function () {
    var that = this;
    that.$rootEl.empty();
  },

  show: function (id) {
    var that = this;
    var post = _(that.posts.models).findWhere({ id: parseInt(id) });

    var postShowView = new JA.Views.PostShowView({
      model: post
    });

    this.$rootEl.html(postShowView.render().$el);
  },

  edit: function (id){
    var that = this;
    var post = that.posts.get(id);

    var postEditView = new JA.Views.PostEditView({
      model: post
    });

    this.$rootEl.html(postEditView.render().$el);
  },

  create: function (){
    var that = this;
    var post = new JA.Models.Post();

    var postEditView = new JA.Views.PostEditView({
      model: post,
      collection: that.posts
    });

    this.$rootEl.html(postEditView.render().$el);
  }

})