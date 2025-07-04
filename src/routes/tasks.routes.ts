import { Router, Request, Response } from 'express'
import pool from '../database'

const router = Router()

router.post('/tasks', async (req: Request, res: Response) => {
  res.status(200).json({})
  return
})

export default router
