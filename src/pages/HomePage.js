import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Message from '../components/Message';
import { useAuthState } from 'react-firebase-hooks/auth';
import { addDoc, collection, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';
import {useCollection} from 'react-firebase-hooks/firestore'
import FlipMove from 'react-flip-move';

function HomePage() {
  const [input,setInput] =useState("");
  const [user] = useAuthState(auth);
  const lastMessageDiv= useRef(null)
  const sendMessage =(e)=>{
    e.preventDefault();
    addDoc(collection(db,'chats'),{
     sender:user?.displayName,
     message:input,
     time:serverTimestamp()
    }).then(()=>{
      setInput("");
      scrollBottom();
    }).catch((err)=> alert(err.message));
  }
 const [messages] =useCollection(query(collection(db,'chats'),orderBy('time','asc')))

 const scrollBottom =() =>{
  lastMessageDiv.current?.scrollIntoView({behavior:"smooth"})
 }
 

  // console.log(input);
  
  return (
    <div>
    <Header/>
    {/* body */}

    <div className='max-w-9xl mx-auto mt-0 ' style={{backgroundColor:"black"}}>
      {/* Message */}
      <div className='p-5 '>
        <FlipMove>
        {messages?.docs?.map((message)=>(
        <Message key={message.id} sender={message.data().sender }message={message.data().message}
        time={message?.data()?.time?.toDate().getTime()} />
      ))}

        </FlipMove>
     
      <div ref={lastMessageDiv} className='mb-10' />
      </div >
     
      {/* input */}
      <form className='fixed bottom-4 w-106 items-center justify-content-center space-x-2 left-150'>
        <input value={input} onChange={e=> setInput(e.target.value)} type='text' placeholder='enter a message' className='flex-1 outline-none bg-gray-200 p-3 rounded-lg'/>
        <button disabled={!input} onClick={sendMessage} className='bg-green-400 text-sm text-white font-bold p-3 rounded-lg hover:scale-95 transition-all duration-200 ease-in-out disable:bg-gray-200 disabled:cursor-not-allowed'>Send</button>
      </form>
    </div>
    </div>
  )
}

export default HomePage
