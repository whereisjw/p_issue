import { Develop, Status } from '@prisma/client';
import { Card, Flex, Text } from '@radix-ui/themes'
import Link from 'next/link';
import React from 'react'

/* interface Iprops{
    open:number;
    inProgress:number;
    closed:number;
} */
interface Iprops{
  frontend:number;
  backend:number;
  etc:number;
}
 

const Summary = ({frontend,backend,etc}:Iprops) => {
/* const statuses : {label:string; value:number; status: Status}[] = [
    {label:'OPEN Issues', value:open, status:'OPEN'},
    {label:'IN_PROGRESS Issues', value:inProgress, status:'IN_PROGRESS'},
    {label:'CLOSED Issues', value:closed, status:'CLOSED'},
] */

const develops : {label:string; value:number; develop: Develop}[] = [
  {label:'FRONTEND', value:frontend, develop:'FRONTEND'},
  {label:'BACKEND', value:backend, develop:'BACKEND'},
  {label:'ETC', value:etc, develop:'ETC'},
]
  return (
    <Flex  gap={'5'}>{develops.map((v,i)=> 
        <Card key={i} className='aspect-square'>
                    <Flex direction={'column'} align={'center'} gap={'5'}>
            <Link className='text-sm font-light' href={`/issues?value=${v.develop}`}>{v.label}</Link>
            <Text size={'5'} className='font-semibold'> {v.value}</Text>
            </Flex>
        </Card>
    )}</Flex>
  )
}

export default Summary