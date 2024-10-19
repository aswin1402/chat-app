import moment from 'moment'
import React, { forwardRef } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase';

const Message =forwardRef(({sender,message,time},ref)=> {
    const [user]= useAuthState(auth);

  return (
    <div ref={ref} className={` ${sender === user?.displayName? "relative w-fit min-w-[120px] bg-blue-400 p-5 ml-auto mt-8 rounded-lg rounded-tr-none":
    "relative w-fit bg-gray-400 min-w-[120px] p-5 m-5  rounded-lg mt-8"} `}>
      <p className='text-xs font-semibold absolute -top-5 '>
       {sender} 
      </p>
      <p>{message}</p>
      <p className='text-xs font-semibold text-rigt' >{moment(time).format("LT")}</p>

    </div>
  )
    })

export default Message
