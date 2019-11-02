# Context

>**Content**
>- Create Context
>- Provider
>- Usage in Functional-Component


## Create Context

```
const MyContext = React.createContext()
```
#### Store Object
```
let initialState = {
  name: '',
};
```

#### Actions
```
let reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return initialState;
    case "setName":
      return { ...state, name: action.payload };
  }
};
```
#### Provider
```
export const MyContextProvider = (props) => {

  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <MyContext.Provider value={value}>{props.children}</MyContext.Provider>
  );
}
```
```
export const getContext = () => { return MyContext }

export default MyContext
```

## Provider in APP

```
import MyContext, { MyContextProvider } from './helpers/contexts/MyContext.context'

ReactDOM.render( 
  <MyContextProvider>
    <App />
  </MyContextProvider>,
  document.getElementById("app")
);
```


## Usage
```
import MyComponent, {getContext} from '../../helpers/contexts/MyContext.context'
```

#### State, Dispatch
```
export const MyComponent = (props) => {

  const { state, dispatch } = useContext( RepositoryContext ) //OR ( getContext() )

  const myName = state.name

  const setName = ( _type ) => { dispatch({ type: "rename", payload: _type }) };
  const reset = () => dispatch({ type: "empty" });

```
```
  return (
    <div onClick={ ()=>{ setName( props.atomicType ); } }>
       {state.name} {myName}
    <div>
  )
}
```

## Links
- https://dev.to/email2vimalraj/react-hooks-lift-up--pass-down-state-using-usecontext-and-usereducer-5ai0
- https://dev.to/oieduardorabelo/react-hooks-how-to-create-and-update-contextprovider-1f68
- https://github.com/facebook/react/issues/15156
- https://github.com/facebook/react/issues/12596