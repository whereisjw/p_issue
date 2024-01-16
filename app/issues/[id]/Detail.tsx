import { Badge, Card, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import Markdown from "react-markdown";

interface IProps {
  title: String;
  status: String;
  createAt: Date;
  description: string;
}

const Detail = ({ issue }: { issue: IProps }) => {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex my={"2"} className="space-x-2">
        <Badge>{issue.status}</Badge>
        <Text>{issue.createAt.toDateString()}</Text>
      </Flex>
      <Card className="prose mt-4">
        <Markdown>{issue.description}</Markdown>
      </Card>
    </>
  );
};

export default Detail;
