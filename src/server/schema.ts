import { relations } from "drizzle-orm";
import { real, pgTable, text } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  username: text("username").primaryKey(),
  password: text("password").notNull(),
});

export const userRelations = relations(user, ({ many }) => ({
  history: many(history),
}));

export const history = pgTable("history", {
  url: text("url"),
  price: real("price"),
  timestamp: text("timestamp"),
});
