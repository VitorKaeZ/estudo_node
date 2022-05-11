import { Router, Request, Response } from 'express'

const router = Router()

//GET , POST , PUT, DELETE
router.get('/', (req: Request, res: Response)=>{
    res.send('Olá Mundo!!')
})
router.get('/contato', (req: Request, res: Response)=>{
    res.send('Formulario de Contato')
})
router.get('/sobre', (req: Request, res: Response)=>{
    res.send('Pagina institucional sobre a empresa')
})

export default router