
var bookOne = new Book({ 
	title: "Twilight",
	author: "Team Edward",
	price: "50"
});

var bookTwo = new Book({ 
	title: "Qi Vamps",
	author: "Mystic Medusa",
	price: "2"
});
	

var books = [bookOne, bookTwo];

// Create a view for each book and add that view's element to the page.
_.each(books, function (book) {
  var view = new BookView({ 
  	model: book // class for div in html
  });
  view.render();
  $('#books').append(view.el); 
});
