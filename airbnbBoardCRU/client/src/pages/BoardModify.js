import React, {useState} from 'react';
import axios from 'axios'
import {useLocation, Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const BoardModifyBlock = styled.div`
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

const BoardModify = () => {
    const location = useLocation();
    // console.log(location)
    const {title, data} = location.state
    console.log(title, data)

    const navigate = useNavigate()
    const [subject, setSubject] = useState(data.subject)
    const [content, setContent] = useState(data.content)

    const register = (e)=>{
        e.preventDefault()
        if (!subject){
            alert('제목을 입력하세요.')
            return false
        }
        if (!content) {
            alert('내용을 입력하세요.')
            return false
        }
        axios.post('http://localhost:3000/board/modify', {
                no : data.no,
                subject : subject,
                content : content,
                boardname : title
            }).then((res)=>{
                console.log(res)
                if (res.data.affectedRows===1) alert('저장 성공')
                else alert('저장 실패')
                navigate(`/board/list/${title}`)
            }).catch(err=>console.log(err))
    }

    return (
        <BoardModifyBlock>
			<div className="row">
                <h2>{title}</h2>
			    <form className="viewform" onSubmit={register}>
                    <div className="content">
                        <p>
                            <label for="userid">아이디</label><input type="text" name="userid" id="userid" value={data.userid} disabled />
                        </p>
                        <p>
                            <label for="title">제목</label><input type="text" name="title" id="title" value={subject} onChange={(e)=>setSubject(e.target.value)} />
                        </p>
                        <p>
                            <label for="content">내용</label><textarea name="content" id="content" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
                        </p>
                    </div>
                    <div className="btn_line">
                        <button type="submit" class="btn_bbs">저장</button>
    					<Link to={`/board/list/${title}`} className="btn_bbs">목록</Link>
                    </div>
    			</form>
			</div>
		</BoardModifyBlock>
    );
};

export default BoardModify;