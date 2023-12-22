import express from 'express'
import path from 'path' 
const __dirname = path.resolve()
const globalRouter = express.Router()

globalRouter.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, './build/index.html'))
})
// globalRouter.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, './build/index.html'))
// })

export default globalRouter;