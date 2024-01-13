import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//유효성 검사 default 값이 없는 두항목만

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

interface Idata {
  title: String;
  description: String;
}
export default async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === "POST") {
    let { title, description }: any = req.body;
    let result = await prisma.issue.create({
      data: {
        title: title,
        description: description,
      },
    });
    console.log(result);
  } //post
}
