import { Card, Flex, Heading, Table } from '@radix-ui/themes'
import prisma from '../../prisma/client'
import React from 'react'
import Link from 'next/link'
import TableBadge from './TableBadge'
import { IoIosMore } from "react-icons/io";


const Latest = async () => {

    const issues = await prisma.issue.findMany({
        orderBy:{createAt:'desc'},
        take:5,
    })
 
    
  return (
    <>
    <Card>
        <Heading className='border-b-2 border-black  p-2 flex items-center justify-between'><span>최근글</span> <Link href={'/issues'}><IoIosMore/></Link></Heading>
        <Table.Root >
        <Table.Body >
 {issues.map((v,i)=>
          <Table.Row key={i}>
          <Table.Cell  >
            <Flex direction={'column'} align={'start'} gap={'2'}>
           <Link href={`/issues/${v.id}`}>{v.title}</Link> 
      {/*      <TableBadge status={v.status}/>
 */}           <TableBadge develop={v.develop}/>
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