import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDB'



export async function GET(){

    const usersWithNoCerts = await prisma.userInfo.findMany({
        where:{
            certificateUrl: ""
        }
    })
    
    if(usersWithNoCerts.length === 0) {
     return NextResponse.json({messsage:"No Available Data"})
    }

    return NextResponse.json(usersWithNoCerts);
}