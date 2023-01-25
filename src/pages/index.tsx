import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useSession, signIn, signOut } from "next-auth/react"

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session, status } = useSession()
  const userEmail = session?.user.email;
  console.log('status', status)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        { status === "authenticated" && (
          <>
            <p>Signed in as {userEmail}</p>
            <button onClick={() => signOut()}>Sign out</button>
            <img src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png" />
          </>
        )}
        { status === "loading" && (
          <>
            <p>Hang on there...</p>
          </>
        )}
        { status === 'unauthenticated' && (
          <>
            <p>Not signed in.</p>
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
      </main>
    </>
  )
}
