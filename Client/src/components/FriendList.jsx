import React, { useState} from 'react';

const FriendList = (props) => {
  const[name, setName]=useState('');
  // const friends = [{name:'Christina', mapId:2}, {name: 'Kyle', mapId: 3}];
  const friends = props.friends;

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
    //console.log(name);
    props.addMap(name);
  }
  const onClickHandler = (event) => {
    props.modalActivate(event.target.value);
  }

  const listItems = friends.map(({name, mapId, avatar}, idx)=> {
     return (

       <div id="friendElement" key={idx}>
         <img src={avatar} />
       <button key={idx} value={idx} onClick={onClickHandler}>{name}</button>
       </div>
     )
  })

 return (
   <div id="friendList">
     <div className="list">
      {listItems}
     </div>
    <label>
      Add Map:
      <input type="text" value={name} onChange={(event)=>setName(event.target.value)} onKeyDown={onKeyDownHandler}/>
    </label>
   </div>
 )

};

export default FriendList;