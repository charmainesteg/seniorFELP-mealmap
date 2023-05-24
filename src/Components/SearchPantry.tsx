import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SearchList from "./SearchList";
import "./SearchPantry.css";

function SearchPantry() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="search-pantry-div">
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={inputHandler}
        />
        <Button className="search-button">Search</Button>
      </Form>
      <div className="search-list">
        <SearchList input={inputText} />
      </div>
    </div>
  );
}

export default SearchPantry;
