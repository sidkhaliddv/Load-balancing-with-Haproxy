import { Router } from "express";

const writerRouter = Router()

writerRouter.get('/', (req, res) => {
  res.status(200).json({message: `Wrote message on PORT ${process.env.port}`})
})

export {
  writerRouter
}
