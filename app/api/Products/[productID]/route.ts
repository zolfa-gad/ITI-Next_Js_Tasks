import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { productID: string };
}

const data = [
  {
    id: "6525c179c981162fb8e8b855",
    name: "laboris qui",
    price: 183.2404,
  },
  {
    id: "6525c1791f6a7e98afd0ec94",
    name: "amet incididunt",
    price: 161.4053,
  },
  {
    id: "6525c17979a533ad1ae0089c",
    name: "elit ut",
    price: 444.7338,
  },
  {
    id: "6525c1791d7f0872012c2301",
    name: "nulla dolore",
    price: 372.2652,
  },
  {
    id: "6525c179528911f9092837db",
    name: "ea ex",
    price: 120.4438,
  },
  {
    id: "6525c1795ce0e3f92e451d26",
    name: "dolor dolor",
    price: 116.4859,
  },
  {
    id: "6525c17945f65a2b80733218",
    name: "exercitation mollit",
    price: 452.141,
  },
  {
    id: "6525c1792b7653a03a2e325b",
    name: "sit adipisicing",
    price: 24.5692,
  },
  {
    id: "6525c179b037c519fcf9840f",
    name: "est in",
    price: 184.0928,
  },
  {
    id: "6525c1790f0d352c600fdc9d",
    name: "enim eiusmod",
    price: 32.2025,
  },
  {
    id: "6525c17924d06147238a972f",
    name: "exercitation culpa",
    price: 295.9282,
  },
  {
    id: "6525c17915cc95989c2952e2",
    name: "tempor commodo",
    price: 397.5235,
  },
  {
    id: "6525c179265df88d334c746d",
    name: "proident voluptate",
    price: 80.5912,
  },
  {
    id: "6525c179d0984ea38726ddf6",
    name: "laboris voluptate",
    price: 59.438,
  },
  {
    id: "6525c179f89d21a0a0418264",
    name: "cillum id",
    price: 284.1809,
  },
  {
    id: "6525c1793aabc4143b9f7214",
    name: "officia mollit",
    price: 264.6103,
  },
];

export function GET(request: NextRequest, { params: { productID } }: Props) {
  const found = data.find(({ id }) => id === productID);
  return NextResponse.json(found);
}

export async function PUT(
  request: NextRequest,
  { params: { productID } }: Props
) {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json({ error: "Name Is Requierd" }, { status: 400 });
  }

  return NextResponse.json({
    id: productID,
    name: body.name,
    price: body.price,
  });
}
