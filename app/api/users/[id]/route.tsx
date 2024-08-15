import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: string;
  };
}

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  let userId = parseInt(id);

  let user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found!" }, { status: 404 });
  }
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  let body = await request.json();
  let userId = parseInt(id);
  let user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      name: body.name,
      email: body.email,
      followers: body.followers,
      isActive: body.isActive,
    },
  });

  return NextResponse.json({ message: "User updated", user: updatedUser });
}
