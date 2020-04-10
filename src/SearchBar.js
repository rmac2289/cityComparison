import React, { Component } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import './SearchBar.css';

class SearchBar extends Component {
    render(){
    return(
        <form className="searchbar" onSubmit={this.props.handleSubmit}>
            <InputGroup size="lg" className="label">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg" >enter city</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl required value={this.props.value} onChange={this.props.cityChanged} aria-label="Large" aria-describedby="inputGroup-sizing-lg"/>
            </InputGroup>
            <Button type="submit" variant="outline-light" id="searchbutton">search</Button>
        </form>
    )
}
}

export default SearchBar;