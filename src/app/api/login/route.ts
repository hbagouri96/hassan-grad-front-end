import { type NextApiRequest } from "next";
import { NextResponse } from "next/server";
import db from "~/server/db";

interface LoginRequest extends NextApiRequest {
  json: () => Promise<{
    _username: string;
    _password: string;
  }>;
}

export const POST = async (req: LoginRequest) => {
  const { _username, _password } = await req.json();
  const res = await db.query.user.findFirst({
    columns: { username: true },
    where: ({ username, password }, { eq, and }) =>
      and(eq(username, _username), eq(password, _password)),
  });
  if (res) return NextResponse.json(res);
  return NextResponse.json("User not found", { status: 404 });
};
