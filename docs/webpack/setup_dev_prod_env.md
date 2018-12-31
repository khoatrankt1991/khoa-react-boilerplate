# dev

```
  npm i -D webpack-dev-server webpack-merge
```

```
const merge = require('webpack-merge');
const common = require('./common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

```

# prod

Just need to set the mode to `production`
> We encourage you to have source maps enabled in production, 
> as they are useful for debugging as well as running benchmark > tests. 
> That said, you should choose one with a fairly quick build speed that's recommended for production use (see devtool).
> For this guide, we'll use the source-map option in production as opposed to the inline-source-map we used in development:

`Avoid inline-*** and eval-*** use in production as they can increase bundle size and reduce the overall performance.`