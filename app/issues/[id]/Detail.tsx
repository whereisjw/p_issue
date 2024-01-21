import TableBadge from "@/app/components/TableBadge";
import { Issue } from "@prisma/client";
import { Badge, Card, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import Markdown from "react-markdown";

interface IProps {
  title: String;
  status: String;
  createAt: Date;
  description: string;
  charger?:string;
}

const Detail = ({ issue }: { issue: Issue }) => {
  console.log(issue,'김치');
  
  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex my={"2"} className="space-x-2">
        <TableBadge develop={issue.develop}/>
        
        <Text>{issue.createAt.toDateString()}</Text>
      </Flex>
      <Text>작성자 : {issue?.writer}</Text>
      <Card className="prose mt-4">
        <Markdown>{issue.description}</Markdown>
      </Card>
    </>
  );
};

export default Detail;
