import express from "express";
import pool from "./database";
import { readFileSync } from "fs";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

async function initializeDatabase() {
  try {
    const initSql = readFileSync(
      path.join(__dirname, "database", "init.sql"),
      "utf8"
    );
    await pool.query(initSql);
    console.log("Tabela de tasks verificada/criada com sucesso!");
  } catch (error) {
    console.error("Erro ao inicializar o banco de dados:", error);
  }
}

async function startServer() {
  await initializeDatabase();

  app.get("/", (req, res) => {
    res.send("Olá da To-Do List API!");
  });

  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    console.log(`Acesse: http://localhost:${port}`);
  });
}

startServer();
