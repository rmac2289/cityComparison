import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import ApiKey from './ApiKey';
import './Map.css'
import styles from './MapStyles'



export class MapContainer extends Component {

    shouldComponentUpdate() {
        return this.props.latitude === undefined ? false : true}
    render() {

        return (
            <div id="mapContainer">
                <Map
                    google={this.props.google}
                    centerAroundCurrentLocation={true}
                    zoom={12}
                    style={styles.mapStyles}
                    styles={styles}
                    center={{
                        lat: this.props.latitude,
                        lng: this.props.longitude
                    }}
                    >
                </Map>
            </div>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: ApiKey,
})(MapContainer);