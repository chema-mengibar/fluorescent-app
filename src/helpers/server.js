import Config from '../config'

const url = Config.server.url
const port =  Config.server.port ? `:${Config.server.port}` : ''

export default {
  sendEcco:( action ) => {

    const suffixAction = action ? `-${action}` : ''
    const abortController = new AbortController() // issue:fetch-state
    const signal = abortController.signal
    const fetchPromise = fetch(`${url}${port}/ecco${suffixAction}`, {signal: signal})
    .then(res => res.json())
    const cleanup = ()=>{
      abortController.abort()
    }
    return { fetchPromise, cleanup }
 },
  sendData:( repoObj, callback ) => {
    fetch( `${url}${port}/save`, {
      method: 'post',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(repoObj)
    }).then(function(response) {
      callback && callback()
      return response.json()
    }).then(function(data) {
      console.log( 'response error', data);
    })
  },
  getRepo:( )=>{
    const abortController = new AbortController() // issue:fetch-state
    const signal = abortController.signal
    const fetchPromise = fetch(`${url}${port}/repo`, {signal: signal})
    .then(res => res.json())
    const cleanup = ()=>{
      abortController.abort()
    }
    return { fetchPromise, cleanup }
 }
}