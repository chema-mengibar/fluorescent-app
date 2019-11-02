import styled, {css} from 'styled-components'

import {theme} from '../../styles/theme.styles'
import colorize from '../../helpers/colorize/colorize'

export const Button = styled.button`

  display:flex;
  justify-content: space-around;
  align-items: center;
  user-select: none;
  border:0;
  outline:0;
  
  ::-moz-focus-inner {
    border: 0;
    outline: 0;   
  }

  ${({small}) =>{
    return small ?
    css`
      min-width: 20px;
      height: 30px;
    ` :
    css`
      min-width: 100px;
      height: 30px;
      div{ /* Not just Icon button - seprataion between text and icon */
        margin-left:5px;
      }
    `
  }}

  border-radius:5px;
  color: ${ theme.text};
  padding: 0 5px;
  cursor:pointer;

  ${({dark}) =>{
    return dark ?
    css`
      background-color: ${theme.base};
    ` :
    css`
      background-color: ${colorize.hexToRgbA('#ffffff', '.3')};
    `
  }}

  :hover{
    background-color: ${ theme.accent.default.base};
  }
  
  :-moz-focusring {
    outline: 0;
    border: 0;
    box-shadow: 0 0 10px ${theme.accent.default.base}; /*todo: blinky blinky? */
    background-color: ${ theme.accent.default.base};
  }

  :not(:last-child){
    margin-right:5px;
  }
`