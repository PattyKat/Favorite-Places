import React, {useState} from 'react';

const AddRestaurant = (props) => {
  const[restaurant, setRestaurant] =useState('');
  const[review, setReview]= useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    //console.log(restaurant, review);
    const newPlace = {name: restaurant, location: {
      lat: 39.32119,
      lng: -76.62415
    }, review: review, image:'http://www.blacksaucekitchen.com/wp/wp-content/files_mf/apricotcompote41.jpg'}
    props.addPlace(newPlace);
    setRestaurant('');
    setReview('');
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        Enter Restaurant Name:
        <input type="text" name="restaurant" value={restaurant} onChange={(event)=>setRestaurant(event.target.value)} requiered="true"/>
      </label>
      <br/>
      <label>
        Enter your Review:
        <br/>
        <textarea type="text" name="review" value={review} onChange={(event)=>setReview(event.target.value)} placeholder="write about your visit here..." requiered="true"></textarea>
      </label>
      <br/>
      <input type="submit" value="Add Map Marker" />
    </form>
  )

};

export default AddRestaurant;