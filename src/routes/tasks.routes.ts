import { Router } from 'express'
import { Request, Response } from 'express'

import pool from '../database'
import { taskInputSchema } from '../schemas/task.schema'
import { ZodError } from 'zod'

const router = Router()

router.post('/tasks', async (req: Request, res: Response) => {
  try {
    const validatedTask = taskInputSchema.parse(req.body)
    const result = await pool.query(
      'INSERT INTO tasks (title, description, completed) VALUES ($1, $2, $3) RETURNING *',
      [validatedTask.title, validatedTask.description || null, validatedTask.completed]
    )

    res.status(201).json(result.rows[0])
  } catch (err) {
    if (err instanceof ZodError) {
      return res.status(400).json({ message: 'Dados inválidos na requisição.', issues: err.issues })
    }
    console.error('Erro ao criar tarefa:', err)
    res.status(500).json({ message: 'Erro interno do servidor ao criar tarefa.' })
  }
})

// TODO: Adicionar rotas GET, PUT, DELETE aqui futuramente

export default router
