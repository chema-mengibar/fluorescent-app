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
        viewBox={`0 0 512 512`} 
        xmlns="http://www.w3.org/2000/svg"
      >
        <PathStyled color={color} d="m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469s-132.667969 26.628906-181.019531 74.980469c-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531s26.628906 132.667969 74.980469 181.019531c48.351562 48.351563 112.640625 74.980469 181.019531 74.980469s132.667969-26.628906 181.019531-74.980469c48.351563-48.351562 74.980469-112.640625 74.980469-181.019531s-26.628906-132.667969-74.980469-181.019531zm-181.019531 397.019531c-119.101562 0-216-96.898438-216-216s96.898438-216 216-216 216 96.898438 216 216-96.898438 216-216 216zm20-236.019531h90v40h-90v90h-40v-90h-90v-40h90v-90h40zm0 0"/>
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