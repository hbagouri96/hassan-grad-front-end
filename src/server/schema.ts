import { relations } from "drizzle-orm";
import { real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  username: text("username").primaryKey(),
  password: text("password").notNull(),
});

export const userRelations = relations(user, ({ many }) => ({
  history: many(history),
}));

export const history = sqliteTable("history", {
  url: text("url"),
  price: real("price"),
  timestamp: text("timestamp"),
});
