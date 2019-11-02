import React from 'react'

const RepositoryContext = React.createContext()
console.log('Init RepositoryContext')

let initialState = {
  changed: { flag:false, type:null },
  selectedNodeId: null,
  familyChildren: [],
  familyParents: [],
  nodeIdFrom: null,
  nodeIdTo: null,
  paintNodeConnections: false,
}

let reducer = (state, action) => {
  switch (action.type) {
    case "change":
      console.log('change')
      return { ...state, changed: { flag:true, type: action.payload } }
    case "updated":
      console.log('updated')
      return { ...state, changed: { flag:false, type: null } }
    case "reset":
      console.log('reset')
      return { ...initialState }
    case "setSelectedNodeId":
      return { ...state, selectedNodeId: action.payload }
    case "setPaintNodeConnections":
      return { ...state, paintNodeConnections: action.payload }
    case "addToFamilyChildren":
      return { ...state, familyChildren: [ ...state.familyChildren , ...action.payload] }
    case "setFamilyChildren":
      return { ...state, familyChildren: action.payload }
    case "addToFamilyParents":
      return { ...state, familyParents: [ ...state.familyParents , ...action.payload] }
    case "setFamilyParents":
      return { ...state, familyParents: action.payload }
    case "setNodeIdFrom":
      return { ...state, nodeIdFrom: action.payload }
    case "setNodeIdTo":
      return { ...state, nodeIdTo: action.payload }
    case "resetFromTo":
        return { ...state, nodeIdFrom:null, nodeIdTo:null }
  }
}

export const RepositoryContextProvider = (props) => {

  let [state, dispatch] = React.useReducer(reducer, initialState)
  let value = { state, dispatch }

  return (
    <RepositoryContext.Provider value={value}>
      {props.children}
    </RepositoryContext.Provider>
  )
}

export const getContext = () => { return RepositoryContext }

export default RepositoryContext