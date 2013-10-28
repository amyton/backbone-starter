
var messageOne = new Message({ 
	reason: "When you sleep so soundly"
});

var messageTwo = new Message({
	reason: "Ice cream in bed"
});

var messageThree = new Message({ 
	reason: "Wanting to suck on my nose"
});

var messageFour = new Message({
	reason: "Walking to food trucks"
});

var messageFive = new Message({
	reason: "When you spoon me"
});

var messageSix = new Message({
	reason: "Ice cream in bed"
});



var messages = [messageOne, messageTwo, messageThree, messageFour, messageFive, messageSix];

// Create a view for each message and add that view's element to the page.
_.each(messages, function (message) {
  var view = new MessageView({ 
  	model: message // class for div in html
  });
  view.render();
  $('#messages').append(view.el); 
});
