import React, { useState } from 'react';

const Images = (props) =>{
  const[current, setCurrent]=useState(0);

  const reviews = props.current['markers'];

  const onClickRightHandler = () => {
    if (current >= reviews.length-1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

    return (

      <div id="images">
        <div>
          <p>{reviews[current]['name']}</p>
          <br/>
          <p>{reviews[current]['review']}</p>
        </div>
      <button className="horizontal-scroll-rightClick" onClick={onClickRightHandler} type="button">
        <svg color="#2F3337" width="24" height="24" viewBox="0 0 24 24" stroke="#2F3337" fill="#2F3337">
          <title>Chevron Right</title>
          <path d="M7 2l10 10L7 22" stroke="inherit" fill="none" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
    )
};

export default Images;