# Setup

1) LOAD CSS
```
npm i -D css-loader style-loader
```

# Usage

```
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
```
  - css-loader: you can use import instead of require
  - style-loader: (*important*) import css file from within a javascript module.

# Split css file with javascript

 - Setup

```
npm i -D mini-css-extract-plugin
```
 - Usage
   - style-loader for dev env and MiniCssExtractPlugin for prod env

```
   MiniCssExtractPlugin.loader ( instead of `style-loader`)
```

2) USING POST CSS, SASS LOADER
```
module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }
    ]
  },
```
U may has some error and just need to follow the instruction in the error messages.
Here is the quick fix:
```
  npm i -D node-sass postcss-cssnext postcss-import postcss-loader sass-loader cssnano
```
create `postcss.config.js`
```
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'cssnano': {}
  }
}
```

3) Loading Images and Fonts
```
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/img/[name][hash].[ext]'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
```
