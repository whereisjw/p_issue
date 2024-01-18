import Link from "@/app/components/Link";
/* import { PrismaClient } from "@prisma/client"; */
import prisma from '../../../prisma/client'
import { Pencil2Icon } from "@radix-ui/react-icons";
import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Text,
} from "@radix-ui/themes";
import { notFound, useParams } from "next/navigation";
import React from "react";
import Markdown from "react-markdown";
import EditButton from "./EditButton";
import Detail from "./Detail";
import DeleteIssue from "./DeleteIssue";

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
          <EditButton issueId={issue.id} />
          <DeleteIssue issueId={issue.id} />
        </div>
      </Box>
    </Grid>
  );
};

export default page;
