import express from 'express'
import {db} from '../db.js'

const authRouter = express.Router()

authRouter.post('/join', (req, res)=>{
    const username = req.body.username
    const userid = req.body.userid
    const userpw = req.body.userpw
    const gender = req.body.gender
    db.query("INSERT INTO members (username, userid, userpw, gender) VALUES (?, ?, ?, ?)", [username, userid, userpw, gender], (err, result)=>{ 
        if (err) {
            throw err
        } else {
            res.send(result)
        }
    })
})
authRouter.post('/idcheck', (req, res)=>{
    const userid = req.body.userid
    db.query("SELECT * FROM members WHERE userid=?", [userid], (err, result)=>{
        if (err){
            throw err
        } else {
            res.send(result)
        }
    })
})
authRouter.post('/login', (req, res)=>{
    const userid = req.body.userid
    const userpw = req.body.userpw
    db.query("SELECT * FROM members WHERE userid=? and userpw=?", [userid, userpw], (err, result)=>{
        if (err){
            throw err
        } else {
            res.send(result)
        }
    })
})

export default authRouter;