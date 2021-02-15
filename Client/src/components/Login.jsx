import React, {useState} from 'react';
import axios from 'axios';

const Login = (props) => {
  const [userName, setuserName]= useState('');
  const [password, setpassword]= useState('');

  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(userName, password);
    props.loginHandler();
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
        <br/>
        <input type="submit" value="LOGIN" />
      </form>
      <br/>
      <p>Or</p>
      <button>SIGN UP</button>
      </div>
    )
};

export default Login;