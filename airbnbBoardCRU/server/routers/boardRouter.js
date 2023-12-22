import express from 'express'
import {db} from '../db.js'
import dayjs from 'dayjs'
const boardRouter = express.Router()

boardRouter.post('/write', (req, res)=>{
    const title = req.body.title
    const userid = req.body.userid
    const subject = req.body.subject
    const content = req.body.content
    const nowdate = dayjs()
    if (title==='notice') {
        db.query("INSERT INTO notice (userid, subject, content, hit, date) VALUES (?, ?, ?, ?, ?)", [userid, subject, content, 0, nowdate.format('YYYY-MM-DD')], (err, result)=>{
            if (err) {
                throw err
            } else {
                res.send(result)
            }
        })
    } else if (title==='qna'){
        db.query("INSERT INTO qna (userid, subject, content, date) VALUES (?, ?, ?, ?)", [userid, subject, content, nowdate.format('YYYY-MM-DD')], (err, result)=>{
            if (err) {
                throw err
            } else {
                res.send(result)
            }
        })
    }
    
})

boardRouter.get('/list', (req, res)=>{
        const title = req.query.boardname
        if (title==='notice') {
            db.query(`SELECT * FROM notice ORDER BY no DESC`, [], (err, result)=>{
                if (err) {
                    throw err
                } else {
                    res.send(result)
                }
            })
        } else if (title==='qna') {
            db.query(`SELECT * FROM qna ORDER BY no DESC`, [], (err, result)=>{
                if (err) {
                    throw err
                } else {
                    res.send(result)
                }
            })
        }
        
})

boardRouter.post('/modify', (req, res)=>{
    const no = req.body.no
    const subject = req.body.subject
    const content = req.body.content
    const title = req.body.boardname

    if (title==='notice') {
        db.query('UPDATE notice SET subject=?, content=? WHERE no=?', [subject, content, no], (err, result)=>{
            if (err) {
                throw err
            } else {
                res.send(result)
            }
        })
    } else if (title==='qna') {
        db.query('UPDATE qna SET subject=?, content=? WHERE no=?', [subject, content, no], (err, result)=>{
            if (err) {
                throw err
            } else {
                res.send(result)
            }
        })
    }
})

boardRouter.get('/view', (req, res)=>{
    const no = req.query.no
    let hit = parseInt(req.query.hit)
    db.query('UPDATE notice SET hit=? WHERE no=?', [++hit, no], (err, result)=>{
            if (err) {
                throw err
            } else {
                res.send(result)
            }
    })
})

export default boardRouter;