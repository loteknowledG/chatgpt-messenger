
import { useState, useEffect } from "react"
import Link from "next/link"
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline"
import { usePathname, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useCollection } from "react-firebase-hooks/firestore"
import { collection, query, orderBy, deleteDoc, doc } from "firebase/firestore"
import { db } from "../../firebase" 

type Props = {
  id: string
}

export default function ChatRow ({id}: Props) {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()
  const [active, setActive] = useState(false)
  
  const [messages] = useCollection(
      collection(db, "users", session?.user?.email!, "chats", id, "messages")
  )

  useEffect(() => {
    if (!pathname) return
    setActive(pathname.includes(id))
  }, [id, pathname])

  const removeChat = async() => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id))
    router.replace("/")
  }
  return (
    <Link href={(`/chat/${id}`)} 
    className={`chatRow justify-center'
      ${active && 'bg-gray-700/50'}`}>
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate">
        {messages?.docs.sort(function(a, b) {
          return a.data().createdAt - b.data().createdAt
        })[messages?.docs.length - 1]?.data().text || "New Chat"} 
      </p>
      <TrashIcon 
        onClick={removeChat}
        className="h-5 w-5 text-gray-700 hover:text-red-700" />
    </Link>
  )
}