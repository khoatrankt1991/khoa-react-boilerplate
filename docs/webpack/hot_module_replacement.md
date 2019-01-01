
## Webpack Configuration
```
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
```

## Add this lines below to reload without refresh page
```
if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    ReactDOM.render(<NextApp />, document.getElementById('app'));
  })
}
```