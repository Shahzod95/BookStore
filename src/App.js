import React, { useState, useEffect } from "react";
import Search from "./Components/Search";
import BooksGrid from "./Components/BooksGrid";
import Header from "./Components/Header";
import BookDescription from "./Components/BookDescription";
import Login from "./Components/Login";
import axios from "axios";
import {auth} from "./Config/firebase";
import "./styles.css";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [book, setBook] = useState([]);
  const [query, setQuery] = useState("harry potter");
  const [id, setId] = useState(" ");
  const [user, setUser] = useState(null);
  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&download=epub&key=AIzaSyBq_nJdzbEL0O6CHgJh7O-t09kDaEyJ4V0`
      )
      .then((res) => {
        const books = res.data.items;
        console.log(books);
        setBook(books);
        setId("");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        // <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <Header query={query} setQuery={setQuery}/>
                {/* <Search query={query} setQuery={setQuery} /> */}
                <BooksGrid book={book} setId={setId} />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/desc"
            render={(props) => (
              <React.Fragment>
                <BookDescription id={id} user={user} />
              </React.Fragment>
            )}
          />
        </Switch>
        // </div>
      )}
    </div>
  );
};
export default App;