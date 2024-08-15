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
  let ProductId = parseInt(id);

  let product = await prisma.product.findUnique({
    where: {
      id: ProductId,
    },
  });

  if (!product) {
    return NextResponse.json({ error: "Product not found!" }, { status: 404 });
  }
  return NextResponse.json(product);
}

export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  let body = await request.json();
  let ProductId = parseInt(id);
  let product = await prisma.product.findUnique({ where: { id: ProductId } });
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const updatedProduct = await prisma.product.update({
    where: { id: ProductId },
    data: {
      productname: body.productname,
      category: body.category,
      description: body.description,
      brand: body.brand,
    },
  });

  return NextResponse.json({ message: "Product updated", product: updatedProduct });
}

