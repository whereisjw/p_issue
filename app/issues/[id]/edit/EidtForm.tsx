"use client";
import { Button, TextField } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import React, { useState } from "react";
/* import SimpleMDE from "react-simplemde-editor"; */
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import Spinner from "@/app/components/Spinner";
import { Issue } from "@prisma/client";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

interface IProps {
  title: string;
  description: string;
}
interface IuseFrom {
  title: string;
  description: string;
}
const EditForm = ({ issue }: { issue?: Issue }) => {
  const router = useRouter();
  const [toggleSpinner, setToggleSpinner] = useState(false);
  const { handleSubmit, register, control, setValue } = useForm<IuseFrom>();
  const onValid = (data: IuseFrom) => {
    console.log(data);
    setToggleSpinner(true);
    setValue("title", "");
    setValue("description", "");
    axios
      .post(`/api/issues/${issue?.id}`, data)
      .then()
      .catch((err) => console.log(err));
    setToggleSpinner(false);
    alert("작성완료! ^_^");
    router.push("/issues");
  };

  return (
    <form onSubmit={handleSubmit(onValid)} className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input
          {...register("title", { required: true, minLength: 2 })}
          defaultValue={issue?.title}
          placeholder="Edit"
        />
      </TextField.Root>

      <Controller
        name="description"
        defaultValue={issue?.description}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />

      <Button
        disabled={toggleSpinner}
        type="submit"
        variant="classic"
        highContrast>
        update issue {toggleSpinner && <Spinner />}
      </Button>
    </form>
  );
};

export default EditForm;
