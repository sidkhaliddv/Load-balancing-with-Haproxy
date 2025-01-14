import express from 'express'
import { writerRouter } from './writer/router.js'

const app = express()

app.use('/writer', writerRouter)

export {
  app
}
