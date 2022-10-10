// import React from "react";
// import ReactDOM from "react-dom";
// // CSS
// import "./index.css";

// component first letter always capital
// Always Return JSX
// return single element
// div/section/article or Fragment = <></>
// use camelCase for html attribute
// className instead of class
// close every element <img src="" />
// formatting - use parantheses in return

// function Greeting() {
//   return (
//     <>
//       <div>
//         <h3>Hello People</h3>
//         <ul>
//           <li>
//             <a href="#">Hello world</a>
//           </li>
//           <img src="" alt="" />
//         </ul>
//       </div>
//     </>
//   );
// }

// Nested Components, React Tools
// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// implicit return
// const Person = () => <h2>John Doe</h2>;

// explicit return
// const Message = () => {
//   return <p>This is my message</p>;
// };

// Arrow Functions

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

// ReactDOM.render(<Greeting />, document.getElementById("root"));

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book />
//     </section>
//   );
// }

// const Book = () => {
//   return (
//     <article className="book">
//       <Image></Image>
//       <Title></Title>
//       <Author />
//     </article>
//   );
// };

// const Image = () => (
//   <img
//     src="https://m.media-amazon.com/images/I/61Iz2yy2CKL._AC_SR180,120_QL70_.jpg"
//     alt=""
//   />
// );

// const Title = () => <h1>The Monk who sold the Ferrari</h1>;

// const Author = () => (
//   <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
//     Robin Sharma
//   </h4>
// );

// USING JAVASCRIPT IN JSX
// const title = "The Monk who sold the Ferrari";
// const author = "Robin Sharma";
// const img =
//   "https://m.media-amazon.com/images/I/61Iz2yy2CKL._AC_SR180,120_QL70_.jpg";
// function BookList() {
//   return (
//     <section className="booklist">
//       <Book />
//       <Book />
//     </section>
//   );
// }

// const Book = () => {
//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author.toUpperCase()}</h4>
//       {/* <p>{let x=6}</p> Generates error because it returns nothing */}
//       {/* <p>{6 + 6}</p> */}
//     </article>
//   );
// };

// ReactDOM.render(<BookList />, document.getElementById("root"));

// PROPS IN JSX
// const firstBook = {
//   img: "https://m.media-amazon.com/images/I/61Iz2yy2CKL._AC_SR180,120_QL70_.jpg",
//   title: "The Monk who sold the Ferrari",
//   author: "Robin Sharma",
// };
// const secondBook = {
//   img: "https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY218_.jpg",
//   title: "Ikigai: The Japanese secret to a long and happy life",
//   author: "Héctor García and Francesc Miralles",
// };

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book
//         img={firstBook.img}
//         title={firstBook.title}
//         author={firstBook.author}
//       />
//       <Book
//         img={secondBook.img}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//     </section>
//   );
// }

// const Book = (props) => {
//   // console.log(props);
//   return (
//     // props destructuring
//     // const {img,title,author} = props;
//     // We can also destructure it in the function definition
//     // const Book = ({img,title,author}) => {...}

//     <article className="book">
//       <img src={props.img} alt="" />
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//       {/* <p>{let x=6}</p> Generates error because it returns nothing */}
//       {/* <p>{6 + 6}</p> */}
//       {/* <p>{props.job}</p> */}
//       {/* <p>{props.title}</p> */}
//       {/* <p>{props.number}</p> */}
//     </article>
//   );
// };

// We can also destructure it in the function definition
// const Book = ({ img, title, author }) => {
//   return (
// props destructuring
// const {img,title,author} = props;
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// ReactDOM.render(<BookList />, document.getElementById("root"));

// Props Children
// const firstBook = {
//   img: "https://m.media-amazon.com/images/I/61Iz2yy2CKL._AC_SR180,120_QL70_.jpg",
//   title: "The Monk who sold the Ferrari",
//   author: "Robin Sharma",
// };
// const secondBook = {
//   img: "https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY218_.jpg",
//   title: "Ikigai: The Japanese secret to a long and happy life",
//   author: "Héctor García and Francesc Miralles",
// };

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book
//         img={firstBook.img}
//         title={firstBook.title}
//         author={firstBook.author}
//       >
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
//           blanditiis commodi magnam, accusamus cupiditate vitae quis eligendi
//           architecto ipsam quisquam!
//         </p>
//       </Book>
//       <Book
//         img={secondBook.img}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//     </section>
//   );
// }
// // TO ACCESS PROPS CHILDREN USE THE NAME 'children'
// const Book = (props) => {
//   const { img, title, author } = props;
//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {props.children}
//     </article>
//   );
// };

