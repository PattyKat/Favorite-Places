import React, {useState} from 'react';
import axios from 'axios';

const Login = (props) => {
  const [userName, setuserName]= useState('');
  const [password, setpassword]= useState('');

  const handleSubmit=(event)=>{
    console.log(event.target.name);
    props.changeView();
    event.preventDefault();
  }

    return (
      <div>
      <h4>Food Journal</h4>
      <form onSubmit={handleSubmit}>
        <label>
          UserName:
          <input type="text" name="userName" value={userName} onChange={(event)=> setuserName(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="text" name="password" value={password} onChange={(event)=> setpassword(event.target.value)}/>
        </label>
        <button type="submit" value="LOGIN" />
      </form>
      <br/>
      <p>Or</p>
      <button>SIGN UP</button>
      </div>
    )
};

export default Login;