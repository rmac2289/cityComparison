import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import './SearchBar.css';

function SearchBar (props) {
    return(
        <form className="searchbar" onSubmit={props.handleSubmit} >
            <InputGroup size="lg" className="label">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg" >enter city</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl required value={props.value} onChange={props.cityChanged} aria-label="Large" aria-describedby="inputGroup-sizing-lg"/>
            </InputGroup>
            <Button type="submit" variant="outline-light" id="searchbutton">search</Button>
        </form>
    )
}


export default SearchBar;