import React from 'react'
import Signin from './Signin';
import HomePage from './HomePage';
import EmailRegister from './EmailRegister';
import {Routes, Route} from 'react-router-dom';
import { AuthContextProvider } from '../context/AuthContext';
import GoogleSignin from './GoogleSignin';
import Protected from './Protected';

export default function MainComponent() {
  return (
    <>
        <AuthContextProvider>
            <Routes>
                <Route element={<Signin />} path="/"></Route>
                <Route element = {<GoogleSignin/>} path="/hello"></Route>
                <Route element={<Signin />} path="/Signin"></Route>
                <Route element={<EmailRegister />} path="/EmailRegister"></Route>
                <Route element={ <Protected> <HomePage /> </Protected>} path="/home"> </Route>
            </Routes>
        </AuthContextProvider>
    </>
  )
}
