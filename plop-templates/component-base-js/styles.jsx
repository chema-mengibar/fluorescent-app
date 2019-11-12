import styled, { css } from "styled-components";


export const {{> MyName }}Styled = styled.div`
  // CSS here

  ${(props) => props.id && css`
    // CSS here
  `}

`;