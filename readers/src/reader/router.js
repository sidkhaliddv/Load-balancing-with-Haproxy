import { Router } from "express";

const readerRouter = Router()

readerRouter.get('/', (req, res) => {
  res.status(200).json({message: `Received message from PORT ${process.env.port}`})
})

export {
  readerRouter
}