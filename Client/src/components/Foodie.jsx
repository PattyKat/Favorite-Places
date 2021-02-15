import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Login from './Login.jsx';
import Map from './Map.jsx';
import Journal from './Journal.jsx';
import SeeAllMaps from './SeeAllMaps.jsx';


const Foodie = (props) => {
  const[login, setLogin]= useState(true);
  const[map, setMap]=useState(false);
  const[journal, setJournal]=useState(false);
  const[allMaps, setallMaps]=useState(false);
  const[currentUser, setCurrentUser]=useState('');
  const[reviews, setReviews]=useState(['empty']);

  const loginHandler = () => {
    if(login){
      setLogin(false);
      setJournal(true);
    } else {
      setLogin(true)
    }
  }

  const seeMapHandler = (input) =>{
    console.log('hello')
    setMap(input);
    setJournal(false);
  };
  const seeAllMapsHandler =(input)=> {
    console.log('hey')
    setallMaps(input);
    setJournal(false);
  }


  useEffect(() => {
    // console.log('mounted')
    //api call?
  })

    return (
      <div>
        <div id="header">
          <button onClick={()=>seeMapHandler(true)}>See My Map</button>
          <button onClick={()=>seeAllMapsHandler(true)}>See All Maps</button>
        </div>
        {login &&
          <Login loginHandler={loginHandler}/>
        }
        {journal &&
          <Journal locationReviews={reviews} seeMapHandler={seeMapHandler} seeAllMaps={seeAllMapsHandler}/>
        }
        {map &&
          <Map />
        }
        {allMaps &&
         <SeeAllMaps />
        }
      </div>
    )

};

export default Foodie;