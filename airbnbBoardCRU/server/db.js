// 데이터베이스 연결하기
import mysql from 'mysql'
export const db = mysql.createConnection({
    host:'airbnb.cafe24app.com',        // 카페24에서 생성한 앱의 도메인명
    user:'oktobatairbnb',               // 사용자 아이디
    password:'tsalt0417!',              // DB 비밀번호
    database:'oktobatairbnb',           // 데이터베이스명(사용자 아이디와 같음)
})
db.connect()