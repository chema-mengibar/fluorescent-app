import styled, { css } from "styled-components";

import { {{> MyName }}Props } from ".";

export const {{> MyName }}Styled = styled.div<{{> MyName }}Props>`
  // CSS here

  ${(props: any): any => props.id && css`
    // CSS here
  `}

`;