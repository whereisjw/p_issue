"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const page = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Search the docs…" />
      </TextField.Root>
      <TextArea />
      <Button variant="classic" highContrast>
        create new issue
      </Button>
    </div>
  );
};

export default page;
