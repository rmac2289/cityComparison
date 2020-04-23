import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import ApiKey from './ApiKey';
import './Map.css'
import styles from './MapStyles'



export class MapContainer extends Component {

    shouldComponentUpdate() {
        return this.props.east === undefined ? false : true}
    render() {
        const ne = new this.props.google.maps.LatLng({ lat: this.props.north, lng: this.props.east })
        const sw = new this.props.google.maps.LatLng({ lat: this.props.south, lng: this.props.west })
        const bounds = new this.props.google.maps.LatLngBounds(sw, ne);

        return (
            <div id="mapContainer">
                <Map
                    google={this.props.google}
                    centerAroundCurrentLocation={true}
                    zoom={12}
                    style={styles.mapStyles}
                    styles={styles}
                    center={{
                        lat: this.props.lattitude,
                        lng: this.props.longitude
                    }}
                    bounds={bounds}>
                </Map>
            </div>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: ApiKey,
})(MapContainer);