'use client'
import { Develop, Status } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
 
import React from 'react'

/* const statuses:{label:string,value?:Status}[]= [
    {label:'All'},
    {label:'open',value:'OPEN'},
    {label:'IN_PROGRESS',value:'IN_PROGRESS'},
    {label:'CLOSED',value:'CLOSED'},
] */
const statuses:{label:string,value?:Develop}[]= [
  {label:'All'},
  {label:'frontend',value:'FRONTEND'},
  {label:'backend',value:'BACKEND'},
  {label:'etc',value:'ETC'},
]
interface IProps{
  values? : string
}
const StatusFilter = ({values}:IProps) => {
 

  const router = useRouter()
  return (
<Select.Root
 defaultValue={values}  
onValueChange={(value)=>{
const query = value ? `?value=${value}` : ""
router.push(`/issues` + query)
}}>
  <Select.Trigger placeholder='필터임둥'/>
  <Select.Content>
     {statuses.map((v,i)=><Select.Item key={i} value={v.value || "All"}>{v.label}</Select.Item>)}
    <Select.Separator />
 
  </Select.Content>
</Select.Root>
  )
}

export default StatusFilter