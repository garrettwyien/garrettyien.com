import {createGlobalStyle, injectGlobal} from 'styled-components';

injectGlobal`
    @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@300;600&display=swap');
    div {
        font-family: 'Mukta', sans-serif;
    }
`

// const GlobalStyle = createGlobalStyle`
    
// `;

// export default GlobalStyle;