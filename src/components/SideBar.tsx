/* eslint-disable @next/next/no-img-element */
'use client'
import { useSession, signOut } from "next-auth/react"
import { collection, orderBy, query } from "firebase/firestore"
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from "../../firebase"
import ChatRow from "./ChatRow"
import NewChat from "./NewChat"
import ModelSelection from "./ModelSelection"

export default function SideBar() {
  const { data: session } = useSession()
  const [chats, loading, error] = useCollection(
    session && query(
      collection(db, "users", session?.user?.email!, "chats"),
      orderBy('createdAt', 'asc')
    )
  )
  
  return (
    
    <div className="p-2 flex flex-col h-screen">
      <div id="default-sidebar" className="flex-1">
        <NewChat />
        <div className="hidden sm:inline">
          <ModelSelection />
        </div>
        <div className="flex flex-col space-y-2 my-2">

          {loading && ( 
            <div className="animate-pulse text-center text-white">
              <p>Loading chats...</p>
            </div>
          )}
        
          {/* Map through the ChatRows */}
          {chats?.docs.map(chat => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && 
        <img onClick={() => signOut()} 
          src={session.user?.image!} 
          alt="profile picture" 
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50" />}
    </div>
  )
}