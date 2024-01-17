"use client";
import { AlertDialog, Button, Flex, Link } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
interface IProps {
  issueId: number;
}

const DeleteIssue = ({ issueId }: IProps) => {
  const router = useRouter();
  const onClickDeleteFn = () => {
    axios.delete(`/api/issues/${issueId}`);
    router.push("/issues");
    router.refresh()
  };
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Delete Button</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Delete</AlertDialog.Title>
        <AlertDialog.Description size="2">
          삭제하면 복구 못함
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              onClick={() => onClickDeleteFn()}
              variant="solid"
              color="red">
              Okay Got it!
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssue;
