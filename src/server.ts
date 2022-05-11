import express, { Request, Response } from "express"
import mainRoutes from './routes/routes'
import painelRoutes from './routes/painelRoutes'

const server = express()

server.use('/' ,mainRoutes)
server.use('/painel' ,painelRoutes)

server.use((req: Request, res: Response)=>{
    res.status(404).send("Página não encontrada!!")
})

server.listen(80)