import request from 'supertest'
import express from 'express'

const app = express()
app.get('/test', (req, res) => {
  res.status(200).send('Test route works!')
})

describe('GET /test', () => {
  it('should return "Test route works!"', async () => {
    const res = await request(app).get('/test')
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual('Test route works!')
  })
})
