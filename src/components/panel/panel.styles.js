import styled from 'styled-components'

import {theme} from '../../styles/theme.styles'

export const PanelWrapper = styled.div`
  position:absolute;
  top: 0;
  left: 0;
  width:100%;
  /* height:100%; */
  display:block;
  /* display:${ ({visible})=> visible ? 'block' : 'none'}; */
  visibility:${ ({visible})=> visible ? 'visible' : 'hidden'};
  opacity:${ ({visible})=> (visible ? 1 : 0)};
  height:${ ({visible})=> (visible ? '100%' : 0)};
  transition: opacity .2s ease-out;
  z-index:10000;
`

export const PanelOverlay = styled.div`
  position:absolute;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  background-color: transparent;
`

export const PanelContainer = styled.div`
  display:flex;
  flex-direction: column;
  position: relative;
  margin: ${ ({inside}) => inside ? '30px -130px' : '-145px -130px'};
  padding: 5px 5px 15px 15px;
  width:150px;
  min-height:50px;
  color: ${theme.text};
  background-color: ${theme.base_des_01};
  border-radius:5px;
  border: 2px solid ${theme.decoration};
  ${ ({inside}) => inside ? 
    `
    border-top: 1px solid ${theme.accent.default.base};
    border-right: 1px solid ${theme.accent.default.base};
    ` : 
    `
    border-bottom: 1px solid ${theme.accent.default.base};
    border-right: 1px solid ${theme.accent.default.base};
    `
  };
`

export const PanelHeader = styled.div`
  & > *{
    float: right;
  }
`

export const UlContent = styled.ul`
  display:block;
  list-style-type: none;
  padding:0;
  margin: 15px 0;
`