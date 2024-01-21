import { Card, Flex, Heading, Table } from '@radix-ui/themes'
import prisma from '../../prisma/client'
import React from 'react'
import Link from 'next/link'
import TableBadge from './TableBadge'


const Latest = async () => {

    const issues = await prisma.issue.findMany({
        orderBy:{createAt:'desc'},
        take:5,
    })
 
    
  return (
    <>
    <Card>
        <Heading className='border-b border-b-red-500'>최근글</Heading>
        <Table.Root >
        <Table.Body >
 {issues.map((v,i)=>
          <Table.Row key={i}>
          <Table.Cell  >
            <Flex direction={'column'} align={'start'} gap={'2'}>
           <Link href={`/issues/${v.id}`}>{v.title}</Link> 
           <TableBadge status={v.status}/>
           </Flex>
            </Table.Cell>
        </Table.Row>
 )}
        </Table.Body>
      </Table.Root>
      </Card>
    </>
  )
}

export default Latest