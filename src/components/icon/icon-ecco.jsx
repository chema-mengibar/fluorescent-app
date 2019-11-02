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
        viewBox={`0 0 314 314`} 
        xmlns="http://www.w3.org/2000/svg"
      >
      	<PathStyled color={color}  d="M7,138.428c-3.866,0-7,3.134-7,7v23.145c0,3.866,3.134,7,7,7s7-3.134,7-7v-23.145C14,141.561,10.866,138.428,7,138.428z"/>
        <PathStyled color={color}  d="M34.273,138.428c-3.866,0-7,3.134-7,7v23.145c0,3.866,3.134,7,7,7s7-3.134,7-7v-23.145
          C41.273,141.561,38.14,138.428,34.273,138.428z"/>
        <PathStyled color={color}  d="M61.546,128.635c-3.866,0-7,3.134-7,7v42.73c0,3.866,3.134,7,7,7s7-3.134,7-7v-42.73
          C68.546,131.769,65.412,128.635,61.546,128.635z"/>
        <PathStyled color={color}  d="M88.818,117.063c-3.866,0-7,3.134-7,7v65.875c0,3.866,3.134,7,7,7c3.866,0,7-3.134,7-7v-65.875
          C95.818,120.196,92.685,117.063,88.818,117.063z"/>
        <PathStyled color={color}  d="M116.092,96.588c-3.866,0-7,3.134-7,7v106.824c0,3.866,3.134,7,7,7c3.866,0,7-3.134,7-7V103.588
          C123.092,99.722,119.958,96.588,116.092,96.588z"/>
        <PathStyled color={color}  d="M143.364,48.071c-3.866,0-7,3.134-7,7v203.857c0,3.866,3.134,7,7,7c3.866,0,7-3.134,7-7V55.071
          C150.364,51.205,147.23,48.071,143.364,48.071z"/>
        <PathStyled color={color}  d="M170.637,65.43c-3.866,0-7,3.134-7,7V241.57c0,3.866,3.134,7,7,7c3.866,0,7-3.134,7-7V72.43
          C177.637,68.563,174.503,65.43,170.637,65.43z"/>
        <PathStyled color={color}  d="M197.909,100.148c-3.866,0-7,3.134-7,7v99.703c0,3.866,3.134,7,7,7c3.866,0,7-3.134,7-7v-99.703
          C204.909,103.282,201.775,100.148,197.909,100.148z"/>
        <PathStyled color={color}  d="M225.183,121.067c-3.866,0-7,3.134-7,7v57.864c0,3.866,3.134,7,7,7s7-3.134,7-7v-57.864
          C232.183,124.201,229.049,121.067,225.183,121.067z"/>
        <PathStyled color={color}  d="M252.456,129.971c-3.866,0-7,3.134-7,7v40.059c0,3.866,3.134,7,7,7c3.866,0,7-3.134,7-7v-40.059
          C259.456,133.105,256.322,129.971,252.456,129.971z"/>
        <PathStyled color={color}  d="M279.728,138.428c-3.866,0-7,3.134-7,7v23.145c0,3.866,3.134,7,7,7c3.866,0,7-3.134,7-7v-23.145
          C286.728,141.561,283.594,138.428,279.728,138.428z"/>
        <PathStyled color={color}  d="M307,138.428c-3.866,0-7,3.134-7,7v23.145c0,3.866,3.134,7,7,7s7-3.134,7-7v-23.145
          C314,141.561,310.866,138.428,307,138.428z"/>
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
<PathStyled color={color}  ->  <PathStyled color={color} Styled color={color}


Usage:
import IconEcco from '../icon/icon-ecco'

<IconEcco size={20} color={'red} />
*/