import app from './app'
import pool from './database'
import { readFileSync } from 'fs'
import path from 'path'

const port = process.env.PORT || 3000

async function initializeDatabase() {
  try {
    const initSql = readFileSync(path.join(__dirname, 'database', 'init.sql'), 'utf8')
    await pool.query(initSql)
    console.log('Tabela de tasks verificada/criada com sucesso!')
  } catch (error) {
    console.error('Erro ao inicializar o banco de dados:', error)
  }
}

async function startServer() {
  await initializeDatabase()

  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
    console.log(`Acesse: http://localhost:${port}`)
    console.log(`Rotas da API em: http://localhost:${port}/api/tasks`)
  })
}

startServer()
