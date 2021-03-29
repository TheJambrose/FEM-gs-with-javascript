// TODO: define addFavoriteBook(..) function
// 1. Define an `addFavoriteBook(..)` function that receives a single parameter, called `bookName`.
// 2. If the provided `bookName` string does *NOT* have the word "Great" in it, add it to the `favoriteBooks` array.


function addFavoriteBook(bookName) {
	if (! bookName.includes("Great")) {
		favoriteBooks.push(bookName);
	}
}

// TODO: define printFavoriteBooks() function
// 3. Define a `printFavoriteBooks()` function that receives no parameters.
// 4. `printFavoriteBooks()` should first print a message like "Favorite Books: ..", 
// and include the number of books in the `favoriteBooks` array.

function printFavoriteBooks() {
	let booklist = String(); //generate string variable to house list

	for (let i = 0; i < favoriteBooks.length; i++) {
		
		//The first book added doesn't neeed a comma
		if (i == 0) {  
			booklist = favoriteBooks[i];
		
		
		//If there are only two books no comma is needed either
		} else if (favoriteBooks.length == 2) { 
			booklist = booklist.concat(" and ", favoriteBooks[i]);
		

		//If there are only two books no comma is needed either
		} else {
			booklist = booklist.concat(", ", favoriteBooks[i]);
		}
	}
	console.log(`Favorite Books: ${booklist}. You have ${favoriteBooks.length} favorite books.`);
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");


// TODO: print out favorite books
// 5. Finally, `printFavoriteBooks()` should loop through the `favoriteBooks` array and print out each value.

printFavoriteBooks();