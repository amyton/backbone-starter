(function () {

  var messageTemplateHtml = $('#templates .message').html();
  var messageTemplate = _.template(messageTemplateHtml);

  window.MessageView = Backbone.View.extend({
    // adds a message class to the view's default element
    className: "message",
    events: {
      // "click .buy": "buy"
    },
    buy: function (e) {
      console.log("clicked buy?");
    },
    render: function () {
      var newMessageHtml = messageTemplate( this.model.toJSON() );
      $(this.el).html(newMessageHtml);
    }
  });

})();
