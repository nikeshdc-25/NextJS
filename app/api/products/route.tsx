import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  let body = await request.json();
  let product = await prisma.product.create({
    data: {
      productname: body.productname,
      category: body.category,
      description: body.description,
      brand: body.brand,
    },
  });
  return NextResponse.json(
    { message: "Product Created", product: product },
    { status: 201 }
  );
}

