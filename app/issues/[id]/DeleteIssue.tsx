import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button, Link } from "@radix-ui/themes";
import React from "react";
interface IProps {
  issueId: number;
}

const DeleteIssue = ({ issueId }: IProps) => {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/issues/${issueId}/edit`}>delete</Link>
    </Button>
  );
};

export default DeleteIssue;
