import * as schema from "./schema";
import postgres from "postgres";
import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { env } from "~/env.mjs";

const queryClient = postgres(env.DATABASE_URL);
const db: PostgresJsDatabase<typeof schema> = drizzle(queryClient, { schema });

export default db;
