import React from "react";
import styled from 'styled-components';
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import emailimg from '../assets/email.png'

const StyledHead = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 40%;
    header {
        display:flex;
        justify-content: center;
        font-size: 2.6rem;
        font-weight: 600;
    }
    nav {
        display: flex;
        justify-content: space-evenly;
        margin-top: 10%;
    }

`
const StyledSocial = styled.div`
    width: 25%;
    display: flex;
    flex-flow:row;
    align-items:center;
    
    img {
        width: 25px;
    }
    a {
        text-decoration: none;
        color: #000000;
    }
    a.imageLink {
        padding-right: 5%;
    }
    a:hover {
        color:#228B22;
        transition: .4s
    }

`

export default function Head () {
    return (
        <StyledHead>
            <header>Garrett Yien</header>
            <nav>
            <StyledSocial>
                <a href="mailto:yien.garrett94@gmail.com" className="imageLink"><img src={emailimg}/></a>
                <a href="mailto:yien.garrett94@gmail.com">Email</a>
            </StyledSocial>
            <StyledSocial>
                <a href='https://www.linkedin.com/in/garrett-yien/' target='blank' className="imageLink"><img src={linkedin}/></a>
                <a href='https://www.linkedin.com/in/garrett-yien/' target='blank'>LinkedIn</a>
            </StyledSocial>
            <StyledSocial>
                <a href='https://github.com/garrettwyien' target='blank' className="imageLink"><img src={github}/></a>
                <a href='https://github.com/garrettwyien' target='blank'>GitHub</a>
            </StyledSocial>
            </nav>
            
        </StyledHead>
    );
};