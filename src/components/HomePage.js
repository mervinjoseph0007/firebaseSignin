import React from 'react'
import Navigation from './Navigation'
import { UserAuth } from '../context/AuthContext';
import { useEffect } from 'react';

export default function HomePage() {

    
    const { user } = UserAuth()
    
  return (
    <>
        <Navigation />
        <div className='text-center'>
            <h2>
                Welcome {user?.displayName}
            </h2>
        </div>
    </>
  )
}
