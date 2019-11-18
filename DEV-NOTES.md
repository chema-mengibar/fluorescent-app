
## Packages
- https://www.npmjs.com/package/regenerator-runtime
- https://www.npmjs.com/package/babel-plugin-named-asset-import
- https://www.npmjs.com/package/dotenv-webpack
- https://www.npmjs.com/package/dotenv
- https://github.com/webpack-contrib/webpack-hot-middleware
- https://github.com/gaearon/react-hot-loader

- https://github.com/gaearon/react-hot-loader/issues/1227
- https://helmetjs.github.io/docs/dont-sniff-mimetype/
- https://webpack.js.org/configuration/dev-server/

## Testing
https://jestjs.io/docs/en/configuration

## Folder Names
Plop and the parser works with the node.label string
Plop uses to create the folder and partial in code
and the parser to check the import in code of connected components.
This folder name should be keebabCase, but Plop use a self method to convert the name
and Parse us lodash.kebabCase

It´s posible to define Helper in Plop. Helper are a reference of a Method called in plop tasks.
For this case have been created to helper that uses lodash camel and kebab case,
to avoid custom cases functions of Plop

## Issues

### Folder/Componnet/Node-label name conflict
https://github.com/chema-mengibar/fluorescent-app/issues/3

### static lexical binding
https://stackoverflow.com/questions/41324554/how-to-call-another-function-within-the-same-object/41324575

**ERROR**
```javascript
const namecase = {
  upperCase: (str)=>{
    return str.toUpperCase()
  },
  pascalCase: (str)=>{
    const _str = this.upperCase(str); // < this. error
    return _str
  }
}
```

**OK**
```javascript
const namecase = {
  upperCase: function(str){
    return str.toUpperCase()
  },
  pascalCase: function(str){
    const _str = this.upperCase(str)
    return _str
  }
}
```

### useEffect and fetch promise
**// issue:fetch-state**
>Warning: Can't perform a React state update on an unmounted component.
This is a no-op, but it indicates a memory leak in your application.
To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

- https://risanb.com/posts/regenerator-runtime-is-not-defined/
- https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined
- https://medium.com/@selvaganesh93/how-to-clean-up-subscriptions-in-react-components-using-abortcontroller-72335f19b6f7
- https://github.com/facebook/react/issues/15006
