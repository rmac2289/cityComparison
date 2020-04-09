import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import Nav from './Nav'
import SearchBar from './SearchBar'




class App extends Component {
  constructor(props){
    super(props)
  this.state = {
    city: "",
    nameScore: []
  }
}

  cityChanged = (event) => {
    this.setState({
      city: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  const options =  {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    }
  }
  let rawData;
  let urbanData;
  let scores;
  let wrong = "Something went wrong, please try again later"
  fetch(`https://api.teleport.org/api/cities/?search=${this.state.city}`,options)
  .then(response => {
    if(!response.ok) {
      throw new Error(wrong);
    }
    return response.json();
  })
  .then(data => {
    let searchResults = "city:search-results"
    rawData = data._embedded[searchResults][0]._links["city:item"].href;
    return fetch(rawData,options)
  })
    .then(response => {
      if(!response.ok){
        throw new Error(wrong);
      }
      return response.json();
    })
    .then(newData => {
      urbanData = newData._links["city:urban_area"].href
      return fetch(urbanData,options)
      .then(response => {
        if(!response.ok){
          throw new Error(wrong);
        }
        return response.json();
      })
      .then(newerData => {
        scores = newerData._links["ua:scores"].href
        return fetch(scores, options)
        .then(response => {
          if (!response.ok){
            throw new Error(wrong);
          }
          return response.json()
        })
        .then(scoreData => {
          console.log(scoreData.categories)
          let scores = scoreData.categories;
            this.setState({
              nameScore: [...this.state.nameScore, ...scores]
              
          } );
          
          
        })
      })
    })
    .catch(err => {
    this.setState({
      error: err.message
    })
  })
}

  render(){
  return (
    <div className="App">
      <Nav />
      <Header />
      <SearchBar 
      cityChanged={this.cityChanged}
      handleSubmit={this.handleSubmit}/>
      
    </div>
  );
}
}

export default App;
