import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import Nav from './Nav'
import SearchBar from './SearchBar'
import Scores from './Scores'
import CityName from './CityName'
import MapContainer from './Map'
import Footer from './Footer'
import CityImage from './CityImage'
import { Tabs, Tab } from 'react-bootstrap'
import Salaries from './Salaries'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: "",
      nameScore: [],
      cityScore: "",
      cityName: "",
      webPhoto: null,
      mobilePhoto: null,
      latLong: {},
      salaryData: [],
    }
  }
  resetList = () => {
    this.setState({
      nameScore: [],
      cityScore: "",
      cityName: "",
      detailInfo: [],
      latLong: {},
      salaryData: []
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
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    }
    const options2 = {
      method: 'GET',
      headers: {
        "Authorization": "Bearer XGZAAmiVIDaSrACEzilfkTTQGzrE",
        "Content-Type": "application/json",
        "accept": "application/json"
      }
    }
    let uaAPI;
    let scoresAPI;
    let scores;
    let image;
    let wrong = "Something went wrong, please try again later"
    fetch(`https://api.teleport.org/api/cities/?search=${this.state.city}`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(wrong);
        }
        return response.json();
      })
      .then(data => {
        this.setState({ NoResult: data.count })
        this.state.NoResult === 0 ? alert("sorry, that city isn't in our system") :
          console.log(data)
        let searchResults = "city:search-results"
        uaAPI = data._embedded[searchResults][0]._links["city:item"].href;
        return fetch(uaAPI, options)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(wrong);
        }
        return response.json();
      })
      .then(newData => {
        console.log('new data')
        console.log(newData)
        this.setState({ latLong: { lat: newData.location.latlon.latitude, long: newData.location.latlon.longitude } })
        console.log(this.state.latLong)
        scoresAPI = newData._links["city:urban_area"].href
        return fetch(scoresAPI, options)
          .then(response => {
            if (!response.ok) {
              throw new Error(wrong);
            }
            return response.json();
          })
          .then(newerData => {
            this.setState({
              cityName: [...this.state.cityName, newerData.full_name]
            })
            console.log(newerData)
            image = newerData._links["ua:images"].href
            scores = newerData._links["ua:scores"].href
            return fetch(scores, options)
              .then(response => {
                if (!response.ok) {
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
                return fetch(image, options)
                  .then(response => {
                    if (!response.ok) {
                      throw new Error(wrong)
                    }
                    return response.json()
                  })
                  .then(imageLink => {
                    this.setState({
                      webPhoto: imageLink.photos[0].image.web,
                      mobilePhoto: imageLink.photos[0].image.mobilePhoto
                    });
                    let salaries = newerData._links["ua:salaries"].href
                    return fetch(salaries, options)
                      .then(response => {
                        if (!response.ok) {
                          throw new Error(wrong)
                        }
                        return response.json()
                      })
                      .then(salary => {
                        
                        this.setState({
                          salaryData: [...this.state.salaryData, ...salary.salaries]
                        })
                       /* return fetch(url, options2)
                          .then(response => {
                            if (!response.ok) {
                              throw new Error(wrong)
                            }
                            return response.json()
                          })
                          .then(poiData => {console.log(poiData)
                            
                            
                          })*/
                          .catch(err => {
                            this.setState({
                              error: err.message
                            })
                          })
                      })
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
  render() {

    const lat = this.state.latLong.lat
    const long = this.state.latLong.long
    const scoreItems = this.state.nameScore
    const scoresList = scoreItems.map((value, index) => {
      return <Scores key={index}
        name={value.name}
        score={value.score_out_of_10}
      />
    })
    const salaryItems = this.state.salaryData
    const salaryList = salaryItems.map((value, index) => {
      return <Salaries key={index}
        jobName={value.job.title}
        jobSalary25={value.salary_percentiles.percentile_25}
        jobSalary50={value.salary_percentiles.percentile_50}
        jobSalary75={value.salary_percentiles.percentile_75}
        jobCity={this.state.city}
      />
    })

    return (
      <div className="App">
        <Nav />
        <Header />
        <SearchBar
          cityChanged={this.cityChanged}
          handleSubmit={this.handleSubmit}
          value={this.state.city} />
        <MapContainer
          latitude={lat}
          longitude={long} />
        <CityName
          cityName={this.state.cityName}
          score={this.state.cityScore} />
        {this.state.cityName &&
          <Tabs className="tabs" defaultActiveKey="scores" id="noanim-tab-example">
            <Tab eventKey="scores" title="Scores">
              <CityImage
                image={this.state.webPhoto}
                hidden={this.state.webPhoto}
              />
              <ul className="mainList">
                {scoresList}
              </ul>
            </Tab>
            <Tab eventKey="Salaries" title="Salaries">
              <ul className="salaryList">
                {salaryList}
                <p>** Salary range based on salaries between the 25th and 75th percentiles in respective profession</p>
              </ul>
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <ul>
              </ul>
            </Tab>
            <Tab eventKey="four" title="four">
              <h2>page 4</h2>
            </Tab>
          </Tabs>}

        <Footer />
      </div>
    );
  }
}

export default App;