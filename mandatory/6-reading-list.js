/*
The Reading List
Keep track of which books you've read and which books you want to read!

=====
Exercise 1
=====

Loop through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"

You should write and log of at least 5 books

=====
Exercise 2
=====
Now use an if/else statement to change the output depending on whether you have read it yet or not. 

If you've read it, log a string like 'You've already read "The Hobbit" by J.R.R. Tolkien', 
and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

*/
let books = [
    {
        title: "Spud",
        author: "John van de Ruit",
        read: true,
    },
    {
        title: 'Spud, The madness continue',
        author: 'John van de Ruit',
        read: true,
    },
    {
        title: 'Spud, Learning to fly',
        author: 'John van de Ruit',
        read: true,
    },
    {
        title: 'Spud, Exit, Pursued by a bear',
        author: 'John van de Ruit',
        read: false,
    },
    {
        title: 'Harry Potter',
        author: 'JR Rolling',
        read: false,
    }
];

// console.log(books);

function bookNames () {
    for (let i = 0; i < books.length; i++) {
        console.log(`${books[i].title} by ${books[i].author}`);
    }
};

bookNames();

function mustRead () {
    for (let i = 0; i < books.length; i++) {
        if (books[i].read === true) {
            console.log(`I've alread ${books[i].title} by ${books[i].author}`);
        }
        else if (books[i].read === false) {
            console.log(`I still need to read ${books[i].title} by ${books[i].author}`);
        }
    }
}

mustRead();