'use client'
import Link from "@/app/components/Link";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import React from "react";

interface IProps {
  issueId: number;
  issueWriter:string | null ;
}

const EditButton = ({ issueId,issueWriter }: IProps) => {
  const {data:session} =useSession()

  return (
    <>   {issueWriter !== session?.user?.name ? 
      <Button disabled color="indigo">
      <Pencil2Icon />
      Edit
    </Button>
    :     <Button color="indigo">
    <Pencil2Icon />
    <Link href={`/issues/${issueId}/edit`}>Edit</Link>
  </Button>}</>
 

  );
};

export default EditButton;
