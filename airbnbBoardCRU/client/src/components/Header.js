import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'
import styled from 'styled-components'
import cn from 'classnames'
import { AirContext } from '../context/AirContext'

const HeaderBlock = styled.header`
    box-shadow:0px 2px 2px #999;
    padding:20px 0; 
    position:fixed; width:100%; top:0; left:0; z-index:99999; 
    .row { display:flex; justify-content:space-between; align-items:center; 
        nav { 
            @media ${props=>props.theme.tabletS}{
                display:none;
            }
            .depth1 { display:flex;
              >li { margin:0 20px; font-size:20px; position:relative; 
                    padding:10px 0; 
                  .depth2 { display:none; z-index:99999;
                    position:absolute; top:100%; left:50%; 
                    transform:translateX(-50%);
                    width:150px;
                    background:#fff; color:#000; border:1px solid #000;
                    padding:20px 0; border-radius:10px;
                    li { padding:5px 0; font-size:16px; text-align:center }
                  }
                  &:hover > .depth2 { display:block }
              }
            } 
        }
        .mobNav { position:relative; color:#000;
            button { 
                padding:10px 20px; border-radius:50px; font-size:20px; 
                display:flex; align-items:center;   
                background:${props=>props.theme.btnBgColor};
                color:#fff;
            }
            .mobNavList { display:none; z-index:99999;
                position:absolute; top:100%; right:0;
                border:1px solid #000; width:150px; padding:10px 0px;
                border-radius:10px; background:#fff;
                &.open { display:block;  }
                ul {
                    li { padding:0 20px; line-height:30px; 
                        &:nth-child(2) { border-bottom:1px solid #ddd; padding-bottom:10px; margin-bottom:10px }
                    }
                }
            }
        }
    }
`
const Header = () => {

    const [open, setOpen] = useState(false)
    const {setActive, loging, setLoging} = useContext(AirContext)

    const onSelect = (id)=>{
        setActive(id)
    }

    const [scy, setScy] = useState(0)
    const onScroll = ()=>{
        setScy(window.scrollY)
    }
    useEffect(()=>{
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])


    return (
        <HeaderBlock style={{ background: scy ? '#fff' : 'transparent', color:scy ? '#000' : '#fff'}}>
                <div className="row">
                    <h1>
                        <Link to="/">로고</Link>
                    </h1>
                    <nav>
                        <ul className="depth1">
                            <li><Link to="/product"  onClick={ ()=>onSelect(0) }>Product</Link>
                                <ul className="depth2">
                                    <li><Link to="/product" onClick={ ()=>onSelect(0) }>상품메뉴0</Link></li>
                                    <li><Link to="/product" onClick={ ()=>onSelect(1) }>상품메뉴1</Link></li>
                                    <li><Link to="/product" onClick={ ()=>onSelect(2) }>상품메뉴2</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/board/list/notice">Boards</Link>
                                <ul className="depth2">
                                    <li><Link to="/board/list/notice">Notice</Link></li>
                                    <li><Link to="/board/list/qna">QnA</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/community">Community</Link></li>
                            <li><Link to="/store">Store</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </nav>
                    <div className="mobNav">
                        <button onClick={ ()=>setOpen(!open) }>
                            <GiHamburgerMenu style={{marginRight:'10px'}} /><FaUserCircle />
                        </button>
                        <div className={cn('mobNavList', {open})}>
                            <ul>
                                <li>{ loging ? <Link onClick={()=>{sessionStorage.clear(); setLoging('')}}>LogOut</Link> : <Link to="/login">Login</Link> }</li>
                                <li>{ loging ? <Link>Hi! {loging}님</Link> : <Link to="/join">Join</Link>}</li>
                                <li><Link to="/product" onClick={ ()=>onSelect(0) }>Product</Link></li>
                                <li><Link to="/news">News</Link></li>
                                <li><Link to="/community">Community</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </HeaderBlock>
    );
};

export default Header;