import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// import { hot } from 'react-hot-loader/root'
// import { AppContainer } from 'react-hot-loader';
// require('react-hot-loader/patch')

// import {GlobalStyles} from './styles/global.styles'

// // import RepoMock from './helpers/repositoryService/repository.mocks' // dev:mocks
// import { AppContextProvider } from './helpers/contexts/App.context'
// import { RepositoryContextProvider } from './helpers/contexts/Repository.context'

console.log('index')

// import Config  from './helpers/config'
// import Server from './helpers/server'
// import {setRepo} from './helpers/repositoryService/repositoryService'
// import {GridHeader, GridPanel} from './components/grid/grid'
// import {Menu} from './components/menu/menu'
// import {Col} from './components/col/col'
// import {Keys} from './components/keys/keys'

const App2 = ()=>{
  return(
    <div> App 1321321</div>
  )
}


// const App = ( props ) => {
 
//   const atomicTypes = Config.layout
//   const [init, setInit] = useState( false ) // (true) // dev:mocks
//   // setRepo(RepoMock) // dev:mocks

//   useEffect(() => {
//     const {fetchPromise, cleanup} = Server.getRepo()
//     fetchPromise.then(json =>{
//       setRepo(json)
//       setInit(true)
//     });
//     return cleanup
//   }, [])

//   return (
//     <>
//       <GlobalStyles />
//       <GridHeader>
//         <Menu />
//       </GridHeader>
//       <GridPanel>
//         { 
//           init && atomicTypes && atomicTypes.map( (atomicType, idx ) => (
//             <Col 
//               key={`col_${atomicType}_${idx}`} 
//               atomicType={atomicType} 
//             >
//             </Col>
//           ))
//         }
//       </GridPanel>
//     </>
//   )
// }

// const HotApp = hot(App2)

// ReactDOM.render( 
//   <RepositoryContextProvider>
//     <AppContextProvider>
//       <App />
//       <Keys />
//     </AppContextProvider>
//   </RepositoryContextProvider>,
//   document.getElementById("app")
// );

// <AppContainer></AppContainer>

ReactDOM.render( 
    <App2 />
  ,
  document.getElementById("app")
);