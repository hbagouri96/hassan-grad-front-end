import { type Config } from "drizzle-kit";

export default {
  schema: "./src/server/schema.ts",
  out: "./src/server/drizzle",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./src/server/sqlite.db",
  },
} satisfies Config;
