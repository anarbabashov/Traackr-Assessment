// vue.config.js file to be placed in the root of your repository
const mode =
  process.env.NODE_ENV === 'development' ? 'development' : 'production';

module.exports = {
  mode,
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/],
    },
  },
};
