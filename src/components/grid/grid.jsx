import styled from 'styled-components'

import {theme} from '../../styles/theme.styles'

export const GridHeader = styled.div`
  height: 40px;
  border-bottom: 1px solid ${theme.decoration};
  position:fixed;
  width:100%;
  background-color:${theme.base};
  z-index: 1000;
`

export const GridPanel = styled.div`
  flex: 1;
  display: flex;
  /* overflow: hidden; */
  margin-top: 39px;
  max-width: 100%;
  width: 100%;
  clip-path: inset( -100vw -100vw -100vw 0 );
`

