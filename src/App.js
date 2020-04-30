import React, { useState } from 'react';
import Header from './Header';
import './App.css';
import Nav from './Nav'
import SearchBar from './SearchBar'
import Scores from './Scores'
import CityName from './CityName'
import MapContainer from './Map'
import Footer from './Footer'
import Salaries from './Salaries'
import MyTabs from './Tabs'

function App() {
    const [city, setCity] = useState('')
    const [nameScore, setNameScore] = useState([])
    const [cityScore, setCityScore] = useState('')
    const [cityName, setCityName] = useState('')
    const [webPhoto, setWebPhoto] = useState(null)
    const [latLong, setLatLong] = useState({})
    const [salaryData, setSalaryData] = useState([])
    const [error, setError] = useState({})
   
  const cityChanged = (event) => {
      setCity(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }}
    let wrong = "Something went wrong, please try again later"
    fetch(`https://api.teleport.org/api/cities/?search=${city}`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(wrong);
        }
        return response.json();
      })
      .then(data => {
        const uaAPI = data._embedded["city:search-results"][0]._links["city:item"].href;
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
        setLatLong({ lat: newData.location.latlon.latitude, long: newData.location.latlon.longitude })
        console.log(latLong)
        const scoresAPI = newData._links["city:urban_area"].href
        return fetch(scoresAPI, options)
          .then(response => {
            if (!response.ok) {
              throw new Error(wrong);
            }
            return response.json();
          })
          .then(newerData => {
            setCityName([...cityName, newerData.full_name])
            console.log(newerData)
            const image = newerData._links["ua:images"].href
            const scores = newerData._links["ua:scores"].href
            return fetch(scores, options)
              .then(response => {
                if (!response.ok) {
                  throw new Error(wrong);
                }
                return response.json()
              })
              .then(scoreData => {
                console.log(scoreData)
                let scores = scoreData.categories;
                setNameScore([...nameScore, ...scores])
                setCityScore([...cityScore, scoreData.teleport_city_score])
                return fetch(image, options)
                  .then(response => {
                    if (!response.ok) {
                      throw new Error(wrong)
                    }
                    return response.json()
                  })
                  .then(imageLink => {
                  setWebPhoto(imageLink.photos[0].image.web)
                    let salaries = newerData._links["ua:salaries"].href
                    return fetch(salaries, options)
                      .then(response => {
                        if (!response.ok) {
                          throw new Error(wrong)
                        }
                        return response.json()
                      })
                      .then(salary => {
                       setSalaryData([...salaryData, ...salary.salaries])
                          .catch(err => {
                            setError(err.message)
                          })
                      })
                  })
              })
          })
      })
      .catch(err => {
        setError(err.message)
      })
  }
    const scoresList = nameScore.map((value, index) => {
      return <Scores key={index}
        name={value.name}
        score={value.score_out_of_10}
      />
    })
    const salaryList = salaryData.map((value, index) => {
      return <Salaries key={index}
        jobName={value.job.title}
        jobSalary25={value.salary_percentiles.percentile_25}
        jobSalary50={value.salary_percentiles.percentile_50}
        jobSalary75={value.salary_percentiles.percentile_75}
        jobCity={city}
      />
    })
    return (
      <div className="App">
        <Nav />
        <Header />
        <SearchBar
          cityChanged={cityChanged}
          handleSubmit={handleSubmit}
          value={city} />
        <MapContainer
          latitude={latLong.lat}
          longitude={latLong.long} />
        <CityName 
          cityName={cityName}
          score={cityScore} />
        {cityName && <MyTabs 
          scoresList={scoresList}
          webPhoto={webPhoto}
          salaryList={salaryList} />}
        <Footer />
      </div>
    );
  }


export default App;