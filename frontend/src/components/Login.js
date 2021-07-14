import React, { useState } from 'react';
import AuthForm from './AuthForm';

function Login({ handleLogin}){
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  function handleChange(e) {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]:value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!data.email || !data.password){
      return;
    }
    const {email, password} = data;
    handleLogin({email, password})
  }

  return(
    <AuthForm email={data.email}
              password={data.password}
              handleChange={handleChange}
              handleSubmit={handleSubmit}/>
  )
}

export default Login;