import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const body = req.body;
    const query = req.query;
    console.log(body, req.query)
    const prisma = new PrismaClient();
    const issue = await prisma.issue.findUnique({
      where: {
        id: Number(query.id),
      },
    });

    if (!issue) res.status(404).json({ error: "이슈를찾을수없습니다" });

    const updateIssue = await prisma.issue.update({
      where: { id: Number(query.id) },
      data: {
        title: body.title,
        description: body.description,
      },
    });

    return res.json(updateIssue);
  }
}
