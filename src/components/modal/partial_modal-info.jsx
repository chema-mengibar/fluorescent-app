import React, { useContext, useState, useRef, useEffect } from "react";

import AppContext from '../../helpers/contexts/App.context'
import RepositoryContext from '../../helpers/contexts/Repository.context'

import { H1, P, Hr } from './modal.styles'

export const ModalInfo = ({
  modalId,
  onSubmit,
  onClose,
}) => {
  
  return (
    <>
      <H1>About</H1>
      <P> Chema Mengibar </P>
      <P> https://github.com/chema-mengibar </P>
      <Hr />
      <H1>Controls</H1>
      <P> Command Panel [ Ctrl + P ] </P>
      <P> Close Panel [ Esc ] </P>

    </>
  )
}