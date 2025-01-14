import { Router } from "express";

const adminRouter = Router();

adminRouter.get('/', (req, res)=>{
  res.status(200).json({message: `Received message from PORT ${process.env.port}`})
})

export {
  adminRouter
}
