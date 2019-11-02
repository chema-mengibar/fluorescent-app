import { createGlobalStyle } from 'styled-components'

import {fontCssGlobal} from './fonts.styles'
import {theme} from './theme.styles'

export const GlobalStyles = createGlobalStyle`

  ${fontCssGlobal}

  html, body {
    min-height: 100%;
    height: 100%;
    background-color: ${theme.base_des_01};
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box !important;
    -webkit-box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  #app{
    display: flex;
    flex-direction: column;
    min-height:100%;
  }
`
