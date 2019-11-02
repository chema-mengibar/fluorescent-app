import React, { useContext, useState, useRef, useEffect } from "react";

import AppContext from '../../helpers/contexts/App.context'
import {getContext} from '../../helpers/contexts/Repository.context'

import {getItemById} from '../../helpers/repositoryService/repositoryService'

import {Button} from '../button/button.styles'

import { H1, Input, Label } from './modal.styles'

export const ModalComponentName = ({
  modalId,
  onSubmit,
  onClose,
  onOpen,
}) => {

  const { stateApp, dispatchApp } = useContext( AppContext )
  const { state, dispatch } = useContext( getContext() )
  const [componentName, setComponentName] = useState( '' )

  const nameRef = useRef(null)

  function onChangeInput(event) {
    setComponentName(event.target.value)
  }

  function resetForm(){
    setComponentName('')
  }

  let selectedItem = null

  useEffect(() => {
    console.log( stateApp.dialogName )
    if( stateApp.dialogName === modalId && stateApp.dialogIsOpen ){
      setTimeout(() => { 
        if(state.selectedNodeId){
          selectedItem = getItemById( state.selectedNodeId )
          setComponentName( selectedItem.label )
        }else{
          resetForm()
        }
        nameRef.current.focus() // nameRef.current.focus() // todo: focus
      })
    }
  }, [stateApp.dialogIsOpen])

  return (
    <>
      <H1>Add Component</H1>
      <Label htmlFor={'component-name'}>Component name</Label>
      <Input 
        type="text" 
        ref={nameRef} 
        name="component-name" 
        value={ componentName } 
        onChange={onChangeInput} 
      />
      <Button onClick={()=>{
        const modalData = {componentName}
        onSubmit( modalData ) // col:componentOnSubmit(modalData)
        resetForm()
        dispatchApp({ type: "closeDialog"})
        }}
      >
       { state.selectedNodeId ? 'Modify' : 'Create' }
      </Button>
    </>
  )
}