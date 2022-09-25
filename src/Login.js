import React from 'react'
import './Login.css';
import {loginUrl} from './spotify';

function Login() {
  return (
    <div className='login'>
        <h1>Login</h1>
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" />


        {/*login */}
        <a href={loginUrl}>Login with SPOTIFY</a>
    </div>
  )
}

export default Login