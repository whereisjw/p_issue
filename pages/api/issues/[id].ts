import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  const body = req.body;
  const query = req.query;
  if (req.method === "POST") {
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
        status: body.develop,
      },
    });
    return res.json(updateIssue);
  }
  if (req.method === "DELETE") {
    const issue = await prisma.issue.findUnique({
      where: {
        id: Number(query.id),
      },
    });

    if (!issue)
      return res.status(404).json({ error: "유효하지 않은 처리입니다." });

    await prisma.issue.delete({
      where: {
        id: issue.id,
      },
    });
  }
}
