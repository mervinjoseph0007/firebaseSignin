import React from 'react'
import { Container } from 'react-bootstrap';
import EmailSignin from './EmailSignin';
import GoogleSignin from './GoogleSignin';
import {useNavigate} from 'react-router-dom';
import {UserAuth} from "../context/AuthContext";
import { useEffect } from 'react';

export default function Signin() {

  
  const { user } = UserAuth()
  const navigate = useNavigate();

  useEffect(() => {
    if(user != null){
        navigate('/home')
        console.log(user?.displayName)
    }
}, [user]);


  return (
    <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
        <h3 className='text-center m-3'>Welcome to Firebase Practise</h3>
        <Container className='d-flex justify-content-center my-3'>
            <EmailSignin />
            <GoogleSignin />
        </Container>
    </div>
  )
}
