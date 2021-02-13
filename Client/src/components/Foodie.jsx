import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Login from './Login.jsx';
import Map from './Map.jsx';


const Foodie = (props) => {
  const[login, setLogin]= useState(true);
  const[map, setMap]=useState(false);

  const changeView = () => {
    if(login){
      setLogin(false);
      setMap(true);
    } else {
      setLogin(true);
      setMap(false);
    }
  }



  useEffect(() => {
    console.log('mounted')
  })

    return (
      <div>
        {login &&
          <Login changeView={changeView}/>
        }
        {map &&
          <Map />
        }
      </div>
    )

};

export default Foodie;