import React, { useState} from 'react';

const FriendList = (props) => {
  const[name, setName]=useState('');
  const friends = [{name:'Kris', mapId: 1}, {name:'Christina', mapId:2}, {name: 'Kyle', mapId: 3}];

  const onKeyDownHandler = (event) => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      onSubmit();
      setName('');
    }
  }
  const onSubmit = () => {
    console.log(name);
  }

  const listItems = friends.map(({name, mapId}, idx)=> {
     return (

       <div key={idx}>
       <button key={idx} value={mapId} onClick={(event)=>console.log(event.target.value)}>{name}</button>
       </div>
     )
  })

 return (
   <div id="friendList">
     <div className="list">
      {listItems}
     </div>
    <label>
      Add Friend:
      <input type="text" value={name} onChange={(event)=>setName(event.target.value)} onKeyDown={onKeyDownHandler}/>
    </label>
   </div>
 )

};

export default FriendList;