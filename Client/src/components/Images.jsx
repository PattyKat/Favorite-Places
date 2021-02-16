import React, { useState, useEffect } from 'react';

const Images = (props) =>{
  const[index, setIndex]=useState(props.idx);

  const reviews = props.current['markers'];


  const onClickRightHandler = () => {
    if (index >= reviews.length-1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

    return (

      <div id="images">
        <div>
          <p>{reviews[index]['name']}</p>
          <br/>
          <img src={reviews[index]['image']} />
          <button className="horizontal-scroll-rightClick" onClick={onClickRightHandler} type="button">
        <svg color="#2F3337" width="24" height="24" viewBox="0 0 24 24" stroke="#2F3337" fill="#2F3337">
          <title>Chevron Right</title>
          <path d="M7 2l10 10L7 22" stroke="inherit" fill="none" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
          <br/>
          <p>{reviews[index]['review']}</p>
        </div>

    </div>
    )
};

export default Images;