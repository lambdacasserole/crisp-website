(function() {
  var apiKey, blogId, buildItemHtml, getUrl, loadBlog;

  blogId = "1775218453231887977";

  apiKey = "AIzaSyDj73DQJINLQE5DDuvBekrqBmLUDvA0uc0";

  getUrl = "https://www.googleapis.com/blogger/v3/blogs/" + blogId + "/posts?key=" + apiKey;

  buildItemHtml = function(item) {
    var result;
    result = "<h2>" + item.title + "</h2>";
    result += "<p>By <a target=\"_blank\" href=\"" + item.author.url + "\">" + item.author.displayName + "</a> ";
    result += "on " + new Date(item.published).toDateString() + "</p>";
    result += "<p>" + item.content + "</p>";
    return result;
  };

  loadBlog = function() {
    return $.getJSON(getUrl, function(data) {
      var item, target, _i, _len, _ref, _results;
      target = $(".js-blog-posts");
      _ref = data.items;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        _results.push(target.append(buildItemHtml(item)));
      }
      return _results;
    });
  };

  $(document).ready(function() {
    return loadBlog();
  });

}).call(this);
