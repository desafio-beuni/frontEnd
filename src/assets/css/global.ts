import { createGlobalStyle } from 'styled-components'

const GlobalCSS = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalCSS
