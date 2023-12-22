import React from 'react';
import styled from 'styled-components'
const FooterBlock = styled.footer`
    background:#f2f2f2;
    padding:50px 0;
    margin-top:50px; 
    .row {
      span {
          &::after { content:'ㆍ' }
          &:last-child::after { display:none }
      }
    }
`;


const Footer = () => {
    return (
        <FooterBlock>
            <div className="row">
                <span>&copy; 2021 Airbnb, Inc.</span>
                <span>개인정보 처리방침</span>
                <span>이용약관</span>
                <span>사이트맵</span>
                <span>한국의 변경된 환불정책</span>
                <span>회사 세부정보</span>
            </div>
        </FooterBlock>
    );
};

export default Footer;