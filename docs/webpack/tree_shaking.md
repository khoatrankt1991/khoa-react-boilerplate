Tree Shaking is used to remove dead code on production
To detect unused code in development, add this line
```
optimization: {
    usedExports: true
  }
```
in `package.json` file:
 `"sideEffects": "false"`

 - Add BundleAnalyzerPlugin to handle how much modules are using
 