import React, { useContext, useState, useLayoutEffect } from "react";

import AppContext from '../../helpers/contexts/App.context'
import {Button} from '../button/button.styles'

import {ModalWrapper, ModalOverlay, ModalContainer, ModalControl, ModalPanel } from './modal.styles'

export const Modal = ({
  modalId,
  onSubmit,
  onClose,
  children
}) => {

  const { stateApp, dispatchApp } = useContext( AppContext )
  const [isOpen, setIsOpen] = useState( false );

  useLayoutEffect(() => {
    if(modalId === stateApp.dialogName){
      setIsOpen( stateApp.dialogIsOpen )
    }
    else{
      setIsOpen( false )
    }
  }, [stateApp.dialogIsOpen]);
    
  return (
    <ModalWrapper show={isOpen} >
      <ModalOverlay  onClick={()=>{ dispatchApp({ type: "closeDialog"}) }} />
      <ModalContainer>
        <ModalPanel>
          {children}
        </ModalPanel>
        <ModalControl>
          <Button small dark onClick={()=>{
            dispatchApp({ type: "closeDialog"})
            onClose()
            }}
          >
            x
          </Button>
        </ModalControl>

      </ModalContainer>

    </ModalWrapper>
  )
}