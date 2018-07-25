
exports.config = {
  outputTargets: [{
    type: 'www',
    dir: 'docs',
    inlineLoaderScript: false,
  }],
  globalScript: 'src/app.ts',
  globalStyle: 'src/app.css'
};
