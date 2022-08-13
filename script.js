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
    return console.log(myLibrary[count].info());
}

// addBookToLibrary();