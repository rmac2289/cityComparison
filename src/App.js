import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import Nav from './Nav'
import SearchBar from './SearchBar'
import Scores from './Scores'
import CityName from './CityName'




class App extends Component {
  constructor(props){
    super(props)
  this.state = {
    city: "",
    nameScore: [],
    cityScore: "",
    cityName: ""
  }
}
  resetList = () => {
    this.setState({
      city: "",
      nameScore: [],
      cityScore: "",
      cityName: ""
    })
  }

  cityChanged = (event) => {
    this.setState({
      city: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.resetList();
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
    this.setState({firstData: data.count})
    console.log(data)
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
        this.setState({cityName: [...this.state.cityName, newerData.full_name]})
        console.log(newerData)
        scores = newerData._links["ua:scores"].href
        return fetch(scores, options)
        .then(response => {
          if (!response.ok){
            throw new Error(wrong);
          }
          return response.json()
        })
        .then(scoreData => {
          console.log(scoreData)
          console.log(scoreData.categories)
          let scores = scoreData.categories;

            this.setState({
              nameScore: [...this.state.nameScore, ...scores],
              cityScore: [...this.state.cityScore, scoreData.teleport_city_score]
          });
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
    const scoreItems = this.state.nameScore
  return (
    <div className="App">
      <Nav />
      <Header />
      <SearchBar 
      cityChanged={this.cityChanged}
      handleSubmit={this.handleSubmit}/>
      <ul className="mainList">
      <CityName cityName={this.state.cityName}/>
      {this.state.firstData === 0 ? <h2>Sorry, no records for that city.</h2> :
        scoreItems.map((value,index) => {
        return <Scores key={index}
          name={value.name}
          score={value.score_out_of_10} 
          />
      })}
      </ul>
      
    </div>
  );
}
}

export default App;