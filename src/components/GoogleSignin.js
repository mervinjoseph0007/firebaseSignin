import React from 'react';
import {GoogleButton} from 'react-google-button'
import { UserAuth } from '../context/AuthContext';



export default function GoogleSignin() {

    const {googleSignIn} = UserAuth();

    const handleGoogleSignIn = async() => {
        try{
            await googleSignIn()
        }
        catch(error){
            console.log(error)
        }
    }

  return (
    <div className="p-5">
        <p>Sign in with Google</p>
        <GoogleButton onClick = {handleGoogleSignIn}/>
    </div>
    
  )
}
