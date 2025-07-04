import request from 'supertest'
import app from '../app'
import pool from '../database'

beforeAll(async () => {
  await pool.query('DELETE FROM tasks')
})

afterAll(async () => {
  await pool.end()
})

describe('POST /api/tasks', () => {
  it('should create a new task', async () => {
    const newTask = {
      title: 'Learn Node.js Testing',
      description: 'Study Jest and Supertest to create robust APIs.',
    }

    const res = await request(app).post('/api/tasks').send(newTask)

    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('id')
    expect(res.body.title).toEqual(newTask.title)
    expect(res.body.description).toEqual(newTask.description)
    expect(res.body.completed).toEqual(false)
  })

  it('should return 400 if title is missing', async () => {
    const newTask = {
      description: 'This task has no title.',
    }

    const res = await request(app).post('/api/tasks').send(newTask)

    expect(res.statusCode).toEqual(400)
    expect(res.body.message).toEqual('O título da tarefa é obrigatório.')
  })
})
