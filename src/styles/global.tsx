import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    color: #212121;
  }

  body, input, button, textarea {
    font: 600 18px sans-serif;
  }
`