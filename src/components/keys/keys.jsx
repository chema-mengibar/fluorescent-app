import React, { useContext, useCallback, useEffect } from "react";

import modalService from '../../helpers/modalService'
import AppContext from '../../helpers/contexts/App.context'
import {Modal} from '../modal/modal'
import {ModalCmd} from '../modal/partial_modal-cmd'
import {ModalInfo} from '../modal/partial_modal-info'
import {ModalComponentName} from '../modal/partial_modal-component-name'

export const Keys = (props) => {

  const { dispatchApp } = useContext( AppContext )

  const pressFunction = useCallback((event) => {
    if(event.keyCode === 27) {
      dispatchApp({ type: "closeDialog"})
      dispatchApp({ type: 'setDialogName' , payload: null})
    }
    if(event.keyCode === 32) {
      dispatchApp({ type: 'setDialogName' , payload: `cmd`})
      dispatchApp({ type: 'openDialog'}); 
    }

  }, []);

  useEffect(() => {
    document.addEventListener("keydown", pressFunction, false)
    return () => {
      document.removeEventListener("keydown", pressFunction, false)
    };

  }, []);

  function modalOnClose (){
    console.log('close modal callback')
  }
  
  return(
    <>
      <Modal 
        modalId={`cmd`}
        onClose={()=> modalOnClose()} 
      >
        <ModalCmd modalId={`cmd`} onSubmit={()=>{ 
          dispatchApp({ type: "closeDialog"})
        }} />
      </Modal>

      <Modal 
        modalId={`menuModal`} 
        onClose={()=> modalOnClose()} >
        <ModalInfo modalId={`menuModal`} onSubmit={ ()=>{}}/>
      </Modal>

      <Modal 
        modalId={`componentName`}
        onClose={()=> modalOnClose()} 
      >
        <ModalComponentName modalId={`componentName`} onSubmit={ modalService.getOnSubmit()  } />
      </Modal>
    </>
  )
}