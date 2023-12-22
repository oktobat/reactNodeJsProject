import express from 'express'      // 웹서버 생성을 위해 express 관련 파일을 가져옴
// import morgan from 'morgan'         // HTTP request logger middleware로 HTTP 요청에 대한 log를 남겨주는 미들웨어
const app = express()                   // express는 함수이므로 반환값을 변수에 저장함 
const PORT = process.env.port || 8001   // 서버 오픈을 위한 포트 지정(카페24는 8001번)
                                        // 포트 번호 : 0~65,535
                                        // 주요 통신을 위한 규약에 이미 정해진 번호 : 0~1023
                                        // 특정 프로토콜이나 어플리케이션에서 사용하는 번호 : 1024~49151
                                        // 어플리케이션에서 혹은 임시 사용번호 : 49152~65535
// import {locals } from './localsMiddleware.js'
// const logger = morgan('dev')  
import path from 'path'            // nodejs에 내장된 라이브러리. 설치없이 바로 사용함
import cors from 'cors'            // 교차출처 허용을 위한 라이브러리
const corsOptions = {
    origin:'http://localhost:8001', credentials:true
}
app.use(cors(corsOptions))      // app.use() : 미들웨어 함수를 애플리케이션에 등록하는 함수
app.use(express.json())         // 사용자의 json 요청을 처리하여 req.body 객체에 저장해줌
// app.use(logger('dev'))          // 'dev' : 개발환경(축약된 로그)
                                // 'combined' : 배포환경(IP까지 로그)


import globalRouter from './routers/globalRouter.js'
import authRouter from './routers/authRouter.js'
import boardRouter from './routers/boardRouter.js'

// 리소스 파일들을 관리하는 경로 지정하기
const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, 'build')))


// 도메인 뒤에 붙은 주소랑 일치하면 실행되는 라우트 함수
app.use('/', globalRouter)
app.use('/auth', authRouter)
app.use('/board', boardRouter)
// app.use('*', globalRouter)


// 지정한 포트에서 서버를 실행함
app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))
