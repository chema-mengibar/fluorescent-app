import React, { useContext, useState, useRef, useEffect } from "react";

import Config  from '../../config'
import AppContext from '../../helpers/contexts/App.context'
import RepositoryContext from '../../helpers/contexts/Repository.context'

import { emptyItems, emptyTree } from '../../helpers/repositoryService/repositoryService'

import { H1, Input, Label, Ul, Li } from './modal.styles'

export const ModalCmd = ({
  modalId,
  onSubmit,
  onClose,
}) => {
  
  const { dispatch } = useContext( RepositoryContext )
  const { stateApp, dispatchApp } = useContext( AppContext )

  const paintColumns = ()=>{
    let qeue = []
    Config.layout.forEach( atomicType => { 
      qeue.push( ()=>{
        setTimeout(() => {
          dispatch({ type: "change" , payload: atomicType})
          qeue.shift()
          qeue.length > 0 && qeue[0]()
        });
      })
    });
    qeue[0]()
  }

  const listCommands = [
    { name:'Clear Connectors', action:()=>{ dispatch({ type: "resetFromTo" }); }},
    { name:'Item copy', action:()=>{ console.log(' action called')}},
    { name:'Item delete', action:()=>{ console.log(' action called')}},
    { name:'Sort by Atoms', action:()=>{ console.log(' action called')}},
    { name:'Item deselect', action:()=>{ 
      dispatch({ type: "reset"})
    }},
    { name:'Delete all items', action:()=>{ 
      emptyItems()
      emptyTree()
      paintColumns()
      dispatchApp({ type: "setServerStatus" , payload:{ msg:'Changes', status:'warning'}})
    }},
    { name:'Delete all connection', action:()=>{ 
      emptyTree()
      paintColumns()
      dispatch({ type: "reset"})
      dispatchApp({ type: "setServerStatus" , payload:{ msg:'Changes', status:'warning'}})
    }},
  ]

  const [cmd, setCmd] = useState( '' )
  const [list, setList] = useState( [...listCommands] )

  const cmdRef = useRef(null);

  function handleChange(event) {
    const inpuTText = event.target.value
    setCmd(inpuTText)

    const filteredCmd = listCommands.filter( cmdItem =>{
      return cmdItem.name.toLowerCase().indexOf( inpuTText.toLowerCase()) > -1
    })
    setList(filteredCmd)
  }

  function resetForm(){
    setCmd('')
  }

  // // todo: focus
  useEffect(() => {
    if( stateApp.dialogIsOpen ){
      // nameRef.current.focus() // todo: focus
      setTimeout(() => { cmdRef.current.focus() })
    }
  }, [stateApp.dialogIsOpen])

  return (
    <>
      <H1>Command Modal</H1>
      <Input 
        type="text" 
        ref={cmdRef} 
        name="cmd-search" 
        value={ cmd } 
        onChange={handleChange} 
      />
      <Ul>
      { 
        list && list.map( (cmdItem, idx) =>{
          return (
            <Li 
              key={`cmd-${idx}`} 
              onClick={ ()=> {
                cmdItem.action();
                onSubmit() 
              }}
            >
              {cmdItem.name}
            </Li>
          )
        })
      }
      </Ul>
    </>
  )
}