import React, {useContext } from "react";

import Config  from '../../config'

import {getContext} from '../../helpers/contexts/Repository.context'

import IconConnect from '../icon/icon-connect'
import {theme} from '../../styles/theme.styles'

import { 
  ConectorWrapper, ConectorAction, ConectorDecoration,
} from './conector.styles'

export const Conector = ({left, active, status, id}) => {
  const { state, dispatch } = useContext( getContext() )
  return (
    <ConectorWrapper left={left} 
      onClick={ () =>{
        if( Config.actions.connect){
          left ? 
            dispatch({ type: "setNodeIdTo", payload: id}) :
            dispatch({ type: "setNodeIdFrom", payload: id})
          }
        }
      }
    >
      <ConectorAction active={active} left={left} status={status} >
        { left && state.nodeIdTo == id && <IconConnect size={15} color={theme.text} />}
        { !left && state.nodeIdFrom == id && <IconConnect size={15} color={theme.text}/>}
      </ConectorAction>
      <ConectorDecoration active={active} left={left} status={status} />
    </ConectorWrapper>
  )
}