'use client'
import LoadingS from '@/app/components/LoadingS'
import { User } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React  from 'react'

const Charger = () => {

  const {data:usersData,isLoading,error} = useQuery({ queryKey: ['users'], queryFn: ()=>axios.get('/api/users').then(res=>res.data),
/* staleTime:60*1000, // 1000 = 1초
retry:3 */
})

if( isLoading) return <LoadingS/>
if (error) return null;
  return (
    <>
   <Select.Root >
  <Select.Trigger placeholder='charger'/>
  <Select.Content>
    <Select.Group>
     
    {usersData?.map((value:User,index:number)=>
    <Select.Item key={index} value={value.id}>{value.name}</Select.Item>
    )}
      
    </Select.Group>
  </Select.Content>
</Select.Root>
    </>
  )
}

export default Charger