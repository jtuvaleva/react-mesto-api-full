import React, { useState } from 'react';
import AuthForm from './AuthForm'

function Register({handleRegister}) {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  function handleChange(e) {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]:value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    const {email, password} = data;
    handleRegister({password, email})
  }

  return (
    <AuthForm email={data.email}
              password={data.password}
              handleChange={handleChange}
              handleSubmit={handleSubmit}/>
  )
}
  export default Register;