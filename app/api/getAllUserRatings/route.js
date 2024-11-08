import { NextResponse } from "next/server";
import prisma from '@/libs/prismaDB'

export async function GET() {

    const userRatings = await prisma.ratings.findMany({
        include:{
         user:true
        }
    })


    if(!userRatings) {
        return NextResponse.json({message:"no user ratings available"});
    }

    console.log(userRatings);
    return NextResponse.json(userRatings);
}
