import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { ImSpinner } from 'react-icons/im';

const CommunitySection = styled.div`
    border-top:87px solid pink;
    .row { padding:50px 0 }
    .load { color:#000; font-size:100px; 
        display:flex; justify-content:center; align-items:center;
        .loadIcon { animation:loadSpin 5s linear infinite }
        @keyframes loadSpin {
            0% { transform:rotate(0deg) }
            100% { transform:rotate(3turn) }
        }
    }
    ul { max-height:300px; overflow-y:auto; border:1px solid #000 }
`

const Community = () => {

    const [loading, setLoading] = useState(false)
    const [place, setPlace] = useState([])

    const getData = async ()=>{
        try {
            const response = await axios.get('https://airkim.herokuapp.com/http://openapi.kepco.co.kr/service/EvInfoServiceV2/getEvSearchList?serviceKey=tsxcXyzF%2BXgzdg7s3iUG9BMSxzhXszdC68k9VquGWo9zq657lbmJPTjMzeWFsX5JhFXJvf8Yfgeh56Vou5hiog%3D%3D&pageNo=1&numOfRows=3407')
            console.log(response.data.response.body.items.item)
            setLoading(true)
            setPlace(response.data.response.body.items.item)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    }, [])

    if (!loading) {
        return (
            <CommunitySection>
                <div className="row">
                    <div className="load">
                        <ImSpinner className="loadIcon" />
                    </div>
                </div>
            </CommunitySection>
        );
    } else {
        return (
            <CommunitySection>
                <div className="row">
                    <h2>전국 전기차충전소</h2>
                    <ul>
                        { 
                            place.map( (data, index) => <li key={index}>{data.addr}</li>) 
                        }
                    </ul>
                </div>
            </CommunitySection>
        );
    }

    
};

export default Community;