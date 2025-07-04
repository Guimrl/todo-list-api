import express from 'express'
import tasksRoutes from './routes/tasks.routes'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Olá mundo!')
})

app.use('/api', tasksRoutes)

export default app
