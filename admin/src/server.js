import { app } from "./app.js";

const PORT = process.env.port || '9000'

app.listen(PORT, ()=>{
  console.log(`Server is listening on ${PORT}`)
})
