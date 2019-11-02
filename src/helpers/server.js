import Config from '../config'

function getDomainPort(){

  //  window.location.hostname  -> "domain.com"
  //  window.location.pathname  -> "/sub-dir/app.html"
  //  window.location.origin    -> "http://domain.com"
  //  document.URL              -> "http://domain.com/sub-dir/app.html"

  let port = ''
  let url = ''

  if( window.location.origin.indexOf('localhost') > -1){
    console.log( 'Server::localhost' )
    url = 'http://127.0.0.1'
    port = '8080'
  }else{
    console.log( 'Server::remote' )
    const fileName = window.location.pathname.split('/').pop()
    const hostName = window.location.pathname.replace( fileName, '' )
    url = window.location.origin + hostName + 'index.php'
  }
  return {url,port}
}


const domainPort = getDomainPort()

const url = (Config.server.url !== '') ? Config.server.url : domainPort.url 
const port = (Config.server.port !== '') ? `:${Config.server.port}` : `:${domainPort.port}`

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