import { redis } from "@/lib/redis";
import { nanoid } from "nanoid/async";
import { NextRequest } from "next/server";

export const POST = async (req:NextRequest) => {
    try{
        const body = await req.json();
        const {text,tags} = body;

        const commentId = await nanoid();
        console.log(commentId)
        //add comment to list
        await redis.rpush('comments', commentId);

        return new Response('OK');
    }
    catch(err){
        console.log(err);
    }
}