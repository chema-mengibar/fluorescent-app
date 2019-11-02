import React, {useContext, useState, useLayoutEffect } from "react";

import Config  from '../../config'

import AppContext from '../../helpers/contexts/App.context'
import {getContext} from '../../helpers/contexts/Repository.context'

import modalService from '../../helpers/modalService'
import { repository, addItem } from '../../helpers/repositoryService/repositoryService'
import {Node} from '../node/node'

import {Button} from '../button/button.styles'
import IconAdd from '../icon/icon-add'

import {ColWrapper, ColHeader, ColContent} from './col.styles'

function getItemsByType( _type ){
  return repository.items.filter( item => item.type === _type)
}

export const Col = (props) => {

  const { state, dispatch } = useContext( getContext() )
  const { dispatchApp } = useContext( AppContext )

  const [items, setItems] = useState( getItemsByType( props.atomicType ) )

 
  function componentOnSubmit ( modalData ){
    console.log('submit modal callback', modalData )
    const addedItemId = addItem( props.atomicType , modalData.componentName )
    dispatch({ type: "change" , payload: props.atomicType})
    dispatchApp({ type: "setServerStatus" , payload:{ msg:'Changes', status:'warning'}})
  }

  useLayoutEffect(() => {
    if( state.changed.type == props.atomicType ){
      console.log("CHANGE runs", props.atomicType)
      const filteredItems = getItemsByType( props.atomicType )
      setItems( filteredItems )
      dispatch({ type: "updated"})
    }
  }, [state.changed.type])
  
  return (
    <>
      <ColWrapper>
        <ColHeader>
          {
            Config.actions.add && 
            <Button 
              dark  
              onClick={ () => {  
                modalService.setOnSubmit( componentOnSubmit )
                dispatch({ type: 'setSelectedNodeId' , payload: null})
                dispatchApp({ type: 'setDialogName' , payload: `componentName`})
                dispatchApp({ type: 'openDialog'})
              }} >
              ADD {props.atomicType} 
              <IconAdd size={15} color={'white'}/>
            </Button>}
          {!Config.actions.add && props.atomicType }
        </ColHeader>
        <ColContent> 
          {
            items &&  items.map( (item, idx) => { 
              return( 
                <Node key={ `node_${props.atomicType}_${idx}` } {...item} /> 
              )
            })
          }
          </ColContent>
      </ColWrapper>
    </>
  )
}