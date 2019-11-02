import React from "react";
import styled from 'styled-components'

// import {theme} from '../../styles/theme.styles'
// import colorize from '../../helpers/colorize/colorize'

const IconWrapper= styled.div`
  width:${({size})=> size}px;
  height:${({size})=> size}px;
` ;

const SvgStyled = styled.svg`
  animation-name: ckw;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes ckw {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
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
      <SvgStyled 
        viewBox={`0 0 16 16`} 
        xmlns="http://www.w3.org/2000/svg"
      >
        <PathStyled color={color} d="M12.9 3.1c1.3 1.2 2.1 3 2.1 4.9 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-1.9 0.8-3.7 2.1-4.9l-0.8-0.8c-1.4 1.5-2.3 3.5-2.3 5.7 0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.2-0.9-4.2-2.3-5.7l-0.8 0.8z" />
      </SvgStyled>
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