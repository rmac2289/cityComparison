import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import Nav from './Nav'
import SearchBar from './SearchBar'
import Scores from './Scores'
import CityName from './CityName'
import MapContainer from './Map'
import Footer from './Footer'


class App extends Component {
  constructor(props){
    super(props)
  this.state = {
    city: "",
    nameScore: [],
    cityScore: "",
    cityName: "",
    detailInfo: [],
    latLong: {
      
    }
  }
}
  resetList = () => {
    this.setState({
      nameScore: [],
      cityScore: "",
      cityName: "",
      detailInfo: [],
      latLong: {}
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
  let uaAPI;
  let scoresAPI;
  let scores;
  let details;
  let coordinates;
  let wrong = "Something went wrong, please try again later"
  fetch(`https://api.teleport.org/api/cities/?search=${this.state.city}`,options)
  .then(response => {
    if(!response.ok) {
      throw new Error(wrong);
    }
    return response.json();
  })
  .then(data => {
    this.setState({NoResult: data.count})
    console.log(data)
    let searchResults = "city:search-results"
    uaAPI = data._embedded[searchResults][0]._links["city:item"].href;
    return fetch(uaAPI,options)
  })
    .then(response => {
      if(!response.ok){
        throw new Error(wrong);
      }
      return response.json();
    })
    .then(newData => {
      scoresAPI = newData._links["city:urban_area"].href
      return fetch(scoresAPI,options)
      .then(response => {
        if(!response.ok){
          throw new Error(wrong);
        }
        return response.json();
      })
      .then(newerData => {
        coordinates = newerData.bounding_box.latlon
        this.setState({
          cityName: [...this.state.cityName, newerData.full_name],
          latLong: {west: coordinates.west, north: coordinates.north, south: coordinates.south, east: coordinates.east}})
        console.log(newerData)
        details = newerData._links["ua:details"].href
        scores = newerData._links["ua:scores"].href
        return fetch(scores, options)
        .then(response => {
          if (!response.ok){
            throw new Error(wrong);
          }
          return response.json()
        })
        .then(scoreData => {
          let scores = scoreData.categories;

            this.setState({
              nameScore: [...this.state.nameScore, ...scores],
              cityScore: [...this.state.cityScore, scoreData.teleport_city_score]
          });
          return fetch(details, options)
          .then(response => {
            if (!response.ok){ 
              throw new Error(wrong)
            }
            return response.json()
          })
          .then(detailsData => {
            console.log(detailsData)
            this.setState({
              detailInfo: [...this.state.detailInfo, ...detailsData.categories]
            })
            console.log(this.state.detailInfo)
          })
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
    
   const north = this.state.latLong.north
   const south = this.state.latLong.south
   const east = this.state.latLong.east
   const west = this.state.latLong.west
    const lat = (north+south)/2
    const long = (east+west)/2
    let star = '•'
    const scoreItems = this.state.nameScore
    const scoresList = scoreItems.map((value,index) => {
      return <Scores key={index}
        name={value.name}
        score={value.score_out_of_10}
        bar={star.repeat(Math.floor(value.score_out_of_10))}/>
    })

  return (
    <div className="App">
      <Nav />
      <Header />
      <SearchBar 
        cityChanged={this.cityChanged}
        handleSubmit={this.handleSubmit}
        value={this.state.city}/>
      <MapContainer
        north={north} 
        west={west} 
        south={south} 
        east={east} 
        lattitude={lat} 
        longitude={long} />
      <CityName 
        cityName={this.state.cityName} 
        score={this.state.cityScore}/>
      {this.state.cityName !== '' &&
      <ul className="mainList">
      {this.state.NoResult === 0 ? <h2>Sorry, no records for that city.</h2> : scoresList}
      </ul>}
      <Footer />
    </div>
  );
}
}

export default App;