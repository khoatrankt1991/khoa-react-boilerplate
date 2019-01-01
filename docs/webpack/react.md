
```
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
```

In file webpack config:
```
  {
    test: /\.js*/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
```

In file `.babelrc`
```
  "presets": ["@babel/preset-env", "@babel/preset-react"]
```

