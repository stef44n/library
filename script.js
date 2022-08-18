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
// let count = -1;

function addBookToLibrary() {
    newBook = new Book(
        prompt('Title'), 
        prompt('Author'),
        prompt('Pages'),
        prompt('Read'));

    // count++;
    
    myLibrary.push(newBook);
    console.table(myLibrary);
    getTable();
    // return console.log(myLibrary[count].info());
};

let book1 = new Book(1, 2, 3, 4);
let book2 = new Book('a', 's', 'd', 'f');
let book3 = new Book('z', 'x', 'c', 'v');

myLibrary.push(book1, book2, book3);


let btnGet = document.querySelector('button.displayBtn');
let myTable = document.querySelector('#table');

let headers = ['Title', 'Author', 'Pages', 'Read', 'DELETE'];

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
    let num = 0; // set initial index value at zero
    myLibrary.forEach(book => { // add cell values
        let row = document.createElement('tr'); // create a table row node

        let deleteBtn = document.createElement('button'); // create a delete button
        deleteBtn.innerHTML = 'Delete &#10060;'; // add a label to the button

        Object.values(book).forEach(text => { // add values to each cell
            let cell = document.createElement('td'); // create table data elements
            let textNode = document.createTextNode(text); // create text nodes
            
            cell.appendChild(textNode); // add text into table data elements
            row.appendChild(cell); // add cells into the row
            row.append(deleteBtn); // add the button to the table behind other values
            deleteBtn.setAttribute('value', num); // set a numeric attribute to match with myLibrary array
            // deleteBtn.setAttribute('class', 'del-btn'); // set a class name
            row.setAttribute('value', num); // set a numeric attribute to match with myLibrary array
        });

        num++; // increment the value by one with each loop
        table.appendChild(row); // add the new rows to the table

        function deleteTableRow() { // delete single row (from array index = deleteBtn.value)
            for (let i = 0; i < myLibrary.length; i++){
                if (deleteBtn.value == i){
                    // console.log(myLibrary[i]);
                    // console.log(deleteBtn.value);
                    myLibrary.splice(i, 1); // deletes single array object based on position
                    getTable(); // resets entire table with updated array data (including attributes)
                };
            };
            //delete row (array object) splice(x,1)
            //getTable()
        };
        
        deleteBtn.addEventListener('click', deleteTableRow);
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

let btnNewBook = document.querySelector('button.newBook');
btnNewBook.addEventListener('click', addBookToLibrary);