import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


class Maps extends Component{
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 43.646202, lng: -79.385963}}
            >
            <Marker position={{ lat: 43.646202, lng: -79.385963}} />
        </Map>
        );
    }
}

const mapStyles = {
    width: '100%',
    height: '100%',
  };
  
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY
  })(Maps);