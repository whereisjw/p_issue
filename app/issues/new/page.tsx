"use client";
import { Button, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import Spinner from "@/app/components/spinner";

interface IuseFrom {
  title: String;
  description: String;
}

const page = () => {
  const router = useRouter();
  const [spinner, Setpinner] = useState(false);
  const { handleSubmit, register, control, setValue } = useForm<IuseFrom>();
  const onValid = (data: IuseFrom) => {
    console.log(data);
    Setpinner(true);
    setValue("title", "");
    setValue("description", "");
    axios
      .post("/api/issues", data)
      .then()
      .catch((err) => console.log(err));
    Setpinner(false);
    /*     router.push("/"); */
  };

  return (
    <form onSubmit={handleSubmit(onValid)} className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input
          {...register("title", { required: true, minLength: 2 })}
          placeholder="Search the docs…"
        />
      </TextField.Root>

      <Controller
        name="description"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />

      <Button disabled={spinner} type="submit" variant="classic" highContrast>
        create new issue {spinner && <Spinner />}
      </Button>
    </form>
  );
};

export default page;
