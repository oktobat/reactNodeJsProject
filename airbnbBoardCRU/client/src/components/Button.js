import React from 'react';
import styled from 'styled-components'

const ButtonBlock = styled.button`
    padding:10px 20px; border-radius:50px; font-size:20px; 
    display:flex; align-items:center; 
    background:${props=>props.theme.btnBgColor};
`

const Button = ({children}) => {
    return (
        <ButtonBlock>{children}</ButtonBlock>
    );
};

export default Button;