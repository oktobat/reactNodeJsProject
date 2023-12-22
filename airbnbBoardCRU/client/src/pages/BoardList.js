import React, { useEffect, useState, useContext} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Tbody from '../components/Tbody'
import { AirContext } from '../context/AirContext'


const BoardListBlock = styled.div`
    border-top:87px solid lightblue;
    .row { padding:50px 0;
        h2 { text-align:center; font-size:25px; margin-bottom:20px }
        .bbsListTbl { border-top:2px solid #384d75; margin:10px 0 20px}
        .bbsListTbl th { border-bottom:1px solid #ccc; 
            background:#f0f3fa; padding:10px; height:61px; }
        .bbsListTbl td { text-align:center; line-height:1.3; 
            border-bottom:1px solid #ccc; padding:10px;
            height:61px; }
        .bbsListTbl td.tit_notice { text-align:left }
        .bbsListTbl col:nth-child(1) {width:10%;}
        .bbsListTbl col:nth-child(2) {width:auto;}
        .bbsListTbl col:nth-child(3) {width:10%;}
        .bbsListTbl col:nth-child(4) {width:10%;}
        .bbsListTbl col:nth-child(5) {width:20%;} 

        .btn_line { text-align:center; margin:30px 0 }
        .btn_line .btn_bbs {display:inline-block; width:70px; height:35px; font-size:14px;   background:#384d75; color:#fff; border:none; text-align:center; line-height:35px; }
    }
`

const BoardList = () => {
    const title = useParams().boardName
    const titleName = { notice:'공지사항', qna:'질의응답'}
    const [list, setList] = useState([])
    const { loging } = useContext(AirContext)

    const getData = ()=>{
             axios.get(`http://localhost:3000/board/list?boardname=${title}`)
             .then((res)=>{
                console.log(res)
                    const getdata = title==='notice' ? res.data.map((data)=>({ no:data.no, subject:data.subject, userid:data.userid, hit:data.hit, date:data.date, content:data.content })) : title==='qna' && res.data.map((data)=>({ no:data.no, subject:data.subject, userid:data.userid, date:data.date, content:data.content })) 
                    setList(getdata)
             })
             .catch((e)=>{
                console.error(e.message)
            })        
    }

    useEffect(()=>{
        getData()
    }
    ,[title])

    return (
        <BoardListBlock>
            <div className="row">
                <h2>{titleName[title]}</h2>
                <table className="bbsListTbl">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        { title==='notice' && <col />}
                        <col />
                    </colgroup>
                    <thead>
                        <tr>
    						<th scope="col">번호</th>
    						<th scope="col">제목</th>
    						<th scope="col">작성자</th>
    						{ title==='notice' && <th scope="col">조회수</th>}
    						<th scope="col">작성일</th>
    					</tr>
                    </thead>
                    <Tbody list={list} title={title} />
                </table>
                { (title==='notice' && loging==='key') ?
                    (
                        <p className="btn_line">
                            <Link to={`/board/write/notice`} className="btn_bbs">글쓰기</Link>
                        </p>
                    ) : (title==='qna' && loging) &&
                    (
                        <p className="btn_line">
                            <Link to={`/board/write/qna`} className="btn_bbs">글쓰기</Link>
                        </p>
                    )
                }
            </div>
        </BoardListBlock>
    );
};

export default BoardList;