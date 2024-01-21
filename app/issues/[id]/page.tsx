
/* import { PrismaClient } from "@prisma/client"; */
import prisma from '../../../prisma/client'
import {
 
  Box,
 
  Grid,
 
} from "@radix-ui/themes";
import { notFound, useParams } from "next/navigation";
import React from "react";
import Markdown from "react-markdown";
import EditButton from "./EditButton";
import Detail from "./Detail";
import DeleteIssue from "./DeleteIssue";
import Charger from "./Charger";

interface Iprops {
  params: { id: string };
}

const page = async ({ params }: Iprops) => {
/*   const prisma = new PrismaClient(); */
  const issue = await prisma.issue.findUnique({
    where: { id: Number(params.id) },
  });

  if (!issue) notFound();
  return (
    <Grid columns={{ initial: "1", md: "4" }} gap={"5"}>
      <Box className="col-span-3 ">
        <Detail issue={issue} />
      </Box>
      <Box>
        <div className="flex flex-col   space-y-4">

          <EditButton issueWriter={issue.writer} issueId={issue.id} />
          <DeleteIssue issueWriter={issue.writer} issueId={issue.id} />
        </div>
      </Box>
    </Grid>
  );
};

export default page;
