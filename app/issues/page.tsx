 
import { Button, Table } from "@radix-ui/themes";
import React from "react";
/* import { PrismaClient } from "@prisma/client"; */
import prisma from '../../prisma/client'
import TableBadge from "../components/TableBadge";
import Link from "../components/Link";
import StatusFilter from "../components/StatusFilter";
import { Status } from "@prisma/client";
 

interface IProps{
  searchParams : {value: Status}
}

const page = async ({searchParams} : IProps) => {
 

const values =  Object.values(Status).includes(searchParams.value) ?   searchParams.value  : undefined 

 console.log(values);
 
 
 
  const issues = await prisma.issue.findMany(
    {
      where:{
        status:values
      },
      orderBy:{
        createAt:'desc'
      }
    }
  );
 

  return (
    <div>
      <div className="mb-5 flex justify-between">
        <StatusFilter values={values + ""}/>
        <Button>
          <Link href="/issues/new">new</Link>
        </Button>
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              CreateAt
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((v, i) => (
            <Table.Row key={i}>
              <Table.RowHeaderCell>
                <Link href={`/issues/${v.id}`}>{v.title}</Link>
                <div className="block md:hidden">
                  {" "}
                  <TableBadge status={v.status} />
                </div>
              </Table.RowHeaderCell>
              <Table.Cell className="hidden md:table-cell">
                <TableBadge status={v.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {v.createAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default page;
