JA.Collections.Posts = Backbone.Collection.extend({
  url: '/api/posts',
  model: JA.Models.Post
});