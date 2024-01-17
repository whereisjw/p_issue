import Link from "@/app/components/Link";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import React from "react";

interface IProps {
  issueId: number;
}

const EditButton = ({ issueId }: IProps) => {
  return (
    <Button color="indigo">
      <Pencil2Icon />
      <Link href={`/issues/${issueId}/edit`}>Edit</Link>
    </Button>
  );
};

export default EditButton;
