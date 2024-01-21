 
import { Badge, Button, Table } from "@radix-ui/themes";
import React  from "react";
/* import { PrismaClient } from "@prisma/client"; */
import prisma from '../../prisma/client'
import TableBadge from "../components/TableBadge";
import { FaComment } from "react-icons/fa6";
import StatusFilter from "../components/StatusFilter";
import { Develop, Status } from "@prisma/client";
import Link from "next/link";

import WriteButton from "../components/WriteButton";
 

/* interface IProps{
  searchParams : {value: Status}
}
 */

interface IProps{
  searchParams : {value: Develop}
}

const page = async ({searchParams} : IProps) => {
 
 
const values =  Object.values(Develop).includes(searchParams.value) ?   searchParams.value  : undefined 

 
 
 
  const issues = await prisma.issue.findMany(
    {
      where:{
        develop:values
      },
      orderBy:{
        createAt:'desc'
      }
    }
  );
 

  return (
    <div>
      <div className="mb-5 flex justify-between">
<div>        <StatusFilter values={values}/></div>
<WriteButton/>
      </div>
   
      {issues.map((v,i)=>
      <div key={i} className="h-32 py-4 px-2 border-t   border-gray-400 space-y-2">
      <div className="text-xl flex items-center space-x-2"> <TableBadge develop={v.develop} /> <span className="font-semibold"> <Link href={`/issues/${v.id}`}>{v.title}</Link></span></div>
      <div className="whitespace-nowrap text-lg text-ellipsis overflow-hidden">{v.description}</div>
      <div className="text-xs text-gray-400 flex items-center justify-between px-2">
        <div >{v.writer} {v.createAt.toDateString()}</div>
        <div className="space-x-2 flex items-center"><FaComment/> <span>0</span></div>
      </div>
    </div>
      )}
            
    </div>
  );
};

export default page;
