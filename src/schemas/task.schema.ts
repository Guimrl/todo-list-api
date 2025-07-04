import { z } from 'zod'

export const taskInputSchema = z.object({
  title: z.string().min(1, 'O título da tarefa não pode ser vazio.'),
  description: z.string().optional(),
  completed: z.boolean().optional().default(false),
})

export const taskSchema = taskInputSchema.extend({
  id: z.number().int().positive(),
  created_at: z.string().datetime(),
})

export type Task = z.infer<typeof taskSchema>
export type TaskInput = z.infer<typeof taskInputSchema>
