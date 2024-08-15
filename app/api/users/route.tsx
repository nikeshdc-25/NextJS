import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  let body = await request.json();
  // const validation = schema.safeParse(body);
  // if (!validation.success) {
  //   return NextResponse.json(
  //     { error: validation.error.errors },
  //     { status: 400 }
  //   );
  // }
  let user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(
    { message: "User Created", user: user },
    { status: 201 }
  );
}
