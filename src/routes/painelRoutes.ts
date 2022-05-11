import { Router, Request, Response } from 'express'

const router = Router()

//GET , POST , PUT, DELETE
router.get('/', (req: Request, res: Response)=>{
    res.send('Pàinel!!')
})
router.get('/noticias', (req: Request, res: Response)=>{
    res.send('Noticias cadastradas')
})
router.get('/sobre', (req: Request, res: Response)=>{
    res.send('Pagina institucional sobre a empresa')
})

export default router