const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  // ...
  resolve: {
    alias: {
      vue: '@vue/runtime-dom',
    },
    extensions: ['.ts', '.js', '.vue', '.json'],
  },
  module: {
    rules: [
      // ...
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true,
              compilerOptions: {
                // Set this to true if you're using Vue 3 composition API
                experimentalDecorators: true,
              },
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};
