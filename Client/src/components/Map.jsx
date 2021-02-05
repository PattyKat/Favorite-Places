import React from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import locations from '../locations.js';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      containerStyle: {width: '600px', height: '600px'},
      center: {lat: 39.2904, lng: -76.6122},
    }
  }

  componentDidMount(){
    console.log('mounted')
  }

  render(){
    return (
      <LoadScript googleMapsApiKey={process.env.GOOGLE_API_KEY}>
        <GoogleMap
          mapContainerStyle={this.state.containerStyle}
          center={this.state.center}
          zoom={12}
          >
          {
            locations.map(place => {
              return (
                <Marker key={place.name} position={place.location} />
              )
            })
          }
          </GoogleMap>
      </LoadScript>
    )
  }
}

export default Map;