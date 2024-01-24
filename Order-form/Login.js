import React from 'react';

const Login = (props) => {

  return (
    <div>
      <button onClick={props.getAuthorizeUrl}>Login</button>
    </div>
  )
}

export default Login