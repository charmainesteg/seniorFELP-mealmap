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

  const renderSearchList = () => {
    if (inputText) {
      return <SearchList input={inputText} />;
    }
    return null;
  };


  return (
    <div className="search-pantry-div">
      <Form className="d-flex search-form">
        <Form.Control
          type="search"
          placeholder="Search..."
          className="me-2"
          aria-label="Search"
          onChange={inputHandler}
        />
        <div className="looking-glass">
        <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </Form>
      <div className="search-list">
        {renderSearchList()}
      </div>
    </div>
  );
}

export default SearchPantry;
