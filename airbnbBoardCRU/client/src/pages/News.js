import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { ImSpinner } from 'react-icons/im';

const NewsSection = styled.div`
    border-top:87px solid pink;
    .load { color:#000; font-size:100px; 
        display:flex; justify-content:center; align-items:center;
        .loadIcon { animation:loadSpin 5s linear infinite }
        @keyframes loadSpin {
            0% { transform:rotate(0deg) }
            100% { transform:rotate(3turn) }
        }
    }
`

const CategoryBlock = styled.div`
    display:flex; margin:50px 0 30px; justify-content:center;
    div { background:#ddd; padding:10px 20px; border-radius:10px; margin:50px 20px; cursor:pointer }
`
const ArticleBlock = styled.div`
    display:flex; flex-wrap:wrap; justify-content:space-between;
    .article { width:48%; display:flex; align-items:flex-start; margin:20px 0; 
        img { width:200px; margin-right:20px }
        .info { p:nth-child(1) { font-size:20px; margin-bottom:10px; font-weight:bold  } }
    }
`

const tabTit = [
    {name:'all', text:'전체보기'},
    {name:'business', text:'비즈니스'},
    {name:'entertainment', text:'엔터테인먼트'},
    {name:'health', text:'건강'},
    {name:'science', text:'과학'},
    {name:'sports', text:'스포츠'},
    {name:'technology', text:'기술'}
]

const News = () => {

    const [loading, setLoading] = useState(false)
    const [articles, setArticles] = useState([])
    const [category, setCategory] = useState('all')

    const onChange = (name) => {
        setCategory(name)
    }

    const getNews = async (category) => {
          try {
            const query = category === 'all' ? '' : `&category=${category}`
            const response = await axios.get(`https://airkim.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=11ba08dfbd7e4f3c83ac93b27aa1dcb7`)
            setLoading(true)
            setArticles(response.data.articles)
          } catch (e) {
            console.log(e)
          }
    }

    useEffect(()=>{
        getNews(category)
    }, [category])

    if (loading) {
        return (
            <NewsSection>
                <div className="row">
                    <CategoryBlock>
                        { tabTit.map(data => <div key={data.name} onClick={()=>onChange(data.name)} style={{ background: category===data.name && '#000', color:category===data.name && '#fff' }}>{data.text}</div>) }
                    </CategoryBlock>
                    <ArticleBlock>
                        { articles.map((data, index)=>(
                            <div className="article" key={index}>
                                <img src={data.urlToImage} alt={data.title} />
                                <div className="info">
                                    <p><a href={data.url} target="_blank" rel="noreferrer noopener">{data.title}</a></p>
                                    <p>{data.description}</p>
                                    <p>{data.publishedAt}</p>
                                    <p>{data.author}</p>
                                </div>
                            </div>
                        ))}
                    </ArticleBlock>
                </div>
            </NewsSection>
        );
    } else {
        return (
            <NewsSection>
                <div className="row">
                    <CategoryBlock>
                        { tabTit.map(data => <div key={data.name}>{data.text}</div>) }
                    </CategoryBlock>
                    <div className="load">
                        <ImSpinner className="loadIcon" />
                    </div>
                </div>
            </NewsSection>
        );
    }

   

};

export default News;