CREATE TABLE IF NOT EXISTS "history" (
	"url" text,
	"price" real,
	"timestamp" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"username" text PRIMARY KEY NOT NULL,
	"password" text NOT NULL
);
