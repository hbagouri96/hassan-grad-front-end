import { type NextApiRequest } from "next";
import { NextResponse } from "next/server";

interface LoginRequest extends NextApiRequest {
  json: () => Promise<{
    hello: string;
  }>;
}

export const POST = async (req: LoginRequest) => {
  const body = await req.json();
  console.log(body);

  return NextResponse.json(body);
};
