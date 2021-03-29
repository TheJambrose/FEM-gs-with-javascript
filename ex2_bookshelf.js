// # Three Pillars of JS

// This is an exercise to briefly practice the three pillars of JS: Types / Coercion, Scope / Closures, and `this` / Prototypes.

// ## Instructions

// The code of this exercise can be executed via Node.js or in the console tab of your browser's developer tools.
// 1. In the `printFavoriteBooks()` function, make sure there's no accidental type conversion (ie, from number to string).
	// 	Hint: Use `String(..)` to coerce something to a string type.
// 2. Move the `addFavoriteBook(..)` and `printFavoriteBooks()` functions into the `Bookshelf` class as methods. Modify them so they use the `this` keyword to access the `favoriteBooks` array.
	// 	Hint: `class` methods don't use the `function` keyword, just their name.
// 3. Fill out the definition of the `loadBooks(..)` function, which should receive an instance of the `Bookshelf` class that you will pass to it.
// 4. `loadBooks(..)` should call the provided `fakeAjax(..)`, using `BOOK_API` as the URL and an inline function expression as the callback.
// 5. The callback will be passed an array of book names. Loop through this array, passing each book name to the `addFavoriteBook(..)` method of the `Bookshelf` instance passed to `loadBooks(..)`. Then call the `printFavoriteBooks()` method.
// 6. Create an instance of `Bookshelf` class, and pass it as an argument to `loadBooks(..)`.
	// 	Hint: Class instantiation: `new Whatever()`.


console.log('node ran');

class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }

  // TODO: define methods `addFavoriteBook(..)`
  // and `printFavoriteBooks()`
  addFavoriteBook(bookName) {
    if (!bookName.includes('Great')) {
      this.favoriteBooks.push(bookName);
    }
  }
  printFavoriteBooks() {
    console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
    for (let bookName of this.favoriteBooks) {
      console.log(bookName);
    }
  }
}

function loadBooks(Bookshelf) {
  // TODO: call fakeAjax( .. );
    
  fakeAjax(BOOK_API, function onBooks(bookNames){
	
	// This could (maybe SHOULD?) be a for (item  of items) for loop. It would be a little easier to read
  	for (var i = 0; i < bookNames.length; i++) {
  		Bookshelf.addFavoriteBook(bookNames[i]);
  	} 
  	Bookshelf.printFavoriteBooks();
  });
}

var BOOK_API = 'https://some.url/api';

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      'A Song of Ice and Fire',
      'The Great Gatsby',
      'Crime & Punishment',
      'Great Expectations',
      "You Don't Know JS",
    ]);
  }, 500);
}

let testShelf = new Bookshelf()

//loading books should also print them at the same time. 
loadBooks(testShelf);

// If you tried to run this next line it would not work. the delay on the ajax would still be active and result in an 
// empty shelf being printed. This would only work if you set a time delay for this function as well.
// testShelf.printFavoriteBooks();