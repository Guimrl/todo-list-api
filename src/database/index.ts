import { Pool } from 'pg'

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT as string, 10),
})

pool.on('connect', () => {
  console.log('Conectado ao banco de dados PostgreSQL!')
})

pool.on('error', (err) => {
  console.error('Erro na conexão com o banco de dados:', err)
})

export default pool
