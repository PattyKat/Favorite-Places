import React, {useState, useEffect} from 'react';


const Journal = (props) => {
  const[name, setName]= useState('');

  const handleSearch =()=>{
    console.log(name);
  }

  // const clickHandler=()=>{
  //   props.seeMapHandler(true);
  // }

  // const seeAllClick=()=>{
  //   props.seeAllMaps(true);
  // }


  //props will be an array of review objects
  const entries = props.locationReviews;
  //const listItems = entries.map


  return (
    <div>
      <div>
        <input type='text' name='search' value={name} onChange={(event)=> setName(event.target.value)}/>
        <button onClick={handleSearch}>Search</button>
      </div>
      <h4>Journal</h4>
      {/* <ul>{listItems}</ul> */}
    </div>
  )
}
export default Journal;