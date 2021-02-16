import React from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const Map =(props)=> {
  const { center, markers} = props.data;
  const mapStyle = {width: '300px', height: '300px'};

  const activateImages = ()=> {
    props.activateCarouselData();
  }


    return (
      <LoadScript googleMapsApiKey={process.env.GOOGLE_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyle}
          center={center}
          zoom={10.25}
          >
          {
            markers.map(place => {
              return (
                <Marker key={place.name} position={place.location} onClick={activateImages}/>
              )
            })
          }
          </GoogleMap>
      </LoadScript>
    )
};

export default Map;