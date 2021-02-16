import React, {useState} from 'react';

const AddRestaurant = (props) => {
  const[restaurant, setRestaurant] =useState('');
  const[review, setReview]= useState('');
  const[food, setFood]= useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(restaurant, food, review);
    setRestaurant('');
    setReview('');
    setFood('');
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