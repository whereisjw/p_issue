'use client'
import { Button } from '@radix-ui/themes'
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'
import { SlNote } from "react-icons/sl";
const WriteButton = () => {
    const {data:session}= useSession()
  return (
    <div>
        {session?.user ?  <Button className="text-white">
      <Link className="flex items-center space-x-2" href="/issues/new"><SlNote/><span>글쓰기</span></Link>
    </Button>:
    <Button disabled className="text-white">
      <SlNote/><span>글쓰기</span> 
    </Button>}
   </div>
  )
}

export default WriteButton