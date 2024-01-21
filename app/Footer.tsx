import { Avatar, Card, Flex } from '@radix-ui/themes'
import Box from 'next-auth/providers/box'
import Link from 'next/link'
 
import React from 'react'
 

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full space-y-6  bottom-0 border bg-gray-400 h-[30vh] mt-5 text-gray-500'>
        <div className='flex flex-col items-center'>
            <span>&copy; 2024 ParkJiWon</span>
            <span>email j9399977@gmail.com</span>
        </div>
        <Card className='cursor-pointer' style={{ maxWidth: 240 }}>
 
  <Flex gap="3" align="center">
    <Avatar
      size="3"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAY1BMVEX///8AAAD5+fnk5OSRkZFQUFBxcXHZ2dksLCzExMTu7u7f39/29vZ8fHzo6OjLy8u8vLyzs7NBQUGYmJhKSkpjY2MYGBjT09M5OTmsrKyEhISmpqZcXFwTExOKiopVVVUkJCSS2/+7AAACIElEQVRIiZ2W54KDIAyACVitq+7Rdd77P+UpMiIyes2vpuSDLIKEOISyZJoSRl3rVqmiCyi5RNVn1BTDSeIpiNXXM7bJtfaf5sA46jm1dGOblA6MjX4OYGQ2Lg1hm6RnrvmEA2i+5E5k9SkHcGiH7HMOIEPgLHfL763d+tIwmb1Zc53467opua3leB1+hdadHH3set5C/2jShLEkbR49tLnRH9LZQf5xl1sdLpNS7tJuEAcoj05FcpVsd0HHdPeD6kSIN7XQOXB1MTFiBChW9Ymy5weR4XNVe61aWhgLugb9mjNULT+HswEUd2kWAlFnVijEV4gj5IWC1KkKFGMTXZASbZKEwQS5N6vftzB4U8YzGb8DR1TVf4FA3t/F+CZ6dvuHPJdaGV+JfpeiMBgp4wtqozkM6oEUo03C2UEtFyG34ScE/mjbGmeYX0+PoCu/eafrsUbsFfS+v1f1gfbx3sgBGW6DNEE6tM4EsRnb8WbhLdBHYsPSirLjY81H/p7XdcBlIoa2qzI0kWlWdeaDIpqMX5CB4iieGuzgJKNYStXxcqXHbvYnUE3DBYS3cnId+r02uUUticoyNToP8+5mgqhPUnnk+rJ0T+PbrTC4w9jeu9BeRHrkjI7mCR2t5BEczGWRoOpGCc3d4GJyx1akLvB03iZRGHRMF/3+FHbQ+alMYx8Y+77P88UFLrmLkWi5328k6yUoQxiXyZg9he2j+g9XjBQ+RkOnvAAAAABJRU5ErkJggg=="
      radius="full"
      fallback="T"
    />
    <Link href={'https://github.com/whereisjw'}>
      jiwon's github
    </Link>
  </Flex>
 
</Card>
    </div>
  )
}

export default Footer