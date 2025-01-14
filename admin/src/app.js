import express from 'express'
import { adminRouter } from './admin/router.js'

const app = express()

app.use('/admin', adminRouter)

export {
  app
}
