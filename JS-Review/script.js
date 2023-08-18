const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: false,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(3);
book;

// destructuring object
const {id, title, publicationDate,genres, reviews,pages} = book;

// destructuring array
const [primary, seccondary] = genres;
console.log(primary, seccondary) ;

// rest operator  helpful for extracting values from arry
const [primary1, seccondary2, ...others] = genres;
console.log(primary, seccondary, others) ;

//spread operator helpful for adding values to array
const newGenres = ['epic fantacy', ...others];
console.log(newGenres);

// spread operator to add or update values to object
const updatedBook = {...book,
  // adding new property
   moviePublicationDate:"2001-12-19",
  //updating the existing property
  pages:1200,};
console.log(updatedBook);

// Template literals
const summary = `${title} is a Book. The Publication date is ${publicationDate}. Having very good rating ${reviews.goodreads.rating}`;
console.log(summary);

// Turnary Operator
const re = pages > 1000 ? `Book is having ${pages} which is Greater tham´n 1000`  : `Book is having ${pages} which is Less than 1000`;
console.log(re);

// arrow function
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate)); 

// short circuting operators
console.log(true && "Hello");
console.log(false && "Hello")
console.log(false && "Hello")
console.log(0 && "Hello")
console.log("" && "Hello")
console.log(undefined && "Hello")
console.log(null && "Hello")

console.log(true || "Hello");
console.log(false || "Hello")
console.log(false || "Hello")
console.log(0 || "Hello")
console.log("" || "Hello")
console.log(undefined || "Hello")
console.log(null || "Hello")

console.log(false ?? "Hello")
console.log(0 ?? "Hello")
console.log("" ?? "Hello")
console.log(undefined ?? "Hello")
console.log(null ?? "Hello")


// optional chaining 

const goodReadCount = book.reviews.goodreads?.reviewsCount;
console.log(goodReadCount);

const libraryReadCount = book.reviews.librarything?.reviewsCount;
console.log(libraryReadCount);

// map 
const books= getBooks();

const essentials = books.map((book)=>({
  
title:book.title,
author: book.author,
  
}));

console.log(essentials);

//filter

const longPages= books.filter(book => book.pages > 500).filter(book=>book.hasMovieAdaptation);
console.log(longPages);

const adventureBook = books.filter(book=>book.genres.includes("adventure")).map(book=>book.title);
console.log(adventureBook);


//reduce
const totalPages = books.reduce((acc, book)=> acc+book.pages, 0);
console.log(totalPages);

//sort 

const arr=[5,1,6,3,8];
const sortedList = arr.sort((a,b)=> a - b);
console.log(sortedList);

// async and wait

//fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>console.log(data));


async function getToDos(){
 const res= await fetch("https://jsonplaceholder.typicode.com/todos");
 const data = await res.json();
 console.log(data);
}

getToDos();