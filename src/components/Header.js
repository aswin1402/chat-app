import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase';

function Header() {
   
    const [user]=useAuthState(auth);

  return (
    <header className='flex items-center justify-between p-5 shadow-lg sticky top-0 bg-white z-10' >
        
  
       <h1 className='text-3xl fond-bold text-blue-400'>ChatApp</h1>
       <img onClick={() =>auth.signOut()}  src={user?.photoURL} alt='profile' className='h-10 w-10 rounded-full cursor-pointer' />
    
    </header>
  )
}

export default Header

