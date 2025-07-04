import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USER || "user",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "todolist_db",
  password: process.env.DB_PASSWORD || "password",
  port: parseInt(process.env.DB_PORT || "5432", 10),
});

pool.on("connect", () => {
  console.log("Conectado ao banco de dados PostgreSQL!");
});

pool.on("error", (err) => {
  console.error("Erro na conexão com o banco de dados:", err);
});

export default pool;
