import { profile } from "console"
import { setServers } from "dns"
import { px } from "framer-motion"
import LINE from "next-auth/providers/line"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"


export default function Component() {
  const { data: session } = useSession()

  // console.log(session?.user?.image)
  if (session) {
    return (
      <>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              
              <Image
                src={`${session.user?.image}`}
                width={20}
                height={20}
                alt="profile image"
                
              />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                {session.user?.name}
                
              </a>
            </li>
            <li>
              <Link href="/mystore/page">My Store </Link>
            </li>
            <li><a onClick={()=> signOut()}>Sing out</a></li>
          </ul>
        </div>
      </>
    )
  }
    return (
      <>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="0d64989794b1a4c9d89bff571d3d5842.jpg" alt="profile image" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <h1 className="justify-between">
                Not signed in
              </h1>
            </li>
            <li>
              <Link href="#" >
                My Store
              </Link>
            </li>
            <li><a onClick={()=> signIn()}>Sign in</a></li>
          </ul>
        </div>
      </>
    )
}