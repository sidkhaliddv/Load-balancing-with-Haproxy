import { app } from "./app.js"

const PORT = process.env.port || '8080'

app.listen(PORT, ()=>{
  console.log(`Server listening on ${PORT}`)
})
