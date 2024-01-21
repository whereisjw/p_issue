import { Avatar, Flex } from '@radix-ui/themes'
import React from 'react'

const HeaderTitle = () => {
  return (
    <div className='  h-[80%] text-white flex flex-col items-center justify-center space-y-4'>
        <div className='font-bold text-3xl'>CODING STORY</div>
        <div>
        <Flex gap="2">
  <Avatar
  radius='full'
    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
    fallback="A"
  />
</Flex>
        </div>
        <div className='flex flex-col items-center text-xl'>
            <span className=' font-semibold'>Jiwon</span>
            <span className='text-xs text-gray-400'>풀스택개발자</span>
        </div>
    </div>
  )
}

export default HeaderTitle