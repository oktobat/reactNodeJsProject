import React, {useState, useRef, useEffect} from 'react';
import MapContainer from '../components/MapContainer'
import styled from 'styled-components'

const StoreBlock = styled.div`
    border-top:87px solid purple;
    .row {
        padding:50px 0;
        form {
            display:flex; margin-bottom:20px;
            input { padding:10px; width:50%; border-radius:5px 0px 0px 5px; 
                outline:none; border:1px solid green; }
            button { padding:10px; border-radius:0px 5px 5px 0px; background:green; 
                color:#fff; border:1px solid green; }
        }
    }
`

const Store = () => {

    const [inputText, setInputText] = useState('강남역 버거킹')
    const [place, setPlace] = useState('강남역 버거킹')
    const inputBox = useRef()

    const onChange = (e)=>{
        setInputText(e.target.value)
        // console.log(e)
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        setPlace(inputText)
        setInputText('')
        inputBox.current.focus()
    }

    useEffect(()=>{
        inputBox.current.focus()
    }, [])

    return (
        <StoreBlock>
            <div className="row">
                <form onSubmit={onSubmit}>
                    <input ref={inputBox} type="text" placeholder="장소입력" onChange={onChange} value={inputText} />
                    <button type="submit">검색</button>
                </form>
                <MapContainer searchPlace={place} />
            </div>
        </StoreBlock>
    );
};

export default Store;