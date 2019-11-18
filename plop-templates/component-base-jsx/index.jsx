import React, {ReactElement} from 'react'

import {
 	{{> MyName }}Styled,
} from "./{{> my-name }}.styles";


const {{> MyName }} = (props) => {
  return (
    <{{> MyName }}Styled>

      Id: {props.id}

    </{{> MyName }}Styled>
  )
 };

export default {{> MyName }}