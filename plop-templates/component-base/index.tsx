import React, {ReactElement} from 'react'

import {
 	{{> MyName }}Styled,
} from "./{{> my-name }}.styles";


export interface {{> MyName }}Props {
  id?: string;
}


const {{> MyName }} = (props:{{> MyName }}Props): ReactElement => {
  return (
    <{{> MyName }}Styled>

      Id: {props.id}

    </{{> MyName }}Styled>
  )
 };

export default {{> MyName }}