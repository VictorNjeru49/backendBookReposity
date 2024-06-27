import { PgTable, serial, text, varchar, integer, pgTable } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// TABLES TABLE


// Define the "Books" table
const Bookstable = pgTable("Books", {
  id: serial("id").primaryKey(), // Auto-increment primary key
  title: text("title"), // TEXT column
  author: varchar("author"), // TEXT column
  year: integer("year"), // INTEGER column
  
});

type TSBookstable =typeof Bookstable.$inferSelect;
type TIBookstable = typeof Bookstable.$inferInsert


export {
    Bookstable,
    TSBookstable,
    TIBookstable,
   
}