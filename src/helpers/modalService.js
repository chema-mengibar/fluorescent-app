
const bridge = {
  onOpen:null,
  onSubmit:null,
  onClose:null,
}

export default {
  getOnOpen: ( )=> bridge.onOpen,
  getOnSubmit: ( )=> bridge.onSubmit,
  getOnClose: ( )=> bridge.onClose,
  setOnOpen: ( fct )=>{
    bridge.onOpen = fct
  },
  setOnSubmit: ( fct )=>{
    bridge.onSubmit = fct
  },
  setOnClose: ( fct )=>{
    bridge.onClose = fct
  },
  resetOnOpen: ( )=>{
    bridge.onOpen = null
  },
  resetOnSubmit: ( )=>{
    bridge.onSubmit = null
  },
  resetOnClose: ( )=>{
    bridge.onClose = null
  },
}