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
};

Book.prototype.info = function() {
    let sentence = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    return sentence;
};

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
};

let book1 = new Book(1, 2, 3, 4);
let book2 = new Book('a', 's', 'd', 'f');
let book3 = new Book('z', 'x', 'c', 'v');

myLibrary.push(book1, book2, book3);

let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');

let headers = ['Title', 'Author', 'Pages', 'Read'];

btnGet.addEventListener('click', getTable);

let table = document.createElement('table'); // create a table node

function getTableHeaders() {
    let headerRow = document.createElement('tr'); // create a table row node
    
    headers.forEach(headerText => { // add headers (from array)
        let header = document.createElement('th'); // create table header elements
        let textNode = document.createTextNode(headerText); // create text nodes
        header.appendChild(textNode); // add text into header elements
        headerRow.appendChild(header); // add table headers into header row
    });

    table.appendChild(headerRow); // add headers to the table
};

getTableHeaders();

function getTableRows() {
    myLibrary.forEach(book => { // add cell values
        let row = document.createElement('tr'); // create a table row node
        
        Object.values(book).forEach(text => { // add values to each cell
            let cell = document.createElement('td'); // create table data elements
            let textNode = document.createTextNode(text); // create text nodes
            cell.appendChild(textNode); // add text into table data elements
            row.appendChild(cell); // add cells into the row
        });
        
        table.appendChild(row); // add the new rows to the table
    });
    
    myTable.appendChild(table); // add this new table to the html
};

function deleteTable() {
    while (table.rows.length > 1) {
        table.deleteRow(1);
    };
};

function getTable() {
    deleteTable();
    getTableRows();
};