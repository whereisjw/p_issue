import { Badge, Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import Markdown from "react-markdown";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import delay from "delay";

const loading = async () => {
  return (
    <div>
      <Box>
        <Heading>
          <Skeleton />
        </Heading>
        <Skeleton />
        <Flex my={"2"} className="space-x-2">
          <Badge>
            <Skeleton />
          </Badge>
          <Text>
            <Skeleton />
          </Text>
        </Flex>
        <Card className="prose mt-4">
          <Skeleton count={5} />
        </Card>
      </Box>
    </div>
  );
};

export default loading;
