//Typescript import
import { Router, Request, Response } from 'express'

const router = Router()

//GET , POST , PUT, DELETE
router.get('/', (req: Request, res: Response)=>{
    let user: { name: string; age: number }= {
        name:'Vitor',
        age: 51
    }
    let showWelcome: boolean = false

    if (user.age > 50) {
        showWelcome = true
    }


    res.render('home', {
        user,
        showWelcome,
        products: [
            {title: 'Produto 1', price: 10},
            {title: 'Produto 2', price: 15},
            {title: 'Produto 3', price: 20}
        ]
    })
})
router.get('/contato', (req: Request, res: Response)=>{
    res.send('Formulario de Contato')
})
router.get('/sobre', (req: Request, res: Response)=>{
    res.send('Pagina institucional sobre a empresa')
})


//Typescript export
export default router