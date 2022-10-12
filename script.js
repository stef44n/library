let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
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
    info() {
        let sentence = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
        return sentence;
    }
}
let card = document.querySelector("#container");
let newBook = undefined;
// let count = -1;

function addBookToLibrary() {
    const formPopUp = document.createElement("div");
    formPopUp.setAttribute("class", "form-popup");
    formPopUp.setAttribute("id", "myForm");
    card.append(formPopUp);

    const formContainer = document.createElement("form");
    formContainer.setAttribute("class", "form-container");
    // formContainer.classList.add(`form${thisIndex}`);
    formPopUp.append(formContainer);

    const formHeading = document.createElement("h3");
    formHeading.textContent = "New book";
    formHeading.setAttribute("id", "formHeading");
    formContainer.append(formHeading);

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.innerText = "Title";
    formContainer.append(titleLabel);

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("required", "");
    formContainer.append(titleInput);

    const authorLabel = document.createElement("label");
    authorLabel.setAttribute("for", "author");
    authorLabel.innerText = "Author";
    formContainer.append(authorLabel);

    const authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("name", "author");
    authorInput.setAttribute("required", "");
    formContainer.append(authorInput);

    const pagesLabel = document.createElement("label");
    pagesLabel.setAttribute("for", "pages");
    pagesLabel.innerText = "Pages";
    formContainer.append(pagesLabel);

    const pagesInput = document.createElement("input");
    pagesInput.setAttribute("type", "text");
    pagesInput.setAttribute("name", "pages");
    pagesInput.setAttribute("required", "");
    formContainer.append(pagesInput);

    const readLabel = document.createElement("label");
    readLabel.setAttribute("for", "read");
    readLabel.innerText = "Read status";
    formContainer.append(readLabel);

    const readInput = document.createElement("input");
    readInput.setAttribute("type", "text");
    readInput.setAttribute("name", "read");
    readInput.setAttribute("placeholder", "yes/no");
    readInput.setAttribute("required", "");
    formContainer.append(readInput);

    const submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    formContainer.append(submitButton);

    const onSubmit = (el) => {
        el.preventDefault();
        // console.log("clicked submit");
        formPopUp.remove();

        let NBTitle = titleInput.value;
        let NBAuthor = authorInput.value;
        let NBPages = pagesInput.value;
        let NBRead = readInput.value;

        newBook = new Book(NBTitle, NBAuthor, NBPages, NBRead);

        myLibrary.push(newBook);
        console.table(myLibrary);
        getTable();
    };

    formContainer.addEventListener("submit", onSubmit);

    // newBook = new Book(
    //     prompt("Title"),
    //     prompt("Author"),
    //     prompt("Pages"),
    //     prompt("Read")
    // );

    // count++;

    // return console.log(myLibrary[count].info());
}

let book1 = new Book("Rich Dad Poor Dad", "R.T. Kiyosaki", "352", "YES");
let book2 = new Book(
    "The 7 Habits of Highly Effective People",
    "S.R. Covey",
    "440",
    "NO"
);
let book3 = new Book("Bob Mortimer and away", "B. Mortimer", "323", "NO");

myLibrary.push(book1, book2, book3);

let btnGet = document.querySelector("button.displayBtn");
let myTable = document.querySelector("#table");

let headers = ["Title", "Author", "Pages", "Read", "MODIFY"];

btnGet.addEventListener("click", getTable);

let table = document.createElement("table"); // create a table node

function getTableHeaders() {
    let headerRow = document.createElement("tr"); // create a table row node

    headers.forEach((headerText) => {
        // add headers (from array)
        let header = document.createElement("th"); // create table header elements
        let textNode = document.createTextNode(headerText); // create text nodes
        header.appendChild(textNode); // add text into header elements
        headerRow.appendChild(header); // add table headers into header row
    });

    table.appendChild(headerRow); // add headers to the table
}

getTableHeaders();

function getTableRows() {
    let num = 0; // set initial index value at zero
    myLibrary.forEach((book) => {
        // add cell values
        let row = document.createElement("tr"); // create a table row node

        let deleteBtn = document.createElement("button"); // create a delete button
        deleteBtn.innerHTML = "&#10060;"; // add a label to the button

        let readBtn = document.createElement("button");
        readBtn.innerHTML = "&#128366;";

        Object.values(book).forEach((text) => {
            // add values to each cell
            let cell = document.createElement("td"); // create table data elements
            let textNode = document.createTextNode(text); // create text nodes

            cell.appendChild(textNode); // add text into table data elements
            row.appendChild(cell); // add cells into the row
            row.appendChild(readBtn);
            row.append(deleteBtn); // add the button to the table behind other values
            deleteBtn.setAttribute("value", num); // set a numeric attribute to match with myLibrary array
            readBtn.setAttribute("value", num); // set a numeric attribute to match with myLibrary array
            readBtn.setAttribute("class", "read-btn"); // set a class name
            deleteBtn.setAttribute("class", "del-btn"); // set a class name
            row.setAttribute("value", num); // set a numeric attribute to match with myLibrary array
        });

        num++; // increment the value by one with each loop
        table.appendChild(row); // add the new rows to the table

        function changeReadStatus() {
            // toggle read status (from array index = readBtn.value)
            for (let i = 0; i < myLibrary.length; i++) {
                if (readBtn.value == i) {
                    if (myLibrary[i]["read"] != "YES") {
                        // console.log(myLibrary[i]['read']);
                        // console.log(readBtn.value);
                        myLibrary[i]["read"] = "YES";
                        // console.log(myLibrary[i]['read']);
                        getTable();
                    } else {
                        myLibrary[i]["read"] = "NO";
                        getTable();
                    }
                }
            }
        }

        readBtn.addEventListener("click", changeReadStatus);

        function deleteTableRow() {
            // delete single row (from array index = deleteBtn.value)
            for (let i = 0; i < myLibrary.length; i++) {
                if (deleteBtn.value == i) {
                    // console.log(myLibrary[i]);
                    // console.log(deleteBtn.value);
                    myLibrary.splice(i, 1); // deletes single array object based on position
                    getTable(); // resets entire table with updated array data (including attributes)
                }
            }
            //delete row (array object) splice(x,1)
            //getTable()
        }

        deleteBtn.addEventListener("click", deleteTableRow);
    });

    myTable.appendChild(table); // add this new table to the html
}

getTableRows();

function deleteTable() {
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
}

function getTable() {
    deleteTable();
    getTableRows();
}

let btnNewBook = document.querySelector("button.newBook");
btnNewBook.addEventListener("click", addBookToLibrary);
