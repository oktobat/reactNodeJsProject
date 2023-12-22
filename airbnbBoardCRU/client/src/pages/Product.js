import React, { useContext } from 'react';
import styled from 'styled-components';
import products from '../components/doctors.json'
import { AirContext } from '../context/AirContext'

const ProductSection = styled.div`
    border-top:87px solid green;
`
const ListBlock = styled.div`
    display:flex; justify-content:center; 
    div { background:#ddd; padding:10px 20px; 
        border-radius:10px; margin:50px 20px; 
        cursor:pointer }
`

const ContentBlock = styled.div`
    display:flex; flex-wrap:wrap;
    justify-content:space-between;
    .product { width:45%; margin:20px 0; display:flex;     
              align-items:center;  
         img { width:100px; margin-right:20px; }
         .info { span { display:block } }
    }
 }
`

const tabTit = [
    {id:0, title:'상품메뉴0', category:products.part1 },
    {id:1, title:'상품메뉴1', category:products.part2 },
    {id:2, title:'상품메뉴2', category:products.part3 }
]

const Product = () => {

    const {active, setActive } = useContext(AirContext)

    const onSelect = (id)=>{
        setActive(id)
    }

    return (
        <ProductSection>
            <div className="row">
                <ListBlock>
                    { tabTit.map(data => <div key={data.id} onClick={()=>onSelect(data.id)} style={{ background: active===data.id ? '#000' : '#ddd', color:active===data.id ? '#fff' : '#000' }}>{data.title}</div> ) }
                </ListBlock>
                <ContentBlock>
                    {
                        tabTit[active].category.map((data, index)=>(
                            <div className="product" key={index}>
                                <img src={data.photo} alt={data.name} />
                                <div className="info">
                                    <strong>{data.name}</strong>
                                    <span>{data.depart}</span>
                                    <p>{data.about}</p>
                                </div>
                            </div>
                        ))
                    }
                </ContentBlock>
            </div>
        </ProductSection>
    );
};

export default Product;