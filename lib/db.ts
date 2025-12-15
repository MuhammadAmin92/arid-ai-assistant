import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "arid_ai_db",
  password: "0000",
  port: 5432,
});
