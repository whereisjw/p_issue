import { Status } from '@prisma/client';
import { Card, Flex, Text } from '@radix-ui/themes'
import Link from 'next/link';
import React from 'react'

interface Iprops{
    open:number;
    inProgress:number;
    closed:number;
}
/*   OPEN
  IN_PROGRESS
  CLOSED */

const Summary = ({open,inProgress,closed}:Iprops) => {
const statuses : {label:string; value:number; status: Status}[] = [
    {label:'OPEN Issues', value:open, status:'OPEN'},
    {label:'IN_PROGRESS Issues', value:inProgress, status:'IN_PROGRESS'},
    {label:'CLOSED Issues', value:closed, status:'CLOSED'},
]
  return (
    <Flex  gap={'5'}>{statuses.map((v,i)=> 
        <Card key={i}>
                    <Flex direction={'column'} align={'center'} gap={'5'}>
            <Link className='text-sm font-light' href={`/issues?value=${v.status}`}>{v.label}</Link>
            <Text size={'5'} className='font-semibold'> {v.value}</Text>
            </Flex>
        </Card>
    )}</Flex>
  )
}

export default Summary