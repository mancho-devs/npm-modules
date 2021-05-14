const babelOptions = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ]
};

module.exports = require('babel-jest').createTransformer(babelOptions);
