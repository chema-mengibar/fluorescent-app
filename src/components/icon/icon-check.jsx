import React from "react";
import styled from 'styled-components'

// import {theme} from '../../styles/theme.styles'
// import colorize from '../../helpers/colorize/colorize'

const IconWrapper= styled.div`
  width:${({size})=> size}px;
  height:${({size})=> size}px;
` ;

const PathStyled = styled.path`
  fill: ${({color})=> color};
` ;

const Icon = ({
  color,
  size = 30
}) => {
  return (
    <IconWrapper size={size}>
      <svg 
        viewBox={`0 0 510 510`} 
        xmlns="http://www.w3.org/2000/svg"
      >
        <PathStyled color={color} d="M150.45,206.55l-35.7,35.7L229.5,357l255-255l-35.7-35.7L229.5,285.6L150.45,206.55z M459,255c0,112.2-91.8,204-204,204
          S51,367.2,51,255S142.8,51,255,51c20.4,0,38.25,2.55,56.1,7.65l40.801-40.8C321.3,7.65,288.15,0,255,0C114.75,0,0,114.75,0,255
          s114.75,255,255,255s255-114.75,255-255H459z"/>
      </svg>
    </IconWrapper>
  )
}

Icon.defaultProps = {
  color: 'white',
  size: 30   
}

export default Icon


/* 
Replace:
<path ->  <PathStyled color={color}


Usage:
import IconDummy from '../icon/icon-dummy'

<IconDummy size={20} color={'red} />
*/