// ReactDOM.render(<BookList />, document.getElementById("root"));

// Simple List
// const books = [
//   {
//     img: "https://m.media-amazon.com/images/I/61Iz2yy2CKL._AC_SR180,120_QL70_.jpg",
//     title: "The Monk who sold the Ferrari",
//     author: "Robin Sharma",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY218_.jpg",
//     title: "Ikigai: The Japanese secret to a long and happy life",
//     author: "Héctor García and Francesc Miralles",
//   },
// ];

// const names = ["john", "peter", "susan"];
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });
// console.log(newNames);

// function BookList() {
//   return <section className="booklist">{newNames}</section>;
// }

// const Book = (props) => {
//   const { img, title, author } = props;
//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// ReactDOM.render(<BookList />, document.getElementById("root"));

// PROPER LIST
// const books = [
//   {
//     img: "https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY218_.jpg",
//     title: "Ikigai: The Japanese secret to a long and happy life",
//     author: "Héctor García and Francesc Miralles",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY218_.jpg",
//     title: "Atomic Habits",
//     author: "James Clear",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY218_.jpg",
//     title: "The Alchemist",
//     author: "Paul Coelho",
//   },
// ];

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         // const { img, title, author } = book;
//         return <Book book={book}></Book>;
//       })}
//     </section>
//   );
// }

// const Book = (props) => {
//   // console.log(props);
//   const { img, title, author } = props.book;
//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// ReactDOM.render(<BookList />, document.getElementById("root"));

// KEY PROP AND SPREAD OPERATOR
// const books = [
//   {
//     id: 1,
//     img: "https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY218_.jpg",
//     title: "Ikigai",
//     author: "Héctor García and Francesc Miralles",
//   },
//   {
//     id: 2,
//     img: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY218_.jpg",
//     title: "Atomic Habits",
//     author: "James Clear",
//   },
//   {
//     id: 3,
//     img: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY218_.jpg",
//     title: "The Alchemist",
//     author: "Paul Coelho",
//   },
// ];

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return <Book key={book.id} {...book}></Book>;
//       })}
//     </section>
//   );
// }

// const Book = ({ img, title, author }) => {
//   // console.log(props);
//   // const { img, title, author } = props;
//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// ReactDOM.render(<BookList />, document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom";
// // CSS
// import "./index.css";

// // REACT EVENTS
// const books = [
//   {
//     id: 1,
//     img: "https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY218_.jpg",
//     title: "Ikigai",
//     author: "Héctor García and Francesc Miralles",
//   },
//   {
//     id: 2,
//     img: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY218_.jpg",
//     title: "Atomic Habits",
//     author: "James Clear",
//   },
//   {
//     id: 3,
//     img: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY218_.jpg",
//     title: "The Alchemist",
//     author: "Paul Coelho",
//   },
// ];

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return <Book key={book.id} {...book}></Book>;
//       })}
//     </section>
//   );
// }

// const Book = ({ img, title, author }) => {
//   // attribute, eventHandler
//   // onClick, onMouseOver
//   const clickHandler = (e) => {
//     console.log(e);
//     console.log(e.target);
//     alert("Stock's run out");
//   };

//   const complexExample = (author) => {
//     console.log(author);
//   };

//   return (
//     <article
//       className="book"
//       onMouseOver={() => {
//         console.log(title);
//       }}
//     >
//       <img src={img} alt="" />
//       <h1 onClick={() => console.log(title)}>{title}</h1>
//       <h4>{author}</h4>
//       <button type="button" onClick={clickHandler}>
//         Buy Now
//       </button>
//       <button type="button" onClick={() => complexExample(author)}>
//         More Complex Example
//       </button>
//     </article>
//   );
// };

// ReactDOM.createRoot(document.getElementById("root")).render(<BookList />);

// IMPORT AND EXPORT STATEMENTS
import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
// CSS
import "./index.css";
// IMPORT BOOKS DATA
import { books } from "./books";
// IMPORT BOOK COMPONENT
import Book from "./Book"; // {} not needed because it is default export, only one export possible
// RELATIVE PATH IMPORT
import { greeting } from "./testing/testing";

function BookList() {
  console.log(greeting); // Relative path export
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDOMClient.createRoot(document.getElementById("root")).render(<BookList />);
