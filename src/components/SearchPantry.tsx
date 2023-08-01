import { useState } from "react";
import Form from "react-bootstrap/Form";
import "./SearchPantry.css";
import SearchList from "./SearchList";

function SearchPantry() {
  const [inputText, setInputText] = useState("");

  let inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="search-pantry-div">
      <Form className="search-form">
        <Form.Control
          type="search"
          placeholder="Search..."
          className="me-2"
          aria-label="Search"
          onChange={inputHandler}
        />
        {!inputText && <div className="looking-glass">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>}
      </Form>
      <div className="search-list">
        {inputText && <SearchList input={inputText} />}
      </div>
    </div>
  );
}

export default SearchPantry;
