import React, { useState, useEffect } from "react";
import Book from "./Book";
import axios from "axios";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const booksList = async () => {
      const result = await axios
        .get(`http://localhost:3000/books`)
        .then((response) => setBooks(response.data));
      // return result
    };
    booksList();
  }, []);

  return (
    <div className="books_container">
      {books.map((element) => {
        return <Book data={element} />;
      })}
    </div>
  );
}
