import React, { useState } from 'react';
import SearchBar from './SearchBar'
import Scores from './Scores'
import CityName from './CityName'
import MapContainer from './Map'
import Salaries from './Salaries'
import TabCategories from './TabCategories'
import apiService from './ApiService'

export default function Main() {
  const [city, setCity] = useState('')
  const [nameScore, setNameScore] = useState([])
  const [cityScore, setCityScore] = useState('')
  const [cityName, setCityName] = useState('')
  const [webPhoto, setWebPhoto] = useState(null)
  const [latLong, setLatLong] = useState({})
  const [salaryData, setSalaryData] = useState([])
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const cityChanged = (event) => {
    setCity(event.target.value)
  }
  function reset() {
    salaryData.length = 0;
    nameScore.length = 0;
    setWebPhoto(null);
    setError(false);
    setCityScore('');
    setCityName('');
    setErrorMessage('')
  }

  function invalidInput(data){
    let trimmed = city.trim().split(' ').join('')
    if(trimmed.search(/^[a-zA-Z]+$/) === -1 || trimmed === ''){
      setError(true)
      setErrorMessage(`city input must only be A-Z and can't be left empty`)
    } if (data === 0){
      setError(true)
      setErrorMessage(`Sorry, that city isn't in our database`)
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    reset();
    invalidInput();
    let urbanAreaUrl
    apiService.searchFetch(city)
      .then(citySearchData => { invalidInput(citySearchData._embedded["city:search-results"].length)
    return apiService.cityDataFetch(`${citySearchData._embedded["city:search-results"][0]._links["city:item"].href}`)})
      .then(cityData => { setLatLong({ lat: cityData.location.latlon.latitude, long: cityData.location.latlon.longitude })
    return apiService.urbanAreaFetch(cityData._links["city:urban_area"].href)})
      .then(urbanAreaData => {
        urbanAreaUrl = urbanAreaData
        setCityName([cityName, urbanAreaData.full_name])
    return apiService.scoreDataFetch(urbanAreaData._links["ua:scores"].href)})
      .then(scoreData => {
        setCityScore([...cityScore, scoreData.teleport_city_score])
        setNameScore([...nameScore, ...scoreData.categories])
    return apiService.imageLinkFetch(urbanAreaUrl._links["ua:images"].href)})
      .then(imageLink => { setWebPhoto(imageLink.photos[0].image.web)
    return apiService.salaryDataFetch(urbanAreaUrl._links["ua:salaries"].href)})
      .then(salary => { setSalaryData([...salaryData, ...salary.salaries])})
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
        value={city.trim() !== '' ? city: ''}/>
        {error === true &&
        <h4 id="errorMessage">{errorMessage}</h4>}
      <MapContainer
        latitude={latLong.lat}
        longitude={latLong.long} />
      <CityName
        cityName={cityName}
        score={cityScore} />
      {cityName && <TabCategories
        city={city}
        lat={latLong.lat}
        long={latLong.long}
        scoresList={scoresList}
        webPhoto={webPhoto}
        salaryList={salaryList} />}
    </div>
  );
}