import React from 'react'

const AppContext = React.createContext()

let initialState = {
  name: '',
  dialogIsOpen: false,
  dialogName:null,
  generation:1,
  server:{
    status:null,
    msg:''
  }
};

let reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return initialState
    case "empty":
      return { ...state, name: state.name = ''}
    case "rename":
      return { ...state, name: action.payload }
    case "setGeneration":
      return { ...state, generation: action.payload }
    case "setServerStatus":
      return { ...state, server: { msg: action.payload.msg, status: action.payload.status } }
    case "openDialog":
      return { ...state, dialogIsOpen: true }
    case "closeDialog":
      return { ...state, dialogIsOpen: false }
    case "setDialogName":
      return { ...state, dialogName: action.payload  }
    case "resetDialog":
      return { ...state, dialogIsOpen: false, dialogName:null }
  }
};

export const AppContextProvider = (props) => {

  let [state, dispatch] = React.useReducer(reducer, initialState)
  let value = { stateApp: state, dispatchApp: dispatch }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}

export const getAppContext = () => { return AppContext }

export default AppContext


/* Usage:

import AppContext, { AppContextProvider } from './helpers/contexts/App.context'

*/