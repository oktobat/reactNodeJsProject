import React, {useState} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const BoardWriteBlock = styled.div`
    border-top:87px solid lightblue;
    .row { padding:50px 0; 
        h2 { text-align:center; font-size:25px; margin-bottom:20px }
        .writeform .content { border:1px solid #000; padding:10px }
        .writeform p { display:flex; margin:10px 0 }
        .writeform p label { width:100px; height:40px; }
        .writeform p input { flex-grow:1; height:40px; padding:10px; border:1px solid #ddd }
        .writeform p textarea { flex-grow:1; height:300px; padding:10px; border:1px solid #ddd }

        .btn_line { text-align:center; margin:30px 0 }
        .btn_line .btn_bbs {display:inline-block; width:70px; height:35px; font-size:14px;   background:#384d75; color:#fff; border:none; text-align:center; line-height:35px; margin:0 5px }
    }
    
`

const BoardWrite = () => {
    const title = useParams().boardName
    // const titleName = { notice:'공지사항', qna:'질의응답'}
    const navigate = useNavigate()

    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')

    const register = (e)=>{
        e.preventDefault()
        if (!subject) {
            alert('제목을 입력하세요.')
            return false
        } 
        if (!content) {
            alert('내용을 입력하세요.')
            return false
        } 

        axios.post('http://localhost:3000/board/write', {
                userid : sessionStorage.getItem('id'),
                subject : subject,
                content : content,
                title : title
        }).then((res)=>{
                console.log(res)
                if (res.data.affectedRows===1) alert('성공')
                else alert('실패')
                navigate(`/board/list/${title}`)
            }).catch(err=>console.log(err.toJSON()))
    }

    return (
        <BoardWriteBlock>
			<div className="row">
                <h2>글쓰기</h2>
			    <form className="writeform" onSubmit={register}>
                    <div className="content">
                        <p>
                            <label for="userid">아이디</label><input type="text" name="userid" id="userid" value={sessionStorage.getItem('id')} disabled />
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
    					<button type="reset" class="btn_bbs">취소</button>
    					<Link to={`/board/list/${title}`} className="btn_bbs">목록</Link>
                    </div>
    			</form>
			</div>
		</BoardWriteBlock>
    );
};

export default BoardWrite;