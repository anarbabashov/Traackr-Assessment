// vue.config.js file to be placed in the root of your repository

module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/],
    },
  },
};
