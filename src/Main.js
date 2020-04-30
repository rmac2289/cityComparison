import React, { useState } from 'react';
import SearchBar from './SearchBar'
import Scores from './Scores'
import CityName from './CityName'
import MapContainer from './Map'
import Salaries from './Salaries'
import TabCategories from './TabCategories'

export default function Main() {
  const [city, setCity] = useState('')
  const [nameScore, setNameScore] = useState([])
  const [cityScore, setCityScore] = useState('')
  const [cityName, setCityName] = useState('')
  const [webPhoto, setWebPhoto] = useState(null)
  const [latLong, setLatLong] = useState({})
  const [salaryData, setSalaryData] = useState([])
  const cityChanged = (event) => {
    setCity(event.target.value)
  }
  function reset() {
    salaryData.length = 0;
    nameScore.length = 0;
  }
  const handleSubmit = (event) => {
    reset();
    event.preventDefault();
    let wrong = "Something went wrong, please try again later"
    fetch(`https://api.teleport.org/api/cities/?search=${city}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(wrong);
        }
        return response.json();
      })
      .then(citySearchData => {
        return fetch(citySearchData._embedded["city:search-results"][0]._links["city:item"].href)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(wrong);
        }
        return response.json();
      })
      .then(cityData => {
        return fetch(cityData._links["city:urban_area"].href)
          .then(response => {
            if (!response.ok) {
              throw new Error(wrong);
            }
            return response.json();
          })
          .then(urbanAreaData => {
            return fetch(urbanAreaData._links["ua:scores"].href)
              .then(response => {
                if (!response.ok) {
                  throw new Error(wrong);
                }
                return response.json()
              })
              .then(scoreData => {
                return fetch(urbanAreaData._links["ua:images"].href)
                  .then(response => {
                    if (!response.ok) {
                      throw new Error(wrong)
                    }
                    return response.json()
                  })
                  .then(imageLink => {
                    return fetch(urbanAreaData._links["ua:salaries"].href)
                      .then(response => {
                        if (!response.ok) {
                          throw new Error(wrong)
                        }
                        return response.json()
                      })
                      .then(salary => {
                        setLatLong({ lat: cityData.location.latlon.latitude, long: cityData.location.latlon.longitude })
                        setWebPhoto(imageLink.photos[0].image.web)
                        setCityScore([...cityScore, scoreData.teleport_city_score])
                        setNameScore([...nameScore, ...scoreData.categories])
                        setCityName([cityName, urbanAreaData.full_name])
                        setSalaryData([...salaryData, ...salary.salaries])
                      })
                  })
              })
          })
      })
      .catch(err => console.log(err.message))
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
      {cityName && <TabCategories
        scoresList={scoresList}
        webPhoto={webPhoto}
        salaryList={salaryList} />}
    </div>
  );
}