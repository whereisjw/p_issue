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
import { useSession } from "next-auth/react";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

interface IuseFrom {
  title: String;
  description: string;
  develop:string;
}

const page = () => {
  const router = useRouter();

  const {status,data:session} = useSession()
  
  const [toggleSpinner, setToggleSpinner] = useState(false);
  const { handleSubmit, register, control, setValue } = useForm<IuseFrom>();
  const onValid = (data: IuseFrom) => {
  const {title,description,develop} = data
 
  
     setToggleSpinner(true);
    setValue("title", "");
    setValue("description", "");
    setValue("develop", "");
    axios
      .post("/api/issues", {title,description:description,develop,writer:session?.user?.name})
      .then()
      .catch((err) => console.log(err));
    setToggleSpinner(false);
    alert("작성완료! ^_^");
    router.push("/issues");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit(onValid)} className="max-w-xl space-y-3">
       <select {...register("develop")}>
        <option value="FRONTEND">FRONTEND</option>
        <option value="BACKEND">BACKEND</option>
        <option value="ETC">ETC</option>
      </select>
      <TextField.Root>
        <TextField.Input
          {...register("title", { required: true, minLength: 2 })}
          placeholder="제목을 입력해주세요"
        />
      </TextField.Root>

      <Controller
        name="description"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <SimpleMDE placeholder="내용을 입력해주세요" {...field} />
        )}
      />

      <Button
        disabled={toggleSpinner}
        type="submit"
        variant="classic"
        highContrast>
        create new issue {toggleSpinner && <Spinner />}
      </Button>
    </form>
  );
};

export default page;
