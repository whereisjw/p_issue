import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../prisma/client'

export default async function handler(req:NextApiRequest,res:NextApiResponse ){
    const users = await prisma.user.findMany({
        orderBy:{name:'asc'}
 
    })
console.log(users);

    res.json(users)
}