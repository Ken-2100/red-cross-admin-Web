import prisma from "@/libs/prismaDB";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  // Apply CORS

  try {
    const body = await req.json();
    const {
      name,
      email,
      password,
      address,
      contact,
      category,
      gender,
      dateStarted,
      profilePictureUrl,
      orNumber,
    } = body;

    // Validate input
    if (
      !name ||
      !email ||
      !password ||
      !address ||
      !contact ||
      !category ||
      !gender ||
      !dateStarted
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400, headers: corsHeaders }
      );
    }

    // Check if the user already exists
    const userExist = await prisma.userInfo.findUnique({
      where: { email },
    });

    if (userExist) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409, headers: corsHeaders } // 409: Conflict
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    const user = await prisma.userInfo.create({
      data: {
        name,
        email,
        password: hashedPassword,
        address,
        contact,
        category,
        gender,
        dateStarted,
        profilePictureUrl,
        orNumber,
        userType: "user",
        v: 2, // Versioning for user schema
      },
    });

    // Return the created user
    return NextResponse.json(user, { headers: corsHeaders });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "An error occurred while creating the user" },
      { status: 500, headers: corsHeaders }
    );
  }
}
