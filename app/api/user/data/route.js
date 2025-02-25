import connectDB from "@/config/db";
import User from "@/models/user";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function GET(request) {
    try {
        const {userId} = getAuth(request)
        await connectDB();
        const user = await User.findById(userId);

        if(!user){
            return NextResponse.json({success: false, message: "user not found"})
        }
        return NextResponse.json({success: true, user}, {status: 200})

    } catch (error) {
        console.error("Error fetching user:", error.message);
        return NextResponse.json({success: false, message: error.message})

    }
}