JA.Views.PostEditView = Backbone.View.extend({
  events: {
    "click input.edit": "edit"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["posts/edit"]({
      post: that.model
    });

    that.$el.html(renderedContent);
    return that;
  },

  edit: function (event) {
    event.preventDefault();
    var that = this;
    var formData = $(event.currentTarget.form).serializeJSON();
    var post = that.model

    if (post.isNew()) {

      var posts = that.collection;
      post.set(formData.post);
      posts.create(post, {wait: true});

    } else {
      post.set(formData.post);
      post.save();
    }

    Backbone.history.navigate("#/");

    // TODO: ADD ERROR RENDERING
  }

})