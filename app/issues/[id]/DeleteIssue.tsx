"use client";
import { AlertDialog, Button, Flex, Link } from "@radix-ui/themes";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
interface IProps {
  issueId: number;
  issueWriter:string|null;
}

const DeleteIssue = ({ issueId,issueWriter }: IProps) => {
  const {data:session} =useSession()
  const router = useRouter();
  const onClickDeleteFn = () => {
    axios.delete(`/api/issues/${issueId}`);
    router.push("/issues");
    router.refresh()
  };
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
      {issueWriter !== session?.user?.name ? <button disabled className="bg-red-500 rounded-md shadow-sm text-white p-1">Delete Button</button> : 
       <button className="bg-red-500 rounded-md shadow-sm text-white p-1">Delete Button</button>}
       
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Delete</AlertDialog.Title>
        <AlertDialog.Description size="2">
          삭제하면 복구 못함
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <button className="bg-gray-500 text-white py-1 px-2 shadow-sm rounded-md text-sm">
              Cancel
            </button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <button
              onClick={() => onClickDeleteFn()}
             className="bg-red-500 text-white py-1 px-2 rounded-md shadow-sm  text-sm">
              삭제할게요
            </button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssue;
