import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import STORE from './STORE';

function SearchBar(props) {

  function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return (
    <form className="searchbar" onSubmit={props.handleSubmit}>
      <FontAwesomeIcon id="map" icon={faMapMarkedAlt} />
      <InputGroup size="lg" className="label">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">
            enter city
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder={STORE[getRandomIndex(STORE.length)].name}
          required
          value={props.value}
          onChange={props.cityChanged}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-lg"
        />
      </InputGroup>
      <Button type="submit" variant="outline-light" id="searchbutton">
        search
      </Button>
      <h3>{props.error}</h3>
    </form>
  );
}

export default SearchBar;
