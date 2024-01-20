import React from "react";
import EditForm from "./EidtForm";
/* import { PrismaClient } from "@prisma/client"; */
import prisma from '../../../../prisma/client'
import { notFound   } from "next/navigation";
 
interface IParams {
  params: { id: string };
}
const page = async ({ params }: IParams) => {

/*   const prisma = new PrismaClient(); */
  const issue = await prisma.issue.findUnique({
    where: { id: Number(params.id) },
  });

  if (!issue) notFound();
  return (
    <>
      <EditForm issue={issue} />{" "}
    </>
  );
};

export default page;
