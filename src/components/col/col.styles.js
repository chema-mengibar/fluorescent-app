import styled from 'styled-components'

import {theme} from '../../styles/theme.styles'

export const ColWrapper = styled.div`
  display:flex;
  flex-direction: column;
  width:33%;
  height: auto;
  min-height: 100%;
  
  :not(:first-child):not(:last-child){
    border-left: 1px solid ${theme.decoration};
    border-right: 1px solid ${theme.decoration};
  }
`

export const ColHeader = styled.div`
  display:flex;
  border-bottom: 1px solid ${theme.decoration};
  height:40px;
  line-height:40px;
  padding:5px;
  color: ${theme.text};
  background-color: ${theme.base_des_01};
  text-align:center;
  text-transform: uppercase;
  width:100%;
  position:fixed;
  z-index: 1000;
`

export const ColContent = styled.div`
  flex-grow:1;
  margin-top: 39px;
`