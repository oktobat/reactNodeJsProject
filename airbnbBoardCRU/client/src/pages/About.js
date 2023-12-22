import React from 'react';
import styled from 'styled-components'

const AboutBlock = styled.div`
    border-top:87px solid brown;
    .row { padding:50px 0 }
`
const About = () => {
    return (
        <AboutBlock>
            <div className="row">
                <iframe title="강남그린컴퓨터" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1582.6672539955364!2d127.02737308861103!3d37.5000279209544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15857ce38dd%3A0xac87641577138f5d!2z6re466aw7Lu07ZOo7YSw7JWE7Lm0642w66-4IOqwleuCqOy6oO2NvOyKpA!5e0!3m2!1sko!2skr!4v1685412782916!5m2!1sko!2skr" width="100%" height="450" style={{ border:'0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </AboutBlock>
    );
};

export default About;