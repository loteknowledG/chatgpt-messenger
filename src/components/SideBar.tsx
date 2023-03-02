/* eslint-disable @next/next/no-img-element */
'use client'
import { useSession, signOut } from "next-auth/react"
import NewChat from "./NewChat"

export default function SideBar() {
  const { data: session } = useSession()
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <NewChat />
        <div>{/* Model Selection */}</div>
        {/* Map through the ChatRows */}
      </div>
      {session && 
        <img onClick={() => signOut()} 
          src={session.user?.image!} 
          alt="profile picture" 
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50" />}
    </div>
  )
}