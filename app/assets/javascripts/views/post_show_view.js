JA.Views.PostShowView = Backbone.View.extend ({

  initialize: function() {
    var that = this;
    var renderCallback = that.render.bind(that);
    that.listenTo(that.model, 'change', renderCallback);
  },

  events: {
    "dblclick .show": "toggle",
    "dblclick .edit": "edit"
  },

  render: function () {
    var that = this;

    var renderedContent = JST["posts/show"]({
      post: that.model
    });

    that.$el.html(renderedContent);
    return that;
  },

  toggle: function(event) {
    var that = this;
    $clicked_element = $(event.currentTarget)
    $parent = $clicked_element.parent();

    $parent.children().toggleClass("hide");
  },

  edit: function (event){
    var that = this;
    $clicked_element = $(event.currentTarget)
    $parent = $clicked_element.parent();

    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    var post = that.model
    post.set(formData.post);
    post.save();
    $parent.children().toggleClass("hide");
  }

})
