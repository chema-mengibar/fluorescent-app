import styled from 'styled-components'

import {theme} from '../../styles/theme.styles'
import colorize from '../../helpers/colorize/colorize'

const nodeMinHeight = 35

export const NodeWrapper = styled.div`
  display:flex;
  min-height: ${ nodeMinHeight }px;
  margin: 5px 0;
` ;

const processStatus = ({isSelected, hasParents, hasChildren, isInParent, isInChildren, nodeIdFrom, nodeIdTo})=> { 
  // ${ ({status}) => processStatus(status) };
  let color = theme.accent.default.base
  if( !isSelected ){
    color = isInParent ? theme.accent.primary.base : theme.accent.secondary.base 
  }
  return color
}

export const Box = styled.div`
  display:flex;
  flex-direction:row;
  flex-grow: 1;
  background-color: ${ theme.base_des_02 };
  color: ${theme.text};
`

export const BoxCol = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align:left;
  color: ${({status})=> status && (status.isSelected || status.isInParent || status.isInChildren ) ? processStatus(status) : theme.text };
  padding: 5px 0;

  &:first-child {
    margin-left: 10px;
    margin-right: 5px;
    flex-grow: 1;
    cursor:pointer;
  }
  &:last-child {
    margin-right: 10px;
    margin-left: 5px;
    width:20px;
    position:relative;
  }
`

function mappProgressToColor( progKey ){
  switch( progKey ){
    case 'P':
      return theme.complement.default.base   
    case 'C':
      return theme.complement.primary.base    
    case 'CI':
      return theme.complement.secondary.base    
    case 'CIe':
      return theme.complement.error.base    
  }
}

export const Sticker = styled.div`
  min-width:30px;
  padding:2px;
  border-radius: 5px;
  /* background-color: ${ ({progressKey})=> colorize.hexToRgbA( mappProgressToColor(progressKey), '.5') }; */
  /* color: ${colorize.hexToRgbA('#ffffff', '.5') }; */
  border: 1px solid ${ ({progressKey})=> colorize.hexToRgbA( mappProgressToColor(progressKey), '.5') };
  color: ${ ({progressKey})=> colorize.hexToRgbA( mappProgressToColor(progressKey), '.5') };
  text-align:center;
  font-size:10px;
  transition: all 0.5s ease;
`

export const Dotted = styled.div`
  width: 10px;
  align-self: flex-end;
  cursor:pointer;
  color: ${ ({visible})=> visible? theme.accent.default.base : theme.text_des_01};

  :after {
    display: inline-block;
    content: '\\2807';
    font-size: 18px;
  }

  :hover{
    color: ${ theme.accent.default.base };
  }
`

export const Li = styled.li`
  font-size: 12px;
  margin-bottom: 10px;
  color: ${theme.text};
  cursor:pointer;

  :hover{
    color: ${ theme.accent.default.base };
  }
`