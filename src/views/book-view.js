(function () {

  var bookTemplateHtml = $('#templates .book').html();
  var bookTemplate = _.template(bookTemplateHtml);

  window.BookView = Backbone.View.extend({
    // adds a book class to the view's default element
    className: "book",
    events: {
      "click .buy": "buy"
    },
    buy: function (e) {
      console.log("clicked buy?");
    },
    render: function () {
      var newBookHtml = bookTemplate( this.model.toJSON() );
      $(this.el).html(newBookHtml);
    }
  });

})();
