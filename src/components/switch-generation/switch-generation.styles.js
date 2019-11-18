import styled, {css} from 'styled-components'

import {theme} from '../../styles/theme.styles'
import colorize from '../../helpers/colorize/colorize'

export const SwitchGenerationWrapper = styled.div`
  position:relative;
  width: 160px;
  height:20px;
  user-select: none;
` ;

export const StepsWrapper = styled.div`
  display: flex;
  position:absolute;
  width: 100%;
  height:100%;
  z-index: 100;
`

export const Step = styled.div`
  width: ${({size})=> `${100/size}%` };
  height:100%;
  text-align:center;
  line-height:20px;
  /* background-color: ${colorize.hexToRgbA(theme.base_des_01, 0)}; */
  
  ${({cursor, gen}) =>
    ( cursor > gen ) ? css`
      :hover{
        color: ${theme.accent.default.base};
      };
    `:''
  }

  ${({cursor, gen}) =>
    ( cursor !== gen ) ? css`
        cursor:pointer;
    `:''
  }
`

const rad = 5

export const CursorWrapper = styled.div`
  display: flex;
  position:absolute;
  width: 100%;
  height:100%;
  z-index: 99;
  background-color: ${theme.base_des_02};
  border-radius: ${`${rad}px`};
`


export const Cursor = styled.div`
  width: ${({size, position })=> `${(100/size)*position}%` };
  height:100%;
  background-color: ${colorize.hexToRgbA('#ffffff', '.3')};
  transition: width .2s ease-out;
  border-top-left-radius: ${`${rad}px`};
  border-bottom-left-radius: ${`${rad}px`};
  ${({position, size }) => 
    (position === size ) ? 
    css`
      border-top-right-radius: ${`${rad}px`};
      border-bottom-right-radius: ${`${rad}px`};
    ` :
    ''
  
  }
`
