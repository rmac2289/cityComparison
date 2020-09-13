import React, { useState, useRef } from "react";
import SearchBar from "./SearchBar";
import Scores from "./Scores";
import CityName from "./CityName";
import MapContainer from "./Map";
import Results from "./Results";
import apiService from "./ApiService";

const scrollToRef = (ref) =>
  window.scrollTo({
    left: 0,
    top: ref.current.offsetTop,
    behavior: "smooth",
  });

export default function Main() {
  const [city, setCity] = useState("");
  const [nameScore, setNameScore] = useState([]);
  const [cityScore, setCityScore] = useState("");
  const [cityName, setCityName] = useState("");
  const [webPhoto, setWebPhoto] = useState(null);
  const [latLong, setLatLong] = useState({});
  const [salaryData, setSalaryData] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [stateAbb, setStateAbb] = useState("");
  const resultsRef = useRef(null);

  const cityChanged = (event) => {
    setCity(event.target.value);
  };
  function reset() {
    salaryData.length = 0;
    nameScore.length = 0;
    setWebPhoto(null);
    setError(false);
    setCityScore("");
    setCityName("");
    setErrorMessage("");
  }
  const resultsScroll = () => scrollToRef(resultsRef);

  function invalidInput(data) {
    let trimmed = city.trim().split(" ").join("");
    if (trimmed.search(/^[a-zA-Z]+$/) === -1 || trimmed === "") {
      setError(true);
      setErrorMessage(`city input must only be A-Z and can't be left empty`);
    }
    if (data === 0) {
      setError(true);
      setErrorMessage(`Sorry, that city isn't in our database`);
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    reset();
    invalidInput();
    let urbanAreaUrl;
    apiService
      .searchFetch(city)
      .then((citySearchData) => {
        invalidInput(citySearchData._embedded["city:search-results"].length);
        return apiService.cityDataFetch(
          `${citySearchData._embedded["city:search-results"][0]._links["city:item"].href}`
        );
      })
      .then((cityData) => {
        setLatLong({
          lat: cityData.location.latlon.latitude,
          long: cityData.location.latlon.longitude,
        });
        return apiService.urbanAreaFetch(
          cityData._links["city:urban_area"].href
        );
      })
      .then((urbanAreaData) => {
        const stateFull = urbanAreaData.full_name.split(" ");
        const stateName = stateFull.pop();
        const stateAbbreviation = stateName.slice(0, 2);
        setStateAbb(stateAbbreviation);
        urbanAreaUrl = urbanAreaData;
        setCityName([urbanAreaData.full_name]);
        return apiService.scoreDataFetch(
          urbanAreaData._links["ua:scores"].href
        );
      })
      .then((scoreData) => {
        setCityScore([...cityScore, scoreData.teleport_city_score]);
        setNameScore([...nameScore, ...scoreData.categories]);
        return apiService.imageLinkFetch(urbanAreaUrl._links["ua:images"].href);
      })
      .then((imageLink) => {
        setWebPhoto(imageLink.photos[0].image.web);
        return apiService.salaryDataFetch(
          urbanAreaUrl._links["ua:salaries"].href
        );
      })
      .then((salary) => {
        setSalaryData([...salaryData, ...salary.salaries]);
      })
      .catch((err) => console.log(err.message));
    setTimeout(() => resultsScroll(), 1200);
  };

  const scoresList = nameScore.map((value, index) => {
    return (
      <Scores key={index} name={value.name} score={value.score_out_of_10} />
    );
  });

  return (
    <div className="App">
      <SearchBar
        cityChanged={cityChanged}
        handleSubmit={handleSubmit}
        value={city.trim() !== "" ? city : ""}
      />
      {error === true && <h4 id="errorMessage">{errorMessage}</h4>}
      <div ref={resultsRef}></div>

      <MapContainer latitude={latLong.lat} longitude={latLong.long} />
      {cityName && <CityName cityName={cityName} score={cityScore} />}
      {cityName && (
        <Results
          state={stateAbb}
          city={city}
          lat={latLong.lat}
          long={latLong.long}
          scoresList={scoresList}
          webPhoto={webPhoto}
          salaryList={salaryData}
        />
      )}
    </div>
  );
}
