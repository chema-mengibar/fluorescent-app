import React, { useContext, useState, useEffect } from "react";

import Config  from '../../config'
import Server from '../../helpers/server';
import AppContext from '../../helpers/contexts/App.context'
import RepositoryContext from '../../helpers/contexts/Repository.context'
import { getRepo, connectFromTo, getItemById, disconnecToFrom} from '../../helpers/repositoryService/repositoryService'
import {Button} from '../button/button.styles'

import {theme} from '../../styles/theme.styles'

import IconCreate from '../icon/icon-create'
import IconConnect from '../icon/icon-connect'
import IconCut from '../icon/icon-cut'
import IconEcco from '../icon/icon-ecco'
import IconInfo from '../icon/icon-info'
import IconSpinner from '../icon/icon-spinner'
import IconCheck from '../icon/icon-check'
import IconChange from '../icon/icon-change'

import {
  MenuWrapper,
  Area, Block,
  Label, Value, Separator,
  ServerMsg, ServerStatus
} from './menu.styles'

export const Menu = (props) => {

  const { stateApp, dispatchApp } = useContext( AppContext )
  const { state, dispatch } = useContext( RepositoryContext )

  const [serverStatus, setServerStatus] = useState( );
  const [serverMsg, setServerMsg] = useState( );

  function serverProps( status, msg ){
    setServerStatus(status)
    setServerMsg(msg)
  }

  function triggerUpdate(){
    dispatch({ type: "setPaintNodeConnections", payload: true })
    setTimeout(
      function() {
        dispatch({ type: "setPaintNodeConnections", payload: false })
      }
      .bind(this),
      500
    )
  }

  function callBackSuccess(){
    setTimeout( ()=> serverProps('success', 'Saved'), 1500 )
  }

  function saveData(){
    serverProps('loading', 'Saving items')
    const data = getRepo()
    Server.sendData(data, callBackSuccess)
  } 

  function sendEcco( action ){
    const {fetchPromise, cleanup} = Server.sendEcco( action )
    fetchPromise.then(json =>{
      console.log(json)
    });
  } 

  function formatWord( word ){
    return word.substring(0,3).toUpperCase();
  }

  useEffect(() => {
    setServerStatus(stateApp.server.status)
    setServerMsg(stateApp.server.msg)
  }, [stateApp.server]);

  return (
    <>
      <MenuWrapper>
        <Area>
          { Config.actions.save && 
            <Block>
              <Button  onClick={()=> { saveData() }} >
                Save
                <IconCreate color={'white'} size={15} />
              </Button>
            </Block> 
          }
          { Config.actions.connect && 
            <Block>
              <Label> From </Label>
              <Value
                onClick={ ()=>{
                  if( state.nodeIdFrom){
                    // this.blur(); // todo: button lose focus
                    dispatch({ type: "setSelectedNodeId" , payload: state.nodeIdFrom});
                    triggerUpdate()
                  }
                } }
              >
                {state.nodeIdFrom ? `${ formatWord( getItemById(state.nodeIdFrom).type)}::${getItemById(state.nodeIdFrom).label}` : 'no-selected'}</Value>
              <Separator />
              <Label> To </Label>
              <Value
                onClick={ ()=>{
                  if( state.nodeIdTo){
                    dispatch({ type: "setSelectedNodeId" , payload: state.nodeIdTo})
                    triggerUpdate()
                  }
                }}
              >
                {state.nodeIdTo ? `${ formatWord(getItemById(state.nodeIdTo).type)}::${getItemById(state.nodeIdTo).label}` : 'no-selected'}</Value>
              <Separator />
              <Button 
                onClick={()=> { 
                  if( state.nodeIdFrom && state.nodeIdTo && state.nodeIdFrom !== state.nodeIdTo ){
                    connectFromTo( state.nodeIdFrom, state.nodeIdTo )
                    dispatch({ type: "setSelectedNodeId" , payload: state.nodeIdTo});
                    triggerUpdate()
                    dispatchApp({ type: "setServerStatus" , payload:{ msg:'Changes', status:'warning'}})
                  }
                  else{
                    console.log('Action not possible')
                  }
                }}
              >
                Connect <IconConnect size={15} />
              </Button>
              <Button 
                onClick={()=> { 
                  if( state.nodeIdFrom || state.nodeIdTo){
                    disconnecToFrom(  state.nodeIdTo , state.nodeIdFrom)
                    dispatch({ type: "setSelectedNodeId" , payload: state.nodeIdTo});
                    triggerUpdate()
                    dispatchApp({ type: "setServerStatus" , payload:{ msg:'Changes', status:'warning'}})
                  }
                }}
              >
                Disconnect <IconCut size={15} />
              </Button>
              <Button dark onClick={()=> { dispatch({ type: "resetFromTo" }); }} > Clear </Button>
            </Block>
          }
        </Area>
        <Area>
          <Block>
            <Label> Server </Label>
            <ServerMsg type={serverStatus}> { serverMsg ? serverMsg : ''} </ServerMsg>
           {serverStatus &&  <ServerStatus>
              { (serverStatus === 'loading') && <IconSpinner size={15} color={theme.accent.default.base} /> }
              { (serverStatus === 'success') && <IconCheck size={15} color={theme.success}/>}
              { (serverStatus === 'warning') && <IconChange size={15} color={theme.warning}/>}
            </ServerStatus>}
          </Block>
          { Config.actions.ecco && 
            <Block>
              <Button onClick={()=> { sendEcco()}} >
                Send Radiation <IconEcco size={20} />
              </Button>
              <Button dark onClick={()=> { sendEcco('stop')}} >
                Stop Radiation
              </Button>
            </Block>
          }
          <Block>
            <Button small dark
              onClick={()=> {
                dispatchApp({ type: 'setDialogName' , payload: 'menuModal'}); 
                dispatchApp({ type: "openDialog"});
              }}
            >
              <IconInfo size={15}/>
            </Button>
          </Block>  
        </Area>
      </MenuWrapper>
    </>
  )
}