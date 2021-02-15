
import React from 'react';
import ReactDOM from 'react-dom';
import Foodie from './components/Foodie.jsx';
import Map from './components/Map.jsx';
import AddRestaurant from './components/AddRestaurant.jsx';
import FriendList from './components/FriendList.jsx';

ReactDOM.render(<Map />, document.getElementById("map"));
//ReactDOM.render(<Foodie />, document.getElementById("app2"));
ReactDOM.render(<AddRestaurant />, document.getElementById("addPlace"));
ReactDOM.render(<FriendList />, document.getElementById("friend"));