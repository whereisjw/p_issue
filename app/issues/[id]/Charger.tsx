'use client'
import fetcher from '@/app/utils/client/fetcher'
import { User } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

const Charger = () => {


  const {data,error,isLoading,mutate} = useSWR('api/users',fetcher)
useEffect(()=>{
  mutate()
},[])
  return (
    <>
    {!data ? <div>로딩중</div> :<Select.Root defaultValue="apple">
  <Select.Trigger placeholder='charger'/>
  <Select.Content>
    <Select.Group>
      <Select.Label>Fruits</Select.Label>
    {data.map((value:User,index:number)=>
    <Select.Item key={index} value={value.id}>{value.name}</Select.Item>
    )}
      
    </Select.Group>
  </Select.Content>
</Select.Root>}
    </>
  )
}

export default Charger