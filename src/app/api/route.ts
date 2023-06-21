import { NextResponse } from "next/server";
import db from "~/server/db";
import { user } from "~/server/schema";

export const GET = () => {
  const res = db
    .insert(user)
    .values({ username: "hamada", password: "hello" })
    .run().changes;
  return NextResponse.json(res);
};
