import { type NextApiRequest } from "next";
import { NextResponse } from "next/server";
import db from "~/server/db";
import { user } from "~/server/schema";

interface SignUpRequest extends NextApiRequest {
  json: () => Promise<{
    username: string;
    password: string;
  }>;
}

export const POST = async (req: SignUpRequest) => {
  const { username, password } = await req.json();
  try {
    const res = await db
      .insert(user)
      .values({ username, password })
      .returning();
    return NextResponse.json(res);
  } catch (e) {
    return NextResponse.json("User already exists", { status: 500 });
  }
};
