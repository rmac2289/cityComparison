import React, { Component } from 'react'
import './POI.css'


class POI extends Component {
    state = { points: [] }

    componentDidMount() {
        let apiKey = `GXu2zkD654xU85AYQL3nTVux09Fwth0K`
        let lat = this.props.lat;
        let long = this.props.long;
        let url = `https://api.tomtom.com/search/2/nearbySearch/.json?lat=${lat}&lon=${long}&limit=50&categorySet=7374,7376,7302,7383,8099,7383&key=${apiKey}`
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({ points: data.results })
                console.log(this.state.points)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    render() {
        const pointsList = this.state.points
        const pointsItems = pointsList.map((value, index) => {
            return <li className="listItem" key={index}>
                <h4><a className="poiLinks" href={value.poi.url ? value.poi.url : `https://www.google.com/search?q=${value.poi.name}%20${value.address.municipality}`} target="_blank" rel="noopener noreferrer">{value.poi.name}</a></h4>
                <p>{value.address.freeformAddress}</p>
            </li>
        })
        return (
            <ul className="poiList salaryList">
                {pointsItems}
            </ul>
        )
    }
}


export default POI;

