let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function() {
    //     // return console.log(`${title} by ${author}, ${pages} pages, ${read}`);
    //     let sentence = `${title} by ${author}, ${pages} pages, ${read}`;
    //     return sentence;
    // }
}

Book.prototype.info = function() {
    let sentence = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    return sentence;
}

let newBook = undefined;
let count = -1;

function addBookToLibrary() {
    newBook = new Book(
        prompt('Title'), 
        prompt('Author'),
        prompt('Pages'),
        prompt('Read'));

    count++;
    
    myLibrary.push(newBook);
    console.table(myLibrary);
    return console.log(myLibrary[count].info());
}

let book1 = new Book(1, 2, 3, 4);
let book2 = new Book('a', 's', 'd', 'f');
let book3 = new Book('z', 'x', 'c', 'v');

myLibrary.push(book1, book2, book3);