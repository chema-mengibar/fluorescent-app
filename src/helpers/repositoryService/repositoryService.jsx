export let repository = {}

function generateId( _type ){
  const prefix = 'node-' //_type
  const counter = new Date().getTime()
  const newId = `${prefix}${counter}`
  return newId
}

export function getItemById( id ){
  const foundItemList = repository.items.filter( (item)=> item.id == id )
  return foundItemList.length ? foundItemList[0] : null
}

export function getTreeItemById( id ){
  const foundItemList = repository.tree.filter( (item)=> item.id == id )
  return foundItemList.length ? foundItemList[0] : null
}

export const addItem = ( _type, _label, _dispatch) => {
  const newItem = {
    type: _type,
    label: _label,
    id: generateId( _type )
  }
  repository.items.push(newItem)
  return newItem.id
}

export const modifyItem = ( _id, _label) => {

  const items = repository.items.map( (item)=> {
    if(item.id === _id ){
      item.label = _label
    }
    return item
  })
  repository.items = [...items]
}

export const getRepo = () =>{
  return repository
}
 
export const setRepo = ( repo) =>{
  repository = {...repo}
}

export const emptyItems = ( ) =>{
  repository.items = []
  repository.items.length = 0
}

export const emptyTree = ( ) =>{
  repository.tree = []
  repository.tree.length = 0
}

export function deleteItem( id ){
  const treeItemList = repository.items.filter( (item)=> item.id !== id )
  repository.items = [...treeItemList]
}

export function getChildren( id ){
  const treeItemList = repository.tree.filter( (item)=> item.id == id )
  return treeItemList.length && treeItemList[0].children ? treeItemList[0].children : []
}

export function getParents( id ){
  const otherNodes = repository.tree.filter( (item)=> { 
    return ( item.id != id ) && ( item.children && item.children.indexOf(id) > -1 )
  } )
  const parents = otherNodes.map(element => element.id);
  return parents.length  ? parents : []
}


export function connectFromTo( fromNode, toNode){

  let found = false
  repository.tree.forEach(element => {
    if( element.id === toNode ){
      found = true
      if( element.children ){
        element.children.push( fromNode )
      }
      else{
        element.children = [fromNode]
      }
    }
  });

  if(!found){
    const newConnection = {
      id: toNode,
      children:[ fromNode ]
    }
    repository.tree.push( newConnection )
  }
}

export function disconnecToFrom( toId, fromId ){
  console.log( toId, fromId  )
  const toNode = getTreeItemById( toId )
  const filteredChildren = toNode.children.filter( childId => childId != fromId )

  repository.tree.forEach(element => {
    if( element.id === toId ){
      if( element.children ){
        element.children = [...filteredChildren]
      }
      else{
        element.children = filteredChildren
      }
    }
  });
}

/* Usage: 

import {getItemById, getChildren} from '../../helpers/repositoryService/repositoryService'

*/