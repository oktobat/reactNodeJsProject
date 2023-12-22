import React, {useContext, useEffect} from 'react';
import {useLocation, Link} from 'react-router-dom'
import styled from 'styled-components'
import { AirContext } from '../context/AirContext'
import axios from 'axios'

const BoardViewBlock = styled.div`
    border-top:87px solid lightblue;
    .row { padding:50px 0; 
        h2 { text-align:center; font-size:25px; margin-bottom:20px }
        .viewform .content { border:1px solid #000; padding:10px }
        .viewform p { display:flex; margin:10px 0 }
        .viewform p label { width:100px; height:40px; }
        .viewform p input { flex-grow:1; height:40px; padding:10px; border:1px solid #ddd }
        .viewform p textarea { flex-grow:1; height:300px; padding:10px; border:1px solid #ddd }

        .btn_line { text-align:center; margin:30px 0 }
        .btn_line .btn_bbs {display:inline-block; width:70px; height:35px; font-size:14px;   background:#384d75; color:#fff; border:none; text-align:center; line-height:35px; margin:0 5px }
    }
    
`

const BoardView = () => {
    const location = useLocation();
    // console.log(location)
    const {title, data} = location.state
    console.log(title, data)
    
    const {loging} = useContext(AirContext)
    
    const hitAdd = ()=>{
        if (title==='notice') {
            axios.get(`http://localhost:3000/board/view?no=${data.no}&hit=${data.hit}`)
            .then((res)=>{
                console.log(res)
            }).catch((e)=>{
                console.error(e.message)
            })   
        }
    }

    useEffect(()=>{
        hitAdd()
    }, [])

    return (
        <BoardViewBlock>
			<div className="row">
                <h2>{title==='notice' ? '공지사항' : '질의응답'}</h2>
			    <form className="viewform">
                    <div className="content">
                        <p>
                            <label for="userid">아이디</label><input type="text" name="userid" id="userid" value={data.userid} disabled />
                        </p>
                        <p>
                            <label for="title">제목</label><input type="text" name="title" id="title" value={data.subject} disabled />
                        </p>
                        <p>
                            <label for="content">내용</label><textarea name="content" id="content" value={data.content} disabled></textarea>
                        </p>
                    </div>
                    <div className="btn_line">
                        { loging===data.userid && <Link to='/board/modify' state={{ title:title, data:data }} className="btn_bbs">수정</Link> }
    					<Link to={`/board/list/${title}`} className="btn_bbs">목록</Link>
                    </div>
    			</form>
			</div>
		</BoardViewBlock>
    );
};

export default BoardView;