import styled from 'styled-components'

import {theme} from '../../styles/theme.styles'
import colorize from '../../helpers/colorize/colorize'

const nodeMinHeight = 35
const connectorWidth = 40
const connectorDecorationWidth = 10
const actionHeight = Math.min( 25 , nodeMinHeight )


const processStatus = ({isSelected, hasParents, hasChildren, isInParent, isInChildren, nodeIdFrom, nodeIdTo})=> { 
  // ${ ({status}) => processStatus(status) };
  let color = theme.accent.default.base
  if( !isSelected ){
    color = isInParent ? theme.accent.primary.base : theme.accent.secondary.base 
  }
  return color
}

export const ConectorAction = styled.div`
  flex: 1;
  align-self: center;
  padding: 5px; /* Icon padding */
  transition: background-color 0.2s ease-out,  box-shadow 0.2s ease-out;
  background-color: ${
    ({active, status}) => (active) ?
      processStatus(status) :
      colorize.hexToRgbA('#ffffff', '.1')
    };
  box-shadow: 0 0 10px  ${
    ({active, status}) => (active) ?
      processStatus(status) :
      colorize.hexToRgbA('#ffffff', '.1')
    };
  height: ${actionHeight}px;
  order:${ ({left}) => left ? `0` : `1`};
  
`

export const ConectorDecoration = styled.div`
  width: ${connectorDecorationWidth}px;
  background-color: ${theme.base_des_02};
  order: ${ ({left}) => left ? '1' : '0'};
  ${({left}) => {
    const borderRadiusCss = (left ? 
      `border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      ` :
    `border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    `)
    return borderRadiusCss
  }}

  ${({left, active, status}) => {
    const color = processStatus(status);
    const borderLineCss = (active ?
      (left ?
        `border-left: 2px solid ${color}; //box-shadow: 0 0 10px ${color};` : 
        `border-right: 2px solid ${color}; //box-shadow: 0 0 10px ${color};`
      ) : ''
    )
    return borderLineCss
  }}
`

export const ConectorWrapper = styled.div`
  display:flex;
  width: ${connectorWidth + 2}px;
  cursor: pointer;

  :hover{
    ${ConectorDecoration}{
      ${ ({left}) => left ?
        `border-left: 2px solid ${theme.accent.tertiary.base};` :
        `border-right: 2px solid ${theme.accent.tertiary.base};`
      }
    }
    ${ConectorAction}{
      background-color: ${ colorize.hexToRgbA( theme.accent.tertiary.base , '.4')};
    }
  }
`
