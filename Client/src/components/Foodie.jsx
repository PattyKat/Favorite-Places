import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Map from './Map.jsx';
import AddRestaurant from './AddRestaurant.jsx';
import FriendList from './FriendList.jsx';
import ModalMap from './ModalMap.jsx';
import dummyData from '../dummyData.js';
import Images from './Images.jsx';
import locations from '../locations.js';

const kris = {
  name:'Kris',
  mapId:3,
  center: {lat: 43.60106, lng: -116.22408},
  markers: [
    {
      name:'Goldy\'s Breakfast Bistro',
      location: {lat: 43.61492, lng: -116.20237},
      review:'If you want the best breakfast in town and the best bang for your buck this is definitely the place to go! Breakfast combos are always a great way to go and they\'re salmon cakes are one of my favorites! ',
      image:'https://foodtravelist.com/wp-content/uploads/2019/08/Basque-Omelette-Goldys-Boise-Idaho.jpg'
    },
    {
      name:'Bardenay Restaurant & Distillery',
      location: {lat: 43.61395, lng: -116.20195 },
      review:'Food was all delicious. Very cool building and atmosphere. ',
      image:'https://secureservercdn.net/198.71.233.197/4de.67b.myftpupload.com/wp-content/uploads/2017/03/Bardenay-Eagle.1.jpg'
    },
    {
      name:'Flying Pie',
      location: {lat: 43.59616 , lng: -116.19303 },
      review:'Without a doubt, if you want a perfect cooked pizza, this is the place.',
      image:'https://i.imgur.com/Wt8vVjr.jpg'
    }
  ],
  avatar: 'https://www.eatright.org/-/media/eatrightimages/health/weightloss/faddiets/keto-diet1125427377.jpg',
};

const anthony = {
  name:'Anthony',
  mapId:4,
  center: {lat: 47.76086, lng: -122.15221},
  markers: [
    {
      name:'Minami Teriyaki',
      location: {lat: 47.75323 , lng: -122.15347 },
      review:'This is my to go place for Teriyaki.',
      image:'https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com/5c1c108d-12bc-4f81-a7d7-7959792e71fc/orig.jpg&quality=90&w=1500&h=900&mode=crop&format=jpg&v=4'
    },
    {
      name:'Irene Thai Cusine',
      location: {lat: 47.75528, lng: -122.16251},
      review:'I ordered online and they were very professional and prepared it on time. ',
      image:'https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,h_130,f_auto,g_auto,q_auto,dpr_auto,c_fill/exnnpx3qrlpyxuwxeiaw'
    }
  ],
  avatar: 'https://s3-media0.fl.yelpcdn.com/bphoto/SLewuLgpoCtkcb1_fH3fkw/l.jpg',

};

const Foodie = (props) => {
  const[modal, setModal]=useState(false);
  const[carousel, setCarousel]=useState(false);
  const[current, setCurrent]=useState(0);
  const[info, setInfo]=useState(dummyData);
  const [count, setCount]=useState(0);
  const[myData, setMyData]=useState(locations);
  const[myMap, setMyMap]=useState(false);

  const modalActivate = (idx) => {
    setCurrent(idx);
    setModal(true);
  }
  const onModalClickHandler = ()=>{
    setModal(false);
  }

  const addMap =(name)=>{
    let maps = info;
    if(count === 0){
    maps.push(anthony);
    setInfo(maps);
    setCount(1);
    }else {
    maps.push(kris);
    setInfo(maps);
    }
  }
  const activateCarousel = () => {
    setMyMap(false);
    setCarousel(true);
  }

  const carouselHandler = () =>{
    //setMyMap(false);
    setCarousel(false);
  }
  const activateCarouselData =()=>{
    setMyMap(true);
    setCarousel(true);
  }
  const addPlace = (place)=>{
    let places = myData;
    places['markers'].push(place);
    setMyData(places);
  }


    return (
      <div id="flexContainer">
        <div id="mapContainer">
          <h3>My Map</h3>
          <div id="map">
            <Map data={myData} activateCarouselData={activateCarouselData}/>
          </div>
        </div>
        <div id="addPlaceContainer">
          <h3>Add Restaurant</h3>
          <div id="addPlace">
            <AddRestaurant addPlace={addPlace}/>
          </div>
          <div className="iconContainer">
            <div id='iconInstagram'></div>
            <div id='iconFacebook'></div>
            <div id='iconLinkedIn'></div>
          </div>
        </div>
        <div id="friendContainer">
          <h3>Map Collection</h3>
          <div id="friend">
            <FriendList friends={info} modalActivate={modalActivate} addMap={addMap}/>
          </div>
        </div>
        <div id="modalContainer" style= { modal ? {display: 'block'}: {display: 'none'}}>
          <div id="modal" >
            <button onClick={onModalClickHandler}>X</button>
            <h3>{`${info[current]['name']}'s Map`}</h3>
            <ModalMap current={info[current]} activateCarousel={activateCarousel}/>
          </div>
        </div>
          <div id="modalCarouselContainer" style= { carousel ? {display: 'block'}: {display: 'none'}}>
          <div id="carousel" >
            <button onClick={carouselHandler}>X</button>
            <h3>{!myMap ? `${info[current]['name']}'s Reviews`: 'My Reviews'}</h3>
            <Images current={!myMap ? info[current] : myData} idx={!myMap ? info[current]['markers'].length-1: myData['markers'].length-1}/>
          </div>
        </div>
      </div>
    )
};

export default Foodie;