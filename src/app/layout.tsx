import { SessionProvider } from '@/components/SessionProvider'
import SideBar from '@/components/SideBar'
import { getServerSession } from 'next-auth'
import { authOptions } from "../pages/api/auth/[...nextauth]"
import Login from '@/components/Login'
import './globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login/>
          ): (
            <div className="flex">
              <div className="bg-[#2021231 max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <SideBar />
              </div>
              {/* clientProvider - Notification */}
              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
