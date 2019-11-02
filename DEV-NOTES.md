
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

## Issues

### useEffect and fetch promise
**// issue:fetch-state**
>Warning: Can't perform a React state update on an unmounted component.
This is a no-op, but it indicates a memory leak in your application.
To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

- https://risanb.com/posts/regenerator-runtime-is-not-defined/
- https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined
- https://medium.com/@selvaganesh93/how-to-clean-up-subscriptions-in-react-components-using-abortcontroller-72335f19b6f7
- https://github.com/facebook/react/issues/15006
