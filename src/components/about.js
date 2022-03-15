import React from "react";
import styled from 'styled-components';

const StyledAbout = styled.div`
    width: 40%;
`
export default function About () {
    return (
        <StyledAbout>
            <h3>About me:</h3>
            <p>I am an aspiring programmer located in New York. I graduated from Tulane University with a degree in psychology and pursued a career in social work for several years after. Wanting to broaden my horizons and expand the ways I could add value to any work that I do, I attended and completed a full stack web development course at the <a href="https://www.bloomtech.com/">Bloom Institute of Technology (formerly Lambda School)</a>. Currently, I am excited to take on whatever challenges that may lie ahead and continue to develop my skills and experience.</p>
        </StyledAbout>
    );
};