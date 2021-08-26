import React, { useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
const Search = ({ query, setQuery }) => {
  const [input, setInput] = useState("");
  const onClick = (e) => {
    e.preventDefault();
    setQuery(input);
    setInput("");
  };
  return (
    // <form>
    //   <input
    //     type="text"
    //     placeholder="Search your book by title, author name or any keyword...."
    //     onChange={(e) => setInput(e.target.value)}
    //     value={input}
    //     className="search-input"
    //   />
    //   <button type="submit" onClick={onClick}>
    //     Search
    //   </button>
    // </form>
    <InputGroup className="mb-3">
      <FormControl
        className="input"
        type="text"
        placeholder="Search by title, author name or any keyword...."
        aria-label="Search by title, author name or any keyword...."
        aria-describedby="basic-addon2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        variant="outline-secondary"
        id="button-addon2"
        type="submit"
        onClick={onClick}
      >
        Search
      </Button>
    </InputGroup>
  );
};
export default Search;
