import { PrismaClient } from "@prisma/client";
import { Badge, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound, useParams } from "next/navigation";
import React from "react";
import Markdown from "react-markdown";

interface Iprops {
  params: { id: string };
}

const page = async ({ params }: Iprops) => {
  const prisma = new PrismaClient();
  const issue = await prisma.issue.findUnique({
    where: { id: Number(params.id) },
  });

  if (!issue) notFound();
  return (
    <div>
      <Heading>{issue.title}</Heading>

      <Flex my={"2"} className="space-x-2">
        <Badge>{issue.status}</Badge>
        <Text>{issue.createAt.toDateString()}</Text>
      </Flex>
      <Card className="prose mt-4">
        {" "}
        <Markdown>{issue.description}</Markdown>
      </Card>
    </div>
  );
};

export default page;
