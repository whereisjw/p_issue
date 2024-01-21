import { Develop, Status } from "@prisma/client";
import { Badge, Flex } from "@radix-ui/themes";
import React from "react";
/* interface Iprops {
  status: Status;
} */
/* 
const statusMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "OPEN", color: "red" },
  IN_PROGRESS: { label: "IN_PROGRESS", color: "violet" },
  CLOSED: { label: "CLOSED", color: "green" },
};
 */
interface Iprops{
  develop:Develop
}

const developMaps: Record<
  Develop,
  { label: string; color: "orange" | "blue" | "ruby" }
> = {
  FRONTEND: { label: "FRONTEND", color: "orange" },
  BACKEND: { label: "BACKEND", color: "blue" },
  ETC: { label: "ETC", color: "ruby" },
};

const TableBadge = ({ develop }: Iprops) => {
  return (
    <>
      <Badge color={developMaps[develop].color}>{developMaps[develop].label}</Badge>
    </>
  );
};

export default TableBadge;
