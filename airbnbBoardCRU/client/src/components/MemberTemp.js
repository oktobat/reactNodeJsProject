import axios from 'axios';
import React, {useState, useRef, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AirContext } from '../context/AirContext'

const MemberTempBlock = styled.div`
    border-top:87px solid orange;
    .row {
        padding:50px 0;
        h2 { font-size:30px; text-align:center }
        div { 
            max-width:500px; margin:0 auto;
            h3 { text-align:center; font-size:40px; margin:30px 0 }
            form {
                .intext { width:100%; padding:15px 10px; 
                    border-radius:10px; border:1px solid #555;
                    margin-bottom:20px; 
                }
                button { display:block; padding:15px 0; background:#999;
                    border-radius:10px; margin:20px 0; color:#fff;
                    width:100%; 
                }
            }
            .membertype { display:block; text-align:right; color:blue; text-decoration:underline  }
        }
    }
`

const MemberTemp = ({ type }) => {
    const textMap = { login:'로그인', join:'회원가입'}
    const text = textMap[type]

    const navigate = useNavigate()
    const {setLoging} = useContext(AirContext)

    const rname = useRef()
    const rid = useRef()
    const rpw = useRef()

    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [pwok, setPwok] = useState('')
    const [gender, setGender] = useState('')
    const [message, setMessage] = useState('아이디 중복체크')

    const idCheck = (e)=>{
        setId(e.target.value)
        if (e.target.value && type==='join') {
            axios.post('http://localhost:3000/auth/idcheck', {
                userid : e.target.value
            }).then((res)=>{
                console.log(res)
                if (res.data[0]) {
                    setMessage('중복된 아이디입니다.')
                } else {
                    setMessage('가능한 아이디입니다.')
                }
            }).catch(err=>console.log(err.toJSON()))
        }
    }

    const register = (e)=>{
        e.preventDefault()
        if (!name && type==='join') {
            alert('이름을 입력하세요.')
            rname.current.focus()
            return false
        }
        if (!id) {
            alert('아이디를 입력하세요.')
            rid.current.focus()
            return false
        }
        if (!pw) {
            alert('비밀번호를 입력하세요.')
            rpw.current.focus()
            return false
        } else if (!pwok && type==='join') {
            alert('비밀번호를 정확히 입력하세요.')
            rpw.current.focus()
            return false
        } else if (pw!==pwok && type==='join') {
            alert('비밀번호를 정확히 입력하세요.')
            rpw.current.focus()
            return false
        }
        if (!gender && type==='join') {
            alert('성별을 선택하세요.')
            return false
        }
        if (message!=='가능한 아이디입니다.' && type==='join') {
            alert('중복된 아이디입니다.')
            rid.current.focus()
            return false
        }
        if (type==='join') {
            axios.post('http://localhost:3000/auth/join', {
                username : name,
                userid : id,
                userpw : pw,
                gender : gender
            }).then((res)=>{
                console.log(res)
                if (res.data.affectedRows===1) alert('회원가입 성공')
                else alert('회원가입 실패')
                navigate('/')
            }).catch(err=>console.log(err))
        } else {
            axios.post('http://localhost:3000/auth/login', {
                    userid : id,
                    userpw : pw
            }).then((res) => {
                console.log(res);
                if (res.data[0]) {
                  sessionStorage.setItem("id", id); 
                  setLoging(id)
                  navigate("/");
                } else {
                  alert("아이디, 패스워드가 정확하지 않습니다.");
                  rid.current.value = "";
                  rpw.current.value = "";
                }
              })
              .catch((err) => {
                console.log(err);
              });
        }
    }

    return (
        <MemberTempBlock>
            <div className="row">
                <h2>멤버쉽</h2>
                <div>
                    <h3>{ text }</h3>
                    <form onSubmit={register}>
                        { type==='join' && <input ref={rname} className="intext" type="text" placeholder="이름" value={name} onChange={(e)=>setName(e.target.value)} />}
                        <input className="intext" ref={rid} type="text" placeholder="아이디" value={id} onChange={idCheck} />
                        { type==='join' && <span>{message}</span> }
                        <input className="intext" ref={rpw} type="password" placeholder="비밀번호" value={pw} onChange={(e)=>setPw(e.target.value)} />
                        { type==='join' && 
                            <>
                                <input className="intext" type="password" value={pwok} onChange={(e)=>setPwok(e.target.value)} placeholder="비밀번호 확인" />
                                <label>성별 : </label>   
                                남 <input type="radio" checked={gender==='m'} onChange={()=>setGender('m')} style={{ marginRight:'10px'}} />
                                여 <input type="radio" checked={gender==='w'} onChange={()=>setGender('w')} />
                            </>                     
                        }
                        <button type="submit">{ text }</button>
                    </form>
                    { type==='login' ? <Link to="/join" className="membertype">회원가입</Link> : <Link to="/login" className="membertype">로그인</Link> }
                </div>
            </div>
        </MemberTempBlock>
    );
};

export default MemberTemp;