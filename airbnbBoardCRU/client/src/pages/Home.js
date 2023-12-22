import React, { useEffect } from 'react';
import styled from 'styled-components'
import Slider from 'react-slick'           // npm i react-slick
import 'slick-carousel/slick/slick.css'    // npm i slick-carousel 
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import AOS from 'aos'
import 'aos/dist/aos.css'

const HomeSectionBlock = styled.div`
    .article1 { position:relative;
        .slide {
            height:30vw; position:relative; 
            background-size:cover;
            background-position:center;
            &.slide1 { background-image:url('./images/img3.jpg') };
            &.slide2 { background-image:url('./images/img5.jpg') };
            &.slide3 { background-image:url('./images/img7.jpg') };
            .text {
                position:absolute; top:50%; left:50%;
                transform:translate(-50%, -50%);
                font-size:30px; color:#fff; 
                text-align:center;
                button { padding:10px; background:#fff; border-radius:10px }
            }
        }

        .slick-arrow {
            position:absolute; top:50%; transform:translateY(-50%); font-size:50px; color:#f00; 
            &.slick-prev { left:50px; z-index:9999 }
            &.slick-next { right:50px } 
         }
   
        .slick-dots { position:absolute; bottom:30px; left:50%; 
            transform:translate(-50%);
           li { display:inline-block; padding:0 5px; 
                button { width:30px; height:30px; border-radius:50%; background:#fff; text-indent:-9999px; overflow:hidden }
             &.slick-active { button { background:${props=>props.theme.btnBgColor} } }
           }
         }
    }

    // article2 시작
    .article2 {
        .row {
            display:flex; flex-wrap:wrap; padding:50px 0; justify-content:space-between;
            li { width:30%; margin:20px; display:flex; align-items:center; 
                img { width:50%; margin-right:20px; border-radius:10px;
                    transition:all 0.5s;
                    &:hover { transform:scale(1.2) }
                }
            }
        }
    }
    .article3 { margin-bottom:50px; 
        h2 { font-size:20px; margin:20px 0;  }
        ul { display:flex; justify-content:space-between; 
          li { width:32%; }
        }
    }
    .article4 {
        background:#000; padding:100px 0; color:#fff; 
        .row { display:flex; justify-content:space-between; 
            img { border-radius:40px 40px 0 0 }
            p { background:#999; border-radius:0 0 40px 40px; padding:20px }
            .left { width:51% }
            .right { width:47%; 
                display:flex; flex-direction:column; justify-content:space-between;
                >div { height:49%; }
                .rrow1 { display:flex; justify-content:space-between; 
                    >div { width:48% }
                }
            }
        }
    }
`

const Home = () => {

    const settings = {
        dots : true,
        autoplay : true,
        autoplaySpeed : 3000,
        slidesToShow : 1,
        slidesToScroll : 1,
        prevArrow : <IoIosArrowDropleftCircle />,
        nextArrow : <IoIosArrowDroprightCircle />
    }

    useEffect(()=>{
        AOS.init({duration:500})
    }, [])

    return (
        <HomeSectionBlock>
            <div className="article1">
                <Slider {...settings}>
                    <div className="slide slide1">
                        <div className="text">
                            <p>이제, 여행은 가까운 곳에서 1</p>
                            <button>근처의 숙소 둘러보기 1</button>
                        </div>
                    </div>
                    <div className="slide slide2">
                        <div className="text">
                            <p>이제, 여행은 가까운 곳에서 2</p>
                            <button>근처의 숙소 둘러보기 2</button>
                        </div>
                    </div>
                    <div className="slide slide3">
                        <div className="text">
                            <p>이제, 여행은 가까운 곳에서 3</p>
                            <button>근처의 숙소 둘러보기 3</button>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="article2">
                <ul className="row">
                    <li data-aos="fade-up" data-aos-delay="0">
                        <img src="./images/img4.jpg" alt="" />
                        <div>
                            <strong>부산</strong>
                            <p>차로 4.5시간 거리</p>
                        </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="100">
                        <img src="./images/img4.jpg" alt="" />
                        <div>
                            <strong>부산</strong>
                            <p>차로 4.5시간 거리</p>
                        </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="200">
                        <img src="./images/img4.jpg" alt="" />
                        <div>
                            <strong>부산</strong>
                            <p>차로 4.5시간 거리</p>
                        </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="300">
                        <img src="./images/img4.jpg" alt="" />
                        <div>
                            <strong>부산</strong>
                            <p>차로 4.5시간 거리</p>
                        </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="400">
                        <img src="./images/img4.jpg" alt="" />
                        <div>
                            <strong>부산</strong>
                            <p>차로 4.5시간 거리</p>
                        </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="500">
                        <img src="./images/img4.jpg" alt="" />
                        <div>
                            <strong>부산</strong>
                            <p>차로 4.5시간 거리</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="article3 row">
                <h2 data-aos="fade-up" data-aos-delay="100">어디에서나, 여행은 살아보는거야</h2>
                <ul data-aos="fade-up" data-aos-delay="100">
                    <li>
                        <img src="./images/img4.jpg" alt="" />
                        <p>집 전체</p>
                    </li>
                    <li>
                        <img src="./images/img4.jpg" alt="" />
                        <p>집 전체</p>
                    </li>
                    <li>
                        <img src="./images/img4.jpg" alt="" />
                        <p>집 전체</p>
                    </li>
                </ul>
            </div>
            <div className="article4">
                <div className="row">
                    <div className="left">
                        <img src="./images/img8.jpg" alt="" />
                        <p>상하이 샤오롱베이 만드는법 배우기</p>
                    </div>
                    <div className="right">
                        <div className="rrow1">
                            <div>
                                <img src="./images/img4.jpg" alt="" />
                                <p>상하이 샤오롱베이</p>
                            </div>
                            <div>
                                <img src="./images/img6.jpg" alt="" />
                                <p>상하이 샤오롱베이</p>
                            </div>
                        </div>
                        <div className="rrow2">
                            <img src="./images/img5.jpg" alt="" />
                            <p>상하이 샤오롱베이</p>
                        </div>
                    </div>
                </div>
            </div>
        </HomeSectionBlock>
    );
};

export default Home;