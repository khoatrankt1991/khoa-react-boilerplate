[DOCS](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/)


```
optimization: {
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          comments: false //remove comments
        },
        compress: {
          drop_console: true //remove console log
        }
      }
    })],
  }
```

