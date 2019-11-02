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
        viewBox={`0 0 455 455`} 
        xmlns="http://www.w3.org/2000/svg"
      >
        <PathStyled color={color} d="M227.5,0C101.761,0,0,101.75,0,227.5C0,353.239,101.75,455,227.5,455C353.24,455,455,353.25,455,227.5
  				C455,101.761,353.25,0,227.5,0z M227.5,425C118.598,425,30,336.402,30,227.5S118.598,30,227.5,30S425,118.598,425,227.5
  				S336.403,425,227.5,425z"/>
  			<PathStyled color={color} d="M289.139,142.359H165.862c-12.959,0-23.502,10.543-23.502,23.502v123.278c0,12.959,10.543,23.502,23.502,23.502h123.277
  				c12.96,0,23.503-10.543,23.503-23.502V165.861C312.642,152.902,302.099,142.359,289.139,142.359z M282.642,282.642H172.36
  				V172.359h110.282V282.642z"/>
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